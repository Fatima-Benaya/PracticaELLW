import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/food';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="food" class="detail-container">
      <img
        [src]="food.image.startsWith('http') ? food.image : 'http://localhost:3000' + food.image"
        [alt]="food.name"
      />

      <h2>{{ food.name }}</h2>
      <p class="price">{{ food.price }} €</p>
      <p class="stars">⭐ {{ food.stars }}</p>

      <p class="description">
        {{ food.description }}
      </p>

      <button (click)="addToCart()">🛒 Añadir al carrito</button>
    </div>
  `,
  styles: [`
    .detail-container {
      max-width: 600px;
      margin: 2rem auto;
      background: white;
      padding: 2rem;
      border-radius: 12px;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }

    .price {
      color: #e63946;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .description {
      margin-top: 1rem;
      font-size: 1.1rem;
      color: #333;
    }

    button {
      margin-top: 1.5rem;
      padding: 0.7rem 1.2rem;
      font-size: 1rem;
      cursor: pointer;
    }
  `]
})
export class FoodDetail {

  food?: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.foodService.getById(id).subscribe(food => {
        this.food = food;
      });
    }
  }

  addToCart() {
    if (this.food) {
      this.cartService.add(this.food);
    }
  }
}
