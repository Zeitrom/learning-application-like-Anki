// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '' // Assurez-vous que cette ligne est présente dans votre code
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Logique de l'inscription

    // Redirection vers la page d'accueil
    this.router.navigate(['/']);

    // Affichage de la notification de succès
    alert('Inscription réussie ! Vous êtes bien inscrit.');
  }
}
