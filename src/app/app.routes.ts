import { Routes } from '@angular/router';
import { SiteShell } from './layout/site-shell/site-shell';
import { ComingSoon } from './pages/coming-soon/coming-soon';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: SiteShell,
    children: [
      { path: '', component: Home, title: 'Know me' },
      {
        path: 'about',
        component: ComingSoon,
        data: { title: 'About' },
        title: 'About',
      },
      {
        path: 'services',
        component: ComingSoon,
        data: { title: 'Services' },
        title: 'Services',
      },
      {
        path: 'articles',
        component: ComingSoon,
        data: { title: 'Articles' },
        title: 'Articles',
      },
      {
        path: 'portfolio',
        component: ComingSoon,
        data: { title: 'Portfolio' },
        title: 'Portfolio',
      },
      {
        path: 'contact',
        component: ComingSoon,
        data: { title: 'Contact' },
        title: 'Contact',
      },
      {
        path: 'privacy-policy',
        component: ComingSoon,
        data: { title: 'Privacy Policy' },
        title: 'Privacy Policy',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
