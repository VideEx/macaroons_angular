import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./servises/product.service";
import {CartService} from "./servises/cart.service";
import {ProductComponent} from "./components/product/product.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  price: string = '0';
  products: ProductType[] = [];
  title: String = 'macaroon_angular';

  @HostListener('click')
  onClick() {
    console.log('dlkfs')
  }

  productComponent!: ProductComponent;

  constructor(private productServise: ProductService,
              public cartServise: CartService) {
  }

  public advantages: AdvantageType[] = [
    {
      id: 1,
      title: 'Лучшие продукты',
      desc: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      id: 2,
      title: 'Много вкусов',
      desc: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      id: 3,
      title: 'Бисквитное тесто',
      desc: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      id: 4,
      title: 'Честный продукт',
      desc: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];


  public formFields = {
    productTitle: '',
    name: '',
    phone: '',
  }


  // Плавный скролл
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public showCart(): void {
    // // this.scrollTo(element);
    // this.formFields.productTitle = product.title.toUpperCase();

    this.cartServise.cartCount > 0 ? this.isShowCart = true : this.isShowCart = false;

  };

  isShowCart: boolean = false;

  ngOnInit() {
    this.products = this.productServise.getData();
  }

  public getOrder(product: ProductType): string {
    this.cartServise.cartCount++;
    this.cartServise.cartPrice += product.price;

    // this.price = this.cartServise.cartPrice.toFixed(2).toString().replace('.', ',');
    this.price = this.cartServise.cartPrice.toFixed(2);

    alert(product.title + ' добавлен в корзину!')

    return this.price;
  };
}
