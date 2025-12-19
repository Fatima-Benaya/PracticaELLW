
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

import { Food } from '../../../shared/models/food';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {
    this.loadFoods();
  }

  private loadFoods(): void {
    this.foodService.getAll().subscribe({
      next: foods => this.foods = foods,
      error: err => console.error('Error cargando foods', err)
    });
  }

 addToCart(food: Food): void {
  const safeFood: Food = {
    _id: food._id,
    name: food.name,
    price: food.price,
    image: food.image,
    stars: food.stars ?? 0,
    cookTime: food.cookTime ?? '',
    favorite: food.favorite ?? false,
    origins: food.origins ?? [],
    tags: food.tags ?? [],
    description: food.description ?? ''
  };

  this.cartService.add(safeFood);
}

  imageUrl(image: string): string {
  if (!image) {
    return 'assets/no-image.png'; // opcional
  }

  return image.startsWith('http')
    ? image
    : 'http://localhost:3000' + image;
}

}
