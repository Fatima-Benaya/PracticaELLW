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

  constructor(public auth: AuthService,
    private cartService: CartService

  ) {}

  logout() {
    this.auth.logout();
  }

  get cartCount(): number {
    return this.cartService.getTotalCount();
  }
}
