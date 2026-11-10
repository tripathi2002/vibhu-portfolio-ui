import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  Article,
  formatArticleDate,
  getArticleBySlug,
} from '../../core/data/articles.data';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly article: Article | undefined = getArticleBySlug(
    this.route.snapshot.paramMap.get('slug') ?? '',
  );
  protected readonly formatDate = formatArticleDate;

  protected bodyHtml() {
    if (!this.article) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.article.content);
  }
}
