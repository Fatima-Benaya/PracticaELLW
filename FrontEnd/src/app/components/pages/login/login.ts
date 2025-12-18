import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>

      <form (ngSubmit)="login()">
        <input
          type="email"
          placeholder="Email"
          [(ngModel)]="email"
          name="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          [(ngModel)]="password"
          name="password"
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 4rem auto;
      padding: 2rem;
      background: #1e293b;
      border-radius: 10px;
      color: white;
      text-align: center;
    }

    input {
      width: 100%;
      padding: 0.7rem;
      margin: 0.5rem 0;
      border-radius: 6px;
      border: none;
    }

    button {
      margin-top: 1rem;
      width: 100%;
      padding: 0.7rem;
      background: #facc15;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background: #eab308;
    }
  `]
})
export class Login {
  email = '';
  password = '';

  login() {
    alert('Login simulado ✔');
  }
}

