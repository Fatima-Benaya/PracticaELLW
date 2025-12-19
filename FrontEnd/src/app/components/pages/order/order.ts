import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {
  menu = [
    {
      id: 1,
      name: 'Hamburguesa clásica',
      price: 8.5,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
    },
    {
      id: 2,
      name: 'Pizza margarita',
      price: 10,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3'
    },
    {
      id: 3,
      name: 'Pasta carbonara',
      price: 9.5,
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }
}
