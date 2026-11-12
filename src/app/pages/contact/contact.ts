import { Component, inject } from '@angular/core';
import { CONTACT_PAGE, SITE } from '../../core/data/site-content';
import { PAGE_SEO } from '../../core/data/seo.data';
import { SeoService } from '../../core/services/seo.service';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-contact',
  imports: [PageHero, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly seo = inject(SeoService);

  protected readonly page = CONTACT_PAGE;
  protected readonly site = SITE;

  constructor() {
    const page = PAGE_SEO['contact'];
    this.seo.apply(page, { type: 'generic', seo: page });
  }
}
