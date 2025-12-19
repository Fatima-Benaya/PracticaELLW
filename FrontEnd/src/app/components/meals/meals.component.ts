
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  query = '';
  meals: any[] = [];
  selected: any = null;
  loading = false;

  constructor(private mealsService: MealsService) {}

  search() {
    if (!this.query.trim()) return;
    this.loading = true;
    this.mealsService.search(this.query.trim()).subscribe({
      next: (res) => { this.meals = res.meals || []; this.selected = null; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  random() {
    this.loading = true;
    this.mealsService.random().subscribe({
      next: (res) => { this.meals = res.meals || []; this.selected = null; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  select(meal: any) {
    this.selected = meal;
  }

  getIngredients(meal: any): string[] {
    const list: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const qty = meal[`strMeasure${i}`];
      if (ing && ing.trim()) list.push(`${ing} — ${qty || ''}`);
    }
    return list;
  }
}

