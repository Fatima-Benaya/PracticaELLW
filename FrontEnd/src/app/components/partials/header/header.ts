import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private cartService: CartService) {}

  get cartCount(): number {
    return this.cartService.getTotalCount();
  }
}
