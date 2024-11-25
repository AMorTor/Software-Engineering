import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, switchMap } from 'rxjs';

import { User } from '../../../interfaces/user.interface';
import { JwtDecoderService } from '../jwt/jwt-decoder.service';
import { RequestServerService } from '../server/request-server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private lOGIN_URL: string = 'http://18.222.115.122:8080/';
  private authToken: string = 'authToken';
  public defaultRole: string = 'USER';
  public currentUser: User | null = null; // Propiedad para almacenar el usuario actual

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private jwtDecoder: JwtDecoderService, // Inyecta el servicio JwtDecoderService
    private requestServerService: RequestServerService // Inyecta el servicio RequestServerService
  ) { }

  public signIn(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.lOGIN_URL + "auth/login", { username, password })
      .pipe(
        tap(response => {
          if (response.token) {
            this.setToken(response.token);
          }
        }),
        switchMap(response => {
          const userId = this.getUserIdFromToken(response.token);
          if (userId) {
            return this.requestServerService.getUserById(userId);
          } else {
            throw new Error('User ID is null');
          }
        }),
        tap(user => {
          console.log('User:', user);
          this.currentUser = user; // Guardar la información del usuario en la propiedad
        })
      );
  }

  public signUp(username: string, lastname: string, email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.lOGIN_URL + "auth/register", { username, lastname, email, password, defaultRole: this.defaultRole })
      .pipe(
        tap(response => {
          if (response.token) {
            this.setToken(response.token);
          }
        }),
        switchMap(response => {
          const userId = this.getUserIdFromToken(response.token);
          if (userId) {
            return this.requestServerService.getUserById(userId);
          } else {
            throw new Error('User ID is null');
          }
        }),
        tap(user => {
          console.log('User:', user);
          this.currentUser = user; // Guardar la información del usuario en la propiedad
        })
      );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.authToken, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.authToken);
  }

  private getUserIdFromToken(token: string): string | null {
    const decodedToken = this.jwtDecoder.decodeToken(token);
    return decodedToken ? decodedToken.userId : null;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  public signOut(): void {
    localStorage.removeItem(this.authToken);
    this.currentUser = null;
    this.router.navigate(['/signin']);
    console.log("User signed out");
  }
}
