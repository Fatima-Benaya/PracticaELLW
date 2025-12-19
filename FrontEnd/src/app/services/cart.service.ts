import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../shared/models/cart-item';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // ✅ Estado reactivo para que Header/Cart se actualicen solos
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  // ✅ Mantenemos tu array, pero lo sincronizamos con el subject
  private items: CartItem[] = [];

  private toastMessage = '';
  private toastVisible = false;

  // ✅ Este método te estaba rompiendo el carrito (antes tiraba error)
  // Lo dejamos para compatibilidad y lo conectamos a add()
  addToCart(arg0: { id: any; name: any; price: any; quantity: number; }) {
    const food: Food = {
      // @ts-ignore
      _id: String(arg0.id),
      name: String(arg0.name),
      price: Number(arg0.price),
      cookTime: '',
      favorite: false,
      origins: [],
      stars: 0,
      image: '',
      tags: [],
      description: ''
    };
    for (let i = 0; i < (arg0.quantity ?? 1); i++) {
      this.add(food);
    }
  }

  // ✅ helper: soporta _id (Mongo) o id (API antigua)
  private getFoodId(food: Food): string {
    // @ts-ignore
    return (food._id ?? food.id ?? '').toString();
  }

  private emit(): void {
    // clon para evitar mutaciones raras
    this.itemsSubject.next([...this.items]);
  }

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
    const id = this.getFoodId(food);
    const item = this.items.find(i => this.getFoodId(i.food) === id);

    if (item) {
      item.quantity++;
    } else {
      this.items.push({ food, quantity: 1 });
    }

    this.emit();
    this.showToast(`Producto añadido al carrito.`);
  }

  remove(foodId: string) {
    this.items = this.items.filter(i => this.getFoodId(i.food) !== foodId);
    this.emit();
  }

  clear() {
    this.items = [];
    this.emit();
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
