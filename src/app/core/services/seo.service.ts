import { DOCUMENT } from '@angular/common';
import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DEFAULT_OG_IMAGE, PageSeo } from '../data/seo.data';
import { SITE, SOCIAL_LINKS } from '../data/site-content';
import { environment } from '../../../environments/environment';

export interface JsonLdInput {
  type: 'home' | 'about' | 'services' | 'article' | 'generic';
  seo: PageSeo;
  article?: {
    title: string;
    excerpt: string;
    date: string;
    image: string | null;
    slug: string;
  };
  services?: { title: string; description: string }[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  private readonly jsonLdId = 'portfolio-json-ld';

  apply(seo: PageSeo, jsonLd?: JsonLdInput): void {
    const absoluteUrl = this.absoluteUrl(seo.path);
    const imageUrl = this.absoluteAsset(seo.image ?? DEFAULT_OG_IMAGE);
    const robots = environment.allowIndexing ? 'index,follow' : 'noindex,nofollow';
    const ogType = seo.type === 'article' ? 'article' : seo.type === 'profile' ? 'profile' : 'website';

    this.title.setTitle(seo.title);

    this.upsertName('description', seo.description);
    this.upsertName('robots', robots);
    this.upsertName('author', SITE.name);

    this.upsertProperty('og:type', ogType);
    this.upsertProperty('og:site_name', SITE.name);
    this.upsertProperty('og:title', seo.title);
    this.upsertProperty('og:description', seo.description);
    this.upsertProperty('og:url', absoluteUrl);
    this.upsertProperty('og:image', imageUrl);

    this.upsertName('twitter:card', 'summary_large_image');
    this.upsertName('twitter:title', seo.title);
    this.upsertName('twitter:description', seo.description);
    this.upsertName('twitter:image', imageUrl);

    this.setCanonical(absoluteUrl);

    if (jsonLd) {
      this.setJsonLd(this.buildJsonLd(jsonLd, absoluteUrl, imageUrl));
    } else {
      this.clearJsonLd();
    }
  }

  absoluteUrl(path: string): string {
    const base = environment.siteUrl.replace(/\/$/, '');
    if (!path || path === '/') {
      return `${base}/`;
    }
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
  }

  absoluteAsset(path: string): string {
    const base = environment.siteUrl.replace(/\/$/, '');
    const cleaned = path.replace(/^\//, '');
    return `${base}/${cleaned}`;
  }

  private upsertName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private upsertProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.renderer.createElement('link') as HTMLLinkElement;
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }
    this.renderer.setAttribute(link, 'href', url);
  }

  private setJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): void {
    this.clearJsonLd();
    const script = this.renderer.createElement('script') as HTMLScriptElement;
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'id', this.jsonLdId);
    script.text = JSON.stringify(data);
    this.renderer.appendChild(this.document.head, script);
  }

  private clearJsonLd(): void {
    const existing = this.document.getElementById(this.jsonLdId);
    if (existing?.parentNode) {
      this.renderer.removeChild(existing.parentNode, existing);
    }
  }

  private buildJsonLd(
    input: JsonLdInput,
    pageUrl: string,
    imageUrl: string,
  ): Record<string, unknown> | Record<string, unknown>[] {
    const person = {
      '@type': 'Person',
      name: SITE.name,
      jobTitle: SITE.tagline,
      email: SITE.email,
      telephone: SITE.phone,
      url: environment.siteUrl,
      image: this.absoluteAsset(DEFAULT_OG_IMAGE),
      sameAs: SOCIAL_LINKS.map((s) => s.href),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressCountry: 'IN',
      },
    };

    if (input.type === 'home') {
      return [
        {
          '@context': 'https://schema.org',
          ...person,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: `${SITE.name} Portfolio`,
          url: environment.siteUrl,
          description: input.seo.description,
          publisher: { '@type': 'Person', name: SITE.name },
        },
      ];
    }

    if (input.type === 'about') {
      return {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: pageUrl,
        name: input.seo.title,
        description: input.seo.description,
        mainEntity: person,
      };
    }

    if (input.type === 'services' && input.services) {
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: input.seo.title,
        description: input.seo.description,
        url: pageUrl,
        itemListElement: input.services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: { '@type': 'Person', name: SITE.name },
          },
        })),
      };
    }

    if (input.type === 'article' && input.article) {
      return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: input.article.title,
        description: input.article.excerpt,
        datePublished: input.article.date,
        dateModified: input.article.date,
        image: input.article.image
          ? this.absoluteAsset(input.article.image)
          : imageUrl,
        author: person,
        publisher: { '@type': 'Person', name: SITE.name },
        mainEntityOfPage: pageUrl,
        url: pageUrl,
      };
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: input.seo.title,
      description: input.seo.description,
      url: pageUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: `${SITE.name} Portfolio`,
        url: environment.siteUrl,
      },
    };
  }
}
