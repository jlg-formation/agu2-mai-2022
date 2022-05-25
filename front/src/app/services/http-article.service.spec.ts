import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { a1, a2, articles, sleep } from 'src/test/articles.fixture';
import { ARTICLES_URL, HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should refresh', async () => {
    const call = service.refresh();
    const req = http.expectOne(ARTICLES_URL);
    expect(req.request.method).toBe('GET');
    req.flush(articles);
    await call;
    expect(service.articles).toEqual(articles);
  });

  it('should add', async () => {
    const call = service.add(a1);
    await sleep(10);
    const req = http.expectOne(ARTICLES_URL);
    expect(req.request.method).toBe('POST');
    req.flush('', { status: 201, statusText: 'Created' });
    await call;
  });

  it('should remove', async () => {
    const call = service.remove(new Set([a2]));
    await sleep(10);
    const req = http.expectOne(ARTICLES_URL);
    expect(req.request.method).toBe('DELETE');
    req.flush('', { status: 204, statusText: 'No Content' });
    await call;
  });
});
