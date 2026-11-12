import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, formatArticleDate } from '../../core/data/articles.data';
import { PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-articles',
  imports: [RouterLink],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {
  private readonly seo = inject(SeoService);

  protected readonly articles = ARTICLES;
  protected readonly formatDate = formatArticleDate;

  constructor() {
    const page = PAGE_SEO['articles'];
    this.seo.apply(page, { type: 'generic', seo: page });
  }
}
