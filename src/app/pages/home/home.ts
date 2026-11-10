import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_DETAIL,
  ABOUT_INTRO,
  CTA,
  EXPERIENCE,
  HERO,
  SERVICES,
  SERVICES_INTRO,
  SITE,
  SKILLS,
} from '../../core/data/site-content';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly hero = HERO;
  protected readonly site = SITE;
  protected readonly aboutIntro = ABOUT_INTRO;
  protected readonly aboutDetail = ABOUT_DETAIL;
  protected readonly servicesIntro = SERVICES_INTRO;
  protected readonly services = SERVICES;
  protected readonly skills = SKILLS;
  protected readonly experience = EXPERIENCE;
  protected readonly cta = CTA;
}
