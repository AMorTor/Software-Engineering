import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private lOGIN_URL: string = 'http://18.222.115.122:8080/';
  private authToken: string = '';
  public defaultRole: string = 'USER';
  constructor(private httpClient: HttpClient, private router: Router) { }

  public signIn(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.lOGIN_URL + "auth/login", { username, password })
      .pipe(tap(response => {
        if (response.token) {
          this.setToken(response.token);
        }
      }));
  }

  public signUp(username: string, lastname: string, email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.lOGIN_URL + "auth/register", { username, lastname, email, password, defaultRole: this.defaultRole })
      .pipe(tap(response => {
        if (response.token) {
          this.setToken(response.token);
        }
      }));
  }

  private setToken(token: string): void {
    localStorage.setItem(this.authToken, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.authToken);
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
    this.router.navigate(['/signin']);
    console.log("User signed out");
  }
}
