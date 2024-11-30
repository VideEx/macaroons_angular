import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {ProductService} from "../../servises/product.service";
import {CartService} from "../../servises/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  public price: string = '';
  @Input()
  get product(): ProductType {
    return this._product
  };
  set product(param: ProductType) {
    param.title = param.title.toString();
    this._product = param;
  }
  private _product: ProductType = {} as ProductType;

  @Output() addToOrderEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor(private productServise: ProductService,
              public cartServise: CartService) {
  }

  addProductToOrder() {
    this.addToOrderEvent.emit(this._product)
  }


  // addProductToCard(product: ProductType) {
  //   this.cartServise.cartCount++;
  //   this.cartServise.cartPrice += product.price;
  //
  //   this.price = this.cartServise.cartPrice.toFixed(2).toString().replace('.', ',');
  //   return this.price;
  // }
  //

}
