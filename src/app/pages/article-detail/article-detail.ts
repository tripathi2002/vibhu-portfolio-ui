import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  Article,
  formatArticleDate,
  getArticleBySlug,
} from '../../core/data/articles.data';
import { getArticleSeo, PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  protected readonly article: Article | undefined = getArticleBySlug(
    this.route.snapshot.paramMap.get('slug') ?? '',
  );
  protected readonly formatDate = formatArticleDate;

  constructor() {
    if (this.article) {
      const page = getArticleSeo(this.article.slug)!;
      this.seo.apply(page, {
        type: 'article',
        seo: page,
        article: {
          title: this.article.title,
          excerpt: this.article.excerpt,
          date: this.article.date,
          image: this.article.image,
          slug: this.article.slug,
        },
      });
    } else {
      const fallback = PAGE_SEO['articles'];
      this.seo.apply(
        {
          ...fallback,
          title: 'Article not found | Vibhu Tripathi – Full-Stack Developer',
          description: 'The requested article could not be found.',
        },
        { type: 'generic', seo: fallback },
      );
    }
  }

  protected bodyHtml() {
    if (!this.article) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.article.content);
  }
}
