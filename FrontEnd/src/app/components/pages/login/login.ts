import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Entrar</button>
    </form>
  `
})
export class Login {}
