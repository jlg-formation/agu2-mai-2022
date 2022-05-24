import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import {
  faRotateRight,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;

  selectedArticles = new Set<Article>();

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  async refresh() {
    await this.articleService.refresh();
    this.selectedArticles.clear();
  }

  toggle(a: Article): void {
    console.log('a: ', a);
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
