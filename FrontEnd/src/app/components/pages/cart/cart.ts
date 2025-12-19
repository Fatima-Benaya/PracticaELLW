import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cart-item';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-container">
      <h2>🛒 Tu carrito</h2>

      <div *ngIf="items.length === 0" class="empty">
        Tu carrito está vacío 🍽️
      </div>

      <div *ngFor="let item of items" class="cart-item">
        <div class="info">
          <strong>{{ item.food.name }}</strong>
          <span>{{ item.quantity }} x {{ item.food.price }} €</span>
        </div>

        <button class="remove-btn" (click)="remove(item.food._id!)">
          ✖
        </button>
      </div>

      <div *ngIf="items.length > 0" class="summary">
        <h3>Total: {{ total }} €</h3>

        <div class="pay-buttons">
          <button class="paypal">Pagar con PayPal</button>
          <button class="visa">Pagar con Visa</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* tus estilos tal cual */
  `]
})
export class Cart {

  items: CartItem[] = [];

  constructor(private cartService: CartService) {
    // ✅ se actualiza automáticamente
    this.cartService.items$.subscribe(items => {
      this.items = items;
    });
  }

  remove(id: string) {
    this.cartService.remove(id);
  }

  get total(): number {
    return this.cartService.getTotalPrice();
  }
}
