import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/food';

export interface CartItem {
  food: Food;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  add(food: Food): void {
    const id = food._id ?? food.name; // fallback por si algún item no trae _id
    const found = this.items.find(i => (i.food._id ?? i.food.name) === id);

    if (found) found.quantity++;
    else this.items.push({ food, quantity: 1 });

    this.itemsSubject.next([...this.items]);
  }

  removeOne(food: Food): void {
    const id = food._id ?? food.name;
    const idx = this.items.findIndex(i => (i.food._id ?? i.food.name) === id);
    if (idx === -1) return;

    this.items[idx].quantity--;
    if (this.items[idx].quantity <= 0) this.items.splice(idx, 1);

    this.itemsSubject.next([...this.items]);
  }

  clear(): void {
    this.items = [];
    this.itemsSubject.next([]);
  }

  getTotalCount(): number {
    return this.items.reduce((acc, it) => acc + it.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, it) => acc + it.quantity * (it.food.price ?? 0), 0);
  }
}
