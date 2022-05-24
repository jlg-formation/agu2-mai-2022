import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

const ARTICLE_KEY = 'articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  async add(article: Article) {
    this.articles.push(article);
    this.save();
  }

  getArticles(): Article[] {
    const str = localStorage.getItem(ARTICLE_KEY);
    if (str === null) {
      return [
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
    }
    return JSON.parse(str);
  }

  save() {
    localStorage.setItem(ARTICLE_KEY, JSON.stringify(this.articles));
  }
}
