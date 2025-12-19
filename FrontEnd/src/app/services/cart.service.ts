import { Injectable } from '@angular/core';
import { CartItem } from '../shared/models/cart-item';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addToCart(arg0: { id: any; name: any; price: any; quantity: number; }) {
    throw new Error('Method not implemented.');
  }

  private items: CartItem[] = [];
  private toastMessage='';
  private toastVisible=false;

  showToast(message: string): void {
    this.toastMessage = message;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }

  getToastMessage() {
    return this.toastMessage;
  }

  isToastVisible() {
    return this.toastVisible;
  }

  getItems(): CartItem[] {
    return this.items;
  }

  add(food: Food) {
    const item = this.items.find(i => i.food._id === food._id);

    if (item) {
      item.quantity++;
    } else {
      this.items.push({ food, quantity: 1 });
    }
    this.showToast(`Producto añadido al carrito.`);
  }

  remove(foodId: string) {
    this.items = this.items.filter(i => i.food._id !== foodId);
  }

  clear() {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce(
      (sum, item) => sum + item.food.price * item.quantity,
      0
    );
  }

  getTotalCount(): number {
  return this.items.reduce((acc, item) => acc + item.quantity, 0);
}

}
