import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = false;

  login(email: string, password: string): boolean {
    // LOGIN SIMPLIFICADO (para la práctica)
    if (email && password) {
      this.logged = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.logged = false;
  }

  isLogged(): boolean {
    return this.logged;
  }
}
