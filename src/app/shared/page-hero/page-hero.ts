import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  template: `
    <div class="page-hero">
      <div class="page-hero__rule" aria-hidden="true"></div>
      <h1 class="page-hero__title">{{ title() }}</h1>
    </div>
  `,
  styleUrl: './page-hero.scss',
})
export class PageHero {
  readonly title = input.required<string>();
}
