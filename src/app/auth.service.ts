import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    console.log('inject login');
    // Tutaj umieść logikę do zalogowania użytkownika i pobrania tokenu JWT
    // Po zalogowaniu ustaw nowy token za pomocą metody setToken
    const token = 'example_jwt_token'; // Przykład - zastąp odpowiednią logiką
    this.setToken(token);
    return of(true); // Załóżmy, że logowanie zawsze się powodzi
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
