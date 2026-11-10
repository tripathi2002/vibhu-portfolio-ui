import { RenderMode, ServerRoute } from '@angular/ssr';
import { ARTICLES } from './core/data/articles.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'articles/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => ARTICLES.map((article) => ({ slug: article.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
