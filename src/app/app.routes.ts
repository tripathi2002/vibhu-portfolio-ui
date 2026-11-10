import { Routes } from '@angular/router';
import { SiteShell } from './layout/site-shell/site-shell';
import { About } from './pages/about/about';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { Articles } from './pages/articles/articles';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Services } from './pages/services/services';
import { getArticleBySlug } from './core/data/articles.data';

const legacyArticleRedirects = [
  'my-journey-as-a-full-stack-developer',
  'how-im-structuring-my-portfolio-for-long-term-scalability',
  'developer-portfolio-public',
] as const;

export const routes: Routes = [
  {
    path: '',
    component: SiteShell,
    children: [
      { path: '', component: Home, title: 'Know me' },
      { path: 'about', component: About, title: 'About' },
      { path: 'services', component: Services, title: 'Services' },
      { path: 'articles', component: Articles, title: 'Articles' },
      {
        path: 'articles/:slug',
        component: ArticleDetail,
        title: (route) => getArticleBySlug(route.paramMap.get('slug') ?? '')?.title ?? 'Article',
      },
      { path: 'portfolio', component: Portfolio, title: 'Portfolio' },
      { path: 'contact', component: Contact, title: 'Contact' },
      { path: 'privacy-policy', component: PrivacyPolicy, title: 'Privacy Policy' },
      ...legacyArticleRedirects.map((slug) => ({
        path: slug,
        redirectTo: `articles/${slug}`,
        pathMatch: 'full' as const,
      })),
    ],
  },
  { path: '**', redirectTo: '' },
];
