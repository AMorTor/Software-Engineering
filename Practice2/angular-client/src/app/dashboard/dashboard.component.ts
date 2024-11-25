import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
