import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
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

  async add(article: Article) {
    this.articles.push(article);
  }
}
