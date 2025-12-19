import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/food';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="food; else loading">
      <div class="detail">
        <img
          [src]="imageUrl(food.image)"
          [alt]="food.name"
        />

        <h2>{{ food.name }}</h2>

        <p class="desc">{{ food.description }}</p>

        <p>⏱ {{ food.cookTime }}</p>
        <p>⭐ {{ food.stars }}</p>
        <p class="price">{{ food.price }} €</p>

        <button (click)="addToCart()">
          🛒 Añadir al carrito
        </button>
      </div>
    </ng-container>

    <ng-template #loading>
      <p class="loading">Cargando producto...</p>
    </ng-template>
  `,
  styles: [`
    .detail {
      max-width: 700px;
      margin: 2rem auto;
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,.1);
      text-align: center;
    }

    img {
      width: 100%;
      max-height: 350px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 1rem;
    }

    .desc {
      font-size: 1.1rem;
      margin: 1rem 0;
      color: #444;
    }

    .price {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 1rem 0;
    }

    button {
      background: #ff9800;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
    }

    button:hover {
      background: #fb8c00;
    }

    .loading {
      text-align: center;
      margin-top: 4rem;
      font-size: 1.2rem;
    }
  `]
})
export class FoodDetail implements OnInit {

  food?: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService
  ) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');

    if (!id) {
      console.error('❌ No hay id en la ruta');
      return;
    }

    this.foodService.getById(id).subscribe({
      next: food => {
        console.log('✅ FOOD RECIBIDO', food);
        this.food = food;
      },
      error: err => {
        console.error('❌ Error cargando food', err);
      }
    });
  });
}


  addToCart(): void {
    if (this.food) {
      this.cartService.add(this.food);
    }
  }

  imageUrl(image: string): string {
    return image.startsWith('http')
      ? image
      : 'http://localhost:3000' + image;
  }
}
