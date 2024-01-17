import { Component, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class LoginComponent {
  username: string = 'Nazwa'; // dodaj to pole
  password: string = 'Haslo'; // dodaj to pole

  constructor(private authService: AuthService, private injector: Injector) {
    this.authService = this.injector.get(AuthService);
  }

  login(): void {
    // dodaj logikę logowania
    console.log('Log begin');
    this.authService.login(this.username, this.password).subscribe((success) => {
      if (success) {
        // Zalogowano pomyślnie
      } else {
        // Błąd logowania
      }
    }); // Add a closing parenthesis here
  }
}
