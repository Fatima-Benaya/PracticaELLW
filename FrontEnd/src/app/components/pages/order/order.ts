import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/food';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {

  menu: Food[] = [
    {
      _id: '1',
      name: 'Hamburguesa clásica',
      price: 8.5,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
      stars: 4.5,
      cookTime: '15 min',
      favorite: false,
      origins: ['USA'],
      tags: ['Burger'],
      description: 'Hamburguesa de ternera con queso y pan brioche'
    },
    {
      _id: '2',
      name: 'Pizza margarita',
      price: 10,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
      stars: 4.6,
      cookTime: '20 min',
      favorite: true,
      origins: ['Italia'],
      tags: ['Pizza'],
      description: 'Pizza tradicional italiana con mozzarella y albahaca'
    },
    {
      _id: '3',
      name: 'Pasta carbonara',
      price: 9.5,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
      stars: 4.4,
      cookTime: '18 min',
      favorite: false,
      origins: ['Italia'],
      tags: ['Pasta'],
      description: 'Pasta con salsa cremosa, huevo y panceta'
    },
    {
      _id: '4',
      name: 'Ensalada César',
      price: 7.2,
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
      stars: 4.1,
      cookTime: '10 min',
      favorite: false,
      origins: ['Internacional'],
      tags: ['Ensalada'],
      description: 'Ensalada fresca con pollo, queso y salsa césar'
    },
    {
      _id: '5',
      name: 'Sushi variado',
      price: 14.9,
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
      stars: 4.7,
      cookTime: '25 min',
      favorite: true,
      origins: ['Japón'],
      tags: ['Sushi'],
      description: 'Selección de sushi fresco con pescado y arroz'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(food: Food): void {
    this.cartService.add(food);
  }
}
