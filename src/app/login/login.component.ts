import { Component, Injector, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../auth.service';
import {CommonModule} from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { AuthModule } from './../auth.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,AuthModule ],
  templateUrl: './login.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  username: string = 'Nazwa';
  password: string = 'Haslo';

  constructor(private authService: AuthService, private injector: Injector) {
    this.authService = this.injector.get(AuthService);
  }

  ngOnInit(): void {
    // Dodaj logikę sprawdzającą, czy użytkownik jest zalogowany przy inicjalizacji komponentu
    this.authService.getToken().subscribe(token => {
      if (token) {
        // Użytkownik jest zalogowany, przekieruj go do innej strony lub wykonaj inne działania
      }
    });
  }

  login(): void {
    console.log('Log begin');
    this.authService.login(this.username, this.password).subscribe((success) => {
      if (success) {
        // Zalogowano pomyślnie
      } else {
        // Błąd logowania
      }
    });
  }

  // Dodaj funkcję sprawdzającą, czy użytkownik jest zalogowany
  isLoggedIn(): boolean {
    let isLoggedIn = false;
    this.authService.getToken().subscribe(token => {
      isLoggedIn = !!token;
    });
    return isLoggedIn;
  }

  // Dodaj funkcję wylogowującą użytkownika
  logout(): void {
    this.authService.logout();
  }
}
