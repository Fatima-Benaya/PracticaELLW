import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { FoodDetail } from './components/pages/food-detail/food-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'food/:id', component: FoodDetail },

  {
    path: 'cart',
    loadComponent: () =>
      import('./components/pages/cart/cart').then(m => m.Cart)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/pages/login/login').then(m => m.Login)
  }
];
