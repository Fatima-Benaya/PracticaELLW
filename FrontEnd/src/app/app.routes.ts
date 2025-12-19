import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { FoodDetail } from './components/pages/food-detail/food-detail';
import { Landing } from './components/pages/landing/landing';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'home', component: Home },
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
  },

  // 🔒 fallback
  { path: '**', redirectTo: '' }
];
