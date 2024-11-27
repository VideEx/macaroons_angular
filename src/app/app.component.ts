import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'macaroon_angular';

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      desc: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      desc: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      desc: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      desc: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public products: ProductType[] = [
    {
      title: 'Макарун с малиной',
      price: '1,70',
      img: 'm1.png'
    },{
      title: 'Макарун с манго',
      price: '1,70',
      img: 'm2.png'
    },{
      title: 'Пирог с ванилью',
      price: '1,70',
      img: 'm3.png'
    },{
      title: 'Пирог с фисташками',
      price: '1,70',
      img: 'm4.png'
    },
  ];
  public formFields = {
    productTitle: '',
    name:'',
    phone:'',
  }

  // Плавный скролл
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  // Заказ макаруна
  public getOrder(product: ProductType, element: HTMLElement): void {
    this.scrollTo(element);
    this.formFields.productTitle = product.title.toUpperCase();
  };

  // Проверяем необходимость отображать предложение
  showPresent: boolean = false;
}
