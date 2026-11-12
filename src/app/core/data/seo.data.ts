import { ARTICLES } from './articles.data';
import { SITE } from './site-content';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
}

const brand = `${SITE.name} – Full-Stack Developer`;

export const DEFAULT_OG_IMAGE = 'images/hero.png';

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: `${SITE.name} – Full-Stack Developer (Node.js, React) in Bengaluru`,
    description:
      'Full-Stack Developer in Bengaluru with ~2 years of experience building scalable web apps and APIs with Node.js, Express, React and MySQL.',
    image: DEFAULT_OG_IMAGE,
    type: 'website',
  },
  about: {
    path: '/about',
    title: `About | ${brand}`,
    description:
      'Learn about Vibhu Tripathi — Bengaluru-based full-stack developer focused on reliable APIs, React front ends, and maintainable systems at Hotwire.',
    image: DEFAULT_OG_IMAGE,
    type: 'profile',
  },
  services: {
    path: '/services',
    title: `Services | ${brand}`,
    description:
      'Backend APIs, web development, full-stack apps, database design, API integration, and maintenance with Node.js, Express, React and MySQL.',
    image: DEFAULT_OG_IMAGE,
    type: 'website',
  },
  articles: {
    path: '/articles',
    title: `Articles | ${brand}`,
    description:
      'Articles on full-stack development, portfolio architecture, career growth, and building in public by Vibhu Tripathi.',
    image: DEFAULT_OG_IMAGE,
    type: 'website',
  },
  portfolio: {
    path: '/portfolio',
    title: `Portfolio | ${brand}`,
    description:
      'Selected projects and work samples from Vibhu Tripathi — full-stack developer building web apps and APIs.',
    image: DEFAULT_OG_IMAGE,
    type: 'website',
  },
  contact: {
    path: '/contact',
    title: `Contact | ${brand}`,
    description:
      'Get in touch with Vibhu Tripathi for full-stack development projects, backend APIs, or collaboration opportunities.',
    image: DEFAULT_OG_IMAGE,
    type: 'website',
  },
  privacy: {
    path: '/privacy-policy',
    title: `Privacy Policy | ${brand}`,
    description:
      'Privacy Policy for vibhu.pro — how contact form data, analytics, and cookies are handled on this portfolio site.',
    image: DEFAULT_OG_IMAGE,
    type: 'website',
  },
};

export function getArticleSeo(slug: string): PageSeo | null {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return null;
  }

  return {
    path: `/articles/${article.slug}`,
    title: `${article.title} | ${brand}`,
    description: article.excerpt,
    image: article.image ?? DEFAULT_OG_IMAGE,
    type: 'article',
  };
}

export const SITEMAP_PATHS: string[] = [
  '/',
  '/about',
  '/services',
  '/articles',
  '/portfolio',
  '/contact',
  '/privacy-policy',
  ...ARTICLES.map((a) => `/articles/${a.slug}`),
];
