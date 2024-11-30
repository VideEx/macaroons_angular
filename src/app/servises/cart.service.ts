import { Injectable } from '@angular/core';
import {CartType} from "../types/cart.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartPrice: number = 0;
  cartCount: number = 0;

  constructor() { }
}
