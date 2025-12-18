import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Carrito</h2>
    <p>Aquí irán los productos del carrito</p>
  `
})
export class Cart {}
