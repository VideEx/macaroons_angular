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
  get product(): ProductType {
    return this._product
  };
  set product(param: ProductType) {
    param.title = param.title.toString();
    this._product = param;
  }
  private _product: ProductType = {} as ProductType;

  @Output() addToOrderEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  addProductToOrder() {
    this.addToOrderEvent.emit(this._product)
  }

}
