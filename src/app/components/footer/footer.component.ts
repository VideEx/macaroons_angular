import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  phone: string = '375293689868';

  getCall: String = 'tel:+375(29)368-98-68';
  getInstagram: String = 'https://instagram.com'
  ngOnInit(): void {
  }

}
