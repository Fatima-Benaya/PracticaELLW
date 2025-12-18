import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cart-item';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>🛒 Tu carrito</h2>

    <div *ngIf="items.length === 0">
      Aquí aparecerán tus platos
    </div>

    <div *ngFor="let item of items" class="cart-item">
      <span>{{ item.food.name }}</span>
      <span>{{ item.quantity }} x {{ item.food.price }} €</span>
      <button (click)="remove(item.food._id!)">❌</button>
    </div>

    <h3 *ngIf="items.length > 0">
      Total: {{ total }} €
    </h3>
  `,
  styles: [`
    .cart-item {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }
  `]
})
export class Cart {

  items: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  remove(id: string) {
    this.cartService.remove(id);
    this.items = this.cartService.getItems();
  }

  get total(): number {
    return this.cartService.getTotalPrice();
  }
}
