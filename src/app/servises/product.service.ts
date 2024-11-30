import {Injectable, OnInit} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  products: ProductType[] = [
    {
      title: 'Макарун с малиной',
      price: 1.70,
      img: 'm1.png'
    }, {
      title: 'Макарун с манго',
      price: 1.70,
      img: 'm2.png'
    }, {
      title: 'Пирог с ванилью',
      price: 1.70,
      img: 'm3.png'
    }, {
      title: 'Пирог с фисташками',
      price: 1.70,
      img: 'm4.png'
    }
  ]

  constructor() {
  }

  getData(): ProductType[] {
    return this.products;
  }
}
