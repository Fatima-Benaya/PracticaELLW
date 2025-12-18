import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
<<<<<<< HEAD
  imports: [ RouterLink],
=======
  standalone: true,
  imports: [CommonModule, RouterLink],
>>>>>>> f366b5bf0598fa36cb972784967f5d2c3bcbe546
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
}
