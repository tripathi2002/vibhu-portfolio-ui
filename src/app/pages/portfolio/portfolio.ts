import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_GALLERY } from '../../core/data/projects.data';
import { PORTFOLIO_PAGE } from '../../core/data/site-content';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-portfolio',
  imports: [PageHero, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected readonly page = PORTFOLIO_PAGE;
  protected readonly gallery = PORTFOLIO_GALLERY;
}
