import { Component } from '@angular/core';
import { CONTACT_PAGE, SITE } from '../../core/data/site-content';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-contact',
  imports: [PageHero, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly page = CONTACT_PAGE;
  protected readonly site = SITE;
}
