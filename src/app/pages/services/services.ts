import { Component, inject } from '@angular/core';
import { LATEST_WORK } from '../../core/data/projects.data';
import { SERVICES_DETAILED, SERVICES_PAGE } from '../../core/data/site-content';
import { PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-services',
  imports: [PageHero],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  private readonly seo = inject(SeoService);

  protected readonly page = SERVICES_PAGE;
  protected readonly services = SERVICES_DETAILED;
  protected readonly latestWork = LATEST_WORK;

  constructor() {
    const page = PAGE_SEO['services'];
    this.seo.apply(page, {
      type: 'services',
      seo: page,
      services: SERVICES_DETAILED,
    });
  }
}
