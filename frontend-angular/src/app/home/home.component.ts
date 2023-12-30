import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToLogin() {
    // Naviguer vers la page de connexion
    this.router.navigate(['/login']);
  }

  goToRegister() {
    // Naviguer vers la page d'inscription
    this.router.navigate(['/register']);
  }
}
