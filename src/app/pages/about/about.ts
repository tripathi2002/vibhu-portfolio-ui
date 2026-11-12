import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_EXPERIENCE,
  ABOUT_PAGE,
  ABOUT_SKILLS,
} from '../../core/data/site-content';
import { PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SkillBars } from '../../shared/skill-bars/skill-bars';

@Component({
  selector: 'app-about',
  imports: [PageHero, SkillBars, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly seo = inject(SeoService);

  protected readonly page = ABOUT_PAGE;
  protected readonly skills = ABOUT_SKILLS;
  protected readonly experience = ABOUT_EXPERIENCE;

  constructor() {
    const page = PAGE_SEO['about'];
    this.seo.apply(page, { type: 'about', seo: page });
  }
}
