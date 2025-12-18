import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/food';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="food" class="detail">
      <h2>{{ food.name }}</h2>

      <img [src]="food.image" width="300" />

      <p class="description" *ngIf="food.description">
        {{ food.description }}
      </p>

      <p><strong>Precio:</strong> {{ food.price }} €</p>
      <p>⭐ {{ food.stars }}</p>

      <button (click)="addToCart()">Añadir al carrito</button>
    </div>
  `,
})
export class FoodDetail {

  food?: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.foodService.getById(id).subscribe((food: Food) => {

      this.food = food;
    });
  }

  addToCart() {
    if (this.food) {
      this.cartService.add(this.food);
    }
  }
}

