import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class LoginComponent {
  username: string = 'Nazwa'; // dodaj to pole
  password: string = 'Haslo'; // dodaj to pole

  login() {
    // dodaj logikę logowania
  }
}
