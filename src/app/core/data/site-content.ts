export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  percent: number;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const SITE = {
  name: 'Vibhu Tripathi',
  tagline: 'Full-Stack Developer',
  title: 'Vibhu Tripathi – Full-Stack Developer (Node.js, React) in Bengaluru',
  email: 'vibhu.tripathi.work@gmail.com',
  phone: '+91 7081229558',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Know me', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Articles', path: '/articles' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export const HERO = {
  prefix: 'HELLO, MY NAME IS',
  headline: SITE.name,
  subtitle: SITE.tagline,
} as const;

export const ABOUT_INTRO = {
  label: 'About Me',
  heading:
    'I am a full-stack developer based in Bengaluru with around 2 years of experience building web applications and backend APIs.',
} as const;

export const ABOUT_DETAIL = {
  title: 'Full-Stack Developer building scalable web apps & APIs',
  lead: 'I build fast, reliable backends and clean front-ends with Node.js, Express, React and MySQL — currently at Hotwire, where I develop APIs for food-delivery and franchise-management systems.',
  body: 'My work centres on building and maintaining backend APIs with Node.js and Express.js, working with relational data in MySQL, and creating responsive interfaces in React. I focus on clean, maintainable code and systems that scale as a product grows.',
} as const;

export const SERVICES_INTRO = {
  title: 'What I Do',
  description:
    'I build end-to-end web applications, from backend APIs to the interfaces people use.',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    title: 'BACKEND & API DEVELOPMENT',
    description:
      'I design and build backend APIs with Node.js and Express.js, backed by MySQL, so your product handles its data and traffic reliably.',
  },
  {
    title: 'WEB DEVELOPMENT',
    description:
      'I build responsive front-ends in React.js and connect them to solid backends, taking a web application from idea to a working product.',
  },
  {
    title: 'FULL-STACK APPLICATIONS',
    description:
      'I build complete web applications end to end — database, server-side logic and user interface — using JavaScript across the stack.',
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'JavaScript', percent: 90 },
  { name: 'Node.js', percent: 85 },
  { name: 'React.js', percent: 85 },
  { name: 'MySQL', percent: 80 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2024-Present',
    company: 'Hotwire',
    role: 'Software Developer',
    description:
      'Developed and maintained scalable backend APIs using Node.js and Express.js for food delivery and franchise management systems, significantly improving order processing efficiency.',
  },
];

export const CTA = {
  title: "Let's build something together",
  text: "Have a project or role in mind? Let's talk.",
  button: 'Get in touch',
  contactPath: '/contact',
} as const;

export const FOOTER = {
  blurb:
    'Building scalable web applications with React, Node.js, Express & MySQL.',
  copyright: 'Copyright © 2026 Vibhu | Full-Stack Developer',
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vibhu-tripathi-dev/' },
  { label: 'GitHub', href: 'https://github.com/tripathi2002' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/tripathi2002' },
  { label: 'Instagram', href: 'https://www.instagram.com/hindu.vibhu.tripathi/' },
];
