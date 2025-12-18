
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

import { Food } from '../../../shared/models/food';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {
    this.loadFoods();
  }

  private loadFoods(): void {
    this.foodService.getAll().subscribe({
      next: foods => this.foods = foods,
      error: err => console.error('Error cargando foods', err)
    });
  }

  addToCart(food: Food): void {
    this.cartService.add(food);
  }
}
