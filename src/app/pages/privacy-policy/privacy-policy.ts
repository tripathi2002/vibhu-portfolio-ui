import { Component, inject } from '@angular/core';
import { PRIVACY_POLICY, SITE } from '../../core/data/site-content';
import { PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-privacy-policy',
  imports: [PageHero],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  private readonly seo = inject(SeoService);

  protected readonly policy = PRIVACY_POLICY;
  protected readonly email = SITE.email;

  constructor() {
    const page = PAGE_SEO['privacy'];
    this.seo.apply(page, { type: 'generic', seo: page });
  }
}
