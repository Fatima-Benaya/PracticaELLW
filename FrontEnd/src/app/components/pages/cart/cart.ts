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
`
,
  styles: [`
  .cart-container {
    max-width: 700px;
    margin: 2rem auto;
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  h2 {
    margin-bottom: 1.5rem;
    color: #e72929;
  }

  .empty {
    text-align: center;
    font-size: 1.1rem;
    color: #777;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }

  .info span {
    display: block;
    color: #555;
  }

  .remove-btn {
    background: #ff4d4d;
    border: none;
    color: white;
    font-size: 1.1rem;
    padding: 0.4rem 0.7rem;
    border-radius: 50%;
    cursor: pointer;
  }

  .remove-btn:hover {
    background: #e72929;
  }

  .summary {
    margin-top: 2rem;
    text-align: center;
  }

  .pay-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .paypal {
    background: #ffc439;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  .visa {
    background: #1a1f71;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
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
