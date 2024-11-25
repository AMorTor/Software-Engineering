import { Component, OnInit } from '@angular/core';
import { RequestServerService } from '../../../core/services/server/request-server.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private server: RequestServerService) { }

  ngOnInit(): void {
    this.server.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log('Users:', this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


  updateUser(userId: string): void {
    // Lógica para actualizar el usuario
    console.log('Update user with ID:', userId);
  }

  deleteUser(userId: string): void {
    this.server.deleteUser(userId).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== userId);
        console.log('User deleted with ID:', userId);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
