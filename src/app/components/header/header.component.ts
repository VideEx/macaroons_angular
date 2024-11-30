import {Component, OnInit} from '@angular/core';
import {MenuLinkType} from "../../types/menu-link.type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }
  phone: string = '375293689868';
  getCall: String = 'tel:+375(29)368-98-68';

  // Массив объектов для ссылок меню
  // public menuLink: MenuLinkType[] = [
  //   {
  //     title: "Пироженки",
  //     elementId: productElement
  //   },
  //   {
  //     title: "О нас",
  //     elementId: advantagesElement
  //   },
  //   {
  //     title: "Оформить заказ",
  //     elementId: orderElement
  //   },
  // ];

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
  }

}
