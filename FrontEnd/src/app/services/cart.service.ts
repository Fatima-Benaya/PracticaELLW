import { Injectable } from '@angular/core';
import { CartItem } from '../shared/models/cart-item';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  add(food: Food) {
    const item = this.items.find(i => i.food._id === food._id);

    if (item) {
      item.quantity++;
    } else {
      this.items.push({ food, quantity: 1 });
    }
  }

  remove(foodId: string) {
    this.items = this.items.filter(i => i.food._id !== foodId);
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce(
      (acc, item) => acc + item.food.price * item.quantity,
      0
    );
  }

  // ✅ ESTE ES EL MÉTODO QUE FALTABA
  getTotalCount(): number {
    return this.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }
}
