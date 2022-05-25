import { TestBed } from '@angular/core/testing';

import { ArticleService, ARTICLE_KEY } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created with localstorage', () => {
    localStorage.setItem(ARTICLE_KEY, '[]');
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should be created without localstorage', () => {
    localStorage.clear();
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });
});
