import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SITE } from '../../core/data/site-content';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="section not-found">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1 class="section-title">Page not found</h1>
        <p class="section-lead">
          That URL doesn’t match anything on this site. Head home or get in touch.
        </p>
        <div class="not-found__actions">
          <a class="btn btn--primary" routerLink="/">Back home</a>
          <a class="btn btn--outline" routerLink="/contact">Contact</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .not-found__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1.75rem;
    }
  `,
})
export class NotFound {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.apply({
      path: '/404',
      title: `Page not found | ${SITE.name} – Full-Stack Developer`,
      description: 'The page you requested could not be found.',
    });
  }
}
