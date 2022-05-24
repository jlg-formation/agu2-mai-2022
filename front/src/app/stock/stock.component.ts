import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import {
  faRotateRight,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  articles: Article[] = [
    {
      name: 'Marteau',
      price: 2.99,
      qty: 100,
    },
    {
      name: 'Faucille',
      price: 5.45,
      qty: 50,
    },
    {
      name: 'Perceuse',
      price: 25,
      qty: 15,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
