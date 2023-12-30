import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Ajoutez ici la logique de connexion

    // Redirection vers la page d'accueil après connexion réussie
    this.router.navigate(['/']);
  }
}
