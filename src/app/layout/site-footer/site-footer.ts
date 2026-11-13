import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER, SITE, SOCIAL_LINKS } from '../../core/data/site-content';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly footer = FOOTER;
  protected readonly social = SOCIAL_LINKS;
  protected readonly serviceLinks = [
    { label: 'Backend & APIs', path: '/services' },
    { label: 'Web Development', path: '/services' },
    { label: 'Full-Stack Apps', path: '/services' },
  ];
}
