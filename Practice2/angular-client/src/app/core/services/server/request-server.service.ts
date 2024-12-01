import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestServerService {
  private BASE_URL: string = 'http://18.222.115.122:8080/';

  constructor(private httpClient: HttpClient) { }

  // Método para obtener un usuario por ID
  public getUserById(userId: string): Observable<User> {
    return this.httpClient.get<User>(`${this.BASE_URL}api/users/${userId}`);
  }

  // Método para obtener todos los usuarios
  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.BASE_URL}api/users`);
  }

  // Método para crear un nuevo usuario
  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}api/users`, user);
  }

  // Método para actualizar un usuario por ID
  public updateUser(userId: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.BASE_URL}api/users/${userId}`, user);
  }

  // Método para eliminar un usuario por ID
  public deleteUser(userId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}api/users/${userId}`);
  }
}
