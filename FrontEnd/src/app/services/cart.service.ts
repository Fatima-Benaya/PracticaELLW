import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private items$ = new BehaviorSubject<CartItem[]>([]);

  getCart() {
    return this.items$.asObservable();
  }

  add(food: Food) {
    const found = this.items.find(i => i.food._id === food._id);
    if (found) {
      found.quantity++;
    } else {
      this.items.push({ food, quantity: 1 });
    }
    this.items$.next(this.items);
  }
}
