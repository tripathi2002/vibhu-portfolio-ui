import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="container narrow coming-soon">
        <p class="eyebrow">Work in progress</p>
        <h1 class="section-title">{{ title }}</h1>
        <p class="section-lead">
          This page will mirror your WordPress content in the Angular app. The home page is ready
          first; we can flesh out {{ title }} next.
        </p>
        <a class="btn btn--primary" routerLink="/">Back to Know me</a>
      </div>
    </section>
  `,
  styles: `
    .coming-soon {
      text-align: center;
      padding-block: 4rem;
    }
  `,
})
export class ComingSoon {
  private readonly route = inject(ActivatedRoute);
  protected readonly title = (this.route.snapshot.data['title'] as string) ?? 'Page';
}
