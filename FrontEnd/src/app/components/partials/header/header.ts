import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  // ✅ IMPORTANTE: si lo usas en el template, NO debe ser private
  constructor(public auth: AuthService, public cartService: CartService) {}

  logout() {
    this.auth.logout();
  }

  // ✅ AQUÍ va el getter
  get cartCount(): number {
    return this.cartService.getTotalCount();
  }
}
