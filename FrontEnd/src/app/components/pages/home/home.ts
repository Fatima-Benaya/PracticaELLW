import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  foods: Food[] = [];
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
}
