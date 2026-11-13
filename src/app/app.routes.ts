import { Routes } from '@angular/router';
import { SiteShell } from './layout/site-shell/site-shell';
import { About } from './pages/about/about';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { Articles } from './pages/articles/articles';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Portfolio } from './pages/portfolio/portfolio';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Services } from './pages/services/services';
import { getArticleBySlug } from './core/data/articles.data';
import { PAGE_SEO } from './core/data/seo.data';

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
      { path: '', component: Home, title: PAGE_SEO['home'].title },
      { path: 'about', component: About, title: PAGE_SEO['about'].title },
      { path: 'services', component: Services, title: PAGE_SEO['services'].title },
      { path: 'articles', component: Articles, title: PAGE_SEO['articles'].title },
      {
        path: 'articles/:slug',
        component: ArticleDetail,
        title: (route) => {
          const article = getArticleBySlug(route.paramMap.get('slug') ?? '');
          return article
            ? `${article.title} | Vibhu Tripathi – Full-Stack Developer`
            : 'Article not found | Vibhu Tripathi – Full-Stack Developer';
        },
      },
      { path: 'portfolio', component: Portfolio, title: PAGE_SEO['portfolio'].title },
      { path: 'contact', component: Contact, title: PAGE_SEO['contact'].title },
      {
        path: 'privacy-policy',
        component: PrivacyPolicy,
        title: PAGE_SEO['privacy'].title,
      },
      ...legacyArticleRedirects.map((slug) => ({
        path: slug,
        redirectTo: `articles/${slug}`,
        pathMatch: 'full' as const,
      })),
      {
        path: '**',
        component: NotFound,
        title: 'Page not found | Vibhu Tripathi – Full-Stack Developer',
      },
    ],
  },
];
