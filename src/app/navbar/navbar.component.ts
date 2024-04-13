import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService) { }

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
}
