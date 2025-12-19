import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="landing">
      <div class="content">
        <div class="icon">🍕🍔🍣</div>
        <h1>¿Qué quieres comer hoy?</h1>
        <p>Descubre nuestros platos y pide en un clic</p>

        
      </div>
    </div>
  `,
  styles: [`
    .landing {
      height: calc(100vh - 70px);
      background: linear-gradient(135deg, #0f172a, #1e293b);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .content {
      text-align: center;
      max-width: 500px;
      padding: 2rem;
    }

    .icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #cbd5f5;
    }

    .btn {
      background: #facc15;
      color: #1e293b;
      padding: 0.8rem 2rem;
      border-radius: 999px;
      font-weight: bold;
      text-decoration: none;
      font-size: 1.1rem;
      transition: all 0.3s;
    }

    .btn:hover {
      background: #fde047;
      transform: scale(1.05);
    }
  `]
})
export class Landing {}
