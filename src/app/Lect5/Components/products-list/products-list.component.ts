import { Component } from '@angular/core';
import { products } from '../../../data/ds';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  product = products[0];
  defaultcolor: string = 'Yellow';
}
