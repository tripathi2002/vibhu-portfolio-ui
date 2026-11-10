import { Component } from '@angular/core';
import { PRIVACY_POLICY, SITE } from '../../core/data/site-content';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-privacy-policy',
  imports: [PageHero],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  protected readonly policy = PRIVACY_POLICY;
  protected readonly email = SITE.email;
}
