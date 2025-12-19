import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loading">Cargando producto...</div>

    <div *ngIf="food" class="detail">
      <img [src]="food.image" />
      <h2>{{ food.name }}</h2>
      <p class="desc">{{ food.description }}</p>
      <p>⏱ {{ food.cookTime }}</p>
      <p>⭐ {{ food.stars }}</p>
      <p class="price">{{ food.price }} €</p>
    </div>
  `,
  styles: [`
    .detail {
      max-width: 600px;
      margin: 2rem auto;
      background: white;
      padding: 2rem;
      border-radius: 12px;
    }
    img {
      width: 100%;
      border-radius: 12px;
    }
    .desc {
      margin: 1rem 0;
      color: #555;
    }
    .price {
      font-size: 1.4rem;
      font-weight: bold;
    }
  `]
})
export class FoodDetail {
  food?: Food;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.foodService.getById(id).subscribe({
        next: food => {
          this.food = food;
          this.loading = false;
        },
        error: err => {
          console.error('Error cargando producto', err);
          this.loading = false;
        }
      });
    }
  }
}
