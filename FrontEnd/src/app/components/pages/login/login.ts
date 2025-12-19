import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  remember = false;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.submitted = true;
    this.error = '';

    if (!this.email || !this.password) {
      this.error = 'Por favor rellena todos los campos.';
      return;
    }

    this.loading = true;

    try {
      const result: any = this.auth.login(this.email, this.password);

      // Observable (RxJS)
      if (result && typeof result.subscribe === 'function') {
        result.subscribe({
          next: (res: any) => this.handleSuccess(res),
          error: (err: any) => this.handleError(err)
        });
        return;
      }

      // Promise
      if (result && typeof result.then === 'function') {
        result
          .then((res: any) => this.handleSuccess(res))
          .catch((err: any) => this.handleError(err));
        return;
      }

      // Synchronous boolean (true/false)
      this.loading = false;
      if (result === true) {
        this.afterLoginSuccess();
      } else {
        this.error = 'Credenciales inválidas. Inténtalo de nuevo.';
      }
    } catch (err: any) {
      this.handleError(err);
    }
  }

  private handleSuccess(res: any) {
    this.loading = false;
    // Si tu backend devuelve token, guárdalo aquí por ejemplo:
    if (res && res.token) {
      localStorage.setItem('token', res.token);
    }
    this.afterLoginSuccess();
  }

  private handleError(err: any) {
    this.loading = false;
    // Intenta sacar un mensaje útil del error
    this.error = err?.error?.message || err?.message || 'Error en el inicio de sesión';
  }

  private afterLoginSuccess() {
    if (this.remember) {
      localStorage.setItem('rememberedEmail', this.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    // Redirige a la página principal (ajusta la ruta si es otra)
    this.router.navigate(['/']);
  }
}
