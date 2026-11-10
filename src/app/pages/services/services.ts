import { Component } from '@angular/core';
import { LATEST_WORK } from '../../core/data/projects.data';
import { SERVICES_DETAILED, SERVICES_PAGE } from '../../core/data/site-content';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-services',
  imports: [PageHero],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly page = SERVICES_PAGE;
  protected readonly services = SERVICES_DETAILED;
  protected readonly latestWork = LATEST_WORK;
}
