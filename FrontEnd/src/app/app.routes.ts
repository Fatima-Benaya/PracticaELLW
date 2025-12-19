import { Routes } from '@angular/router';

import { Landing } from './components/pages/landing/landing';
import { Home } from './components/pages/home/home'; // si lo sigues usando en otra parte
import { MealsComponent } from './components/meals/meals.component';

export const routes: Routes = [

  { path: '', component: Landing },

  // HOME muestra las comidas (MealsComponent)
  { path: 'home', component: MealsComponent },



  {
    path: 'food/:id',
    loadComponent: () =>
      import('./components/pages/food-detail/food-detail')
        .then(m => m.FoodDetail)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./components/pages/cart/cart').then(m => m.Cart)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/pages/login/login').then(m => m.Login)
  },


  { path: '**', redirectTo: '' }
];


