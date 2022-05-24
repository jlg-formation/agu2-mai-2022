import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(2.5, [Validators.required, Validators.min(0)]),
    qty: new FormControl(1, [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  async submit() {
    console.log('submitting...');
    const article = this.f.value as Article;
    await this.articleService.add(article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
