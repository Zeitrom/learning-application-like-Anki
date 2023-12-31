import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Assurez-vous que le chemin est correct

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
    confirmPassword: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    this.userService.register(this.user).subscribe({
      next: (response) => {
        // Redirection vers la page d'accueil
        this.router.navigate(['/']);
        // Affichage de la notification de succès
        alert('Inscription réussie ! Vous êtes bien inscrit.');
      },
      error: (error) => {
        // Gérer l'erreur ici
        console.error('Erreur lors de l\'inscription:', error);
        alert('Erreur lors de l\'inscription.');
      }
    });
  }
}
