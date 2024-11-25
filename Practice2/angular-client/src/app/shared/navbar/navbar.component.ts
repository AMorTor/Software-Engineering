import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``
})
export default class NavbarComponent {
  menuOpen = false;

  constructor(private auth: AuthService) { }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public logout(): void {
    this.auth.signOut();
  }
}
