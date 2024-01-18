import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

interface LoginResponse {
  token: string; // Przyjmuję, że serwer zwraca token w odpowiedzi
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const loginData = {
      username: username,
      password: password,
    };

    // Zmień poniższy URL na rzeczywisty endpoint do logowania
    const loginUrl = 'https://example.com/api/login';

    // Wyślij żądanie POST z danymi logowania
    return this.httpClient.post<LoginResponse>(loginUrl, loginData).pipe(
      map(response => {
        // Po otrzymaniu odpowiedzi od serwera, przetwórz ją i ustaw token
        const token = response.token;
        this.setToken(token);
        return true; // Załóżmy, że logowanie zawsze się powodzi
      }),
      catchError(error => {
        // Obsłuż błędy logowania tutaj
        console.error('Login failed:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    // Tutaj dodaj logikę do wylogowywania użytkownika
    this.setToken(null);
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  private setToken(token: string | null): void {
    this.tokenSubject.next(token);
  }
}
