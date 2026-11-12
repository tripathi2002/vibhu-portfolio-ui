import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_GALLERY } from '../../core/data/projects.data';
import { PORTFOLIO_PAGE } from '../../core/data/site-content';
import { PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-portfolio',
  imports: [PageHero, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  private readonly seo = inject(SeoService);

  protected readonly page = PORTFOLIO_PAGE;
  protected readonly gallery = PORTFOLIO_GALLERY;

  constructor() {
    const page = PAGE_SEO['portfolio'];
    this.seo.apply(page, { type: 'generic', seo: page });
  }
}
