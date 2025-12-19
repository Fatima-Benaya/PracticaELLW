import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Header } from './components/partials/header/header';
import { CartService } from './services/cart.service';

import { HttpClientModule } from '@angular/common/http';
import MealsComponent from './components/meals/meals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    HttpClientModule,
    MealsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrontEnd');

  constructor(public cartService: CartService) {}
}
