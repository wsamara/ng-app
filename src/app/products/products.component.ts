import { Component, OnInit } from '@angular/core';
// @ts-ignore
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = productsData;

  constructor() {
  }

  ngOnInit(): void {}

}
