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

export const ABOUT_PAGE = {
  intro: {
    label: 'About Me',
    heading:
      'I am Vibhu Tripathi, a Bengaluru-based full-stack developer building backend APIs and web applications.',
  },
  detail: {
    title: 'Full-stack developer focused on reliable APIs and web apps',
    body: 'I work across the stack with Node.js, Express, React and MySQL, turning requirements into clean, maintainable backend services and responsive user interfaces.',
    note: 'As a Software Developer at Hotwire, I focus on well-structured APIs, efficient database queries and front ends that are simple to use and easy to maintain.',
  },
  skillsIntro:
    'I believe learning never stops. I keep exploring new tools and practices that help me build better software, faster.',
  gravatar: 'https://gravatar.com/vibhutripathiwork',
} as const;

export const ABOUT_SKILLS: SkillItem[] = [
  { name: 'JavaScript', percent: 97 },
  { name: 'Node.js', percent: 87 },
  { name: 'React.js', percent: 90 },
  { name: 'Angular', percent: 85 },
  { name: 'MongoDB', percent: 75 },
];

export const ABOUT_EXPERIENCE: ExperienceItem[] = [
  {
    period: '2024-2025',
    company: 'Hotwire Global',
    role: 'Software Developer',
    description:
      'Building and maintaining backend APIs and web application features with Node.js, Express, React and MySQL.',
  },
];

export const SERVICES_PAGE = {
  title: 'My Work',
  intro: {
    title: 'What I do',
    description:
      'I build backend APIs, web applications and full-stack products with Node.js, Express, React and MySQL, from planning through to deployment.',
  },
  latestWorkTitle: 'My Latest Work',
} as const;

export const SERVICES_DETAILED: ServiceItem[] = [
  {
    title: 'BACKEND & API DEVELOPMENT',
    description:
      'Secure, well-documented REST APIs and backend services built with Node.js and Express, backed by efficient MySQL data models.',
  },
  {
    title: 'WEB DEVELOPMENT',
    description:
      'Responsive, maintainable web applications built with React, with clean code and a focus on performance and usability.',
  },
  {
    title: 'FULL-STACK APPLICATIONS',
    description:
      'End-to-end applications that connect a React front end to Node.js and Express APIs and a MySQL database, delivered as one cohesive product.',
  },
  {
    title: 'DATABASE DESIGN',
    description:
      'Structured MySQL schemas and queries designed for data integrity and speed, so applications stay fast as they grow.',
  },
  {
    title: 'API INTEGRATION',
    description:
      'Connecting web apps to third-party services and internal systems through reliable, well-tested API integrations.',
  },
  {
    title: 'MAINTENANCE & IMPROVEMENTS',
    description:
      'Debugging, refactoring and performance improvements for existing Node.js and React codebases.',
  },
];

export const CONTACT_PAGE = {
  title: 'Contact',
  form: {
    title: 'Send me a message',
    description:
      'Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.',
    success: 'Thanks for reaching out. I will get back to you soon.',
    error: 'Unable to save your message right now. Please try again or email me directly.',
  },
} as const;

export const PORTFOLIO_PAGE = {
  title: 'Portfolio',
  subtitle: 'Selected projects',
} as const;

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
  html?: string;
}

export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  lastUpdated: '30 October 2026',
  intro:
    'This Privacy Policy explains how vibhu.pro (“this site”), the personal portfolio of Vibhu Tripathi, collects and uses information when you visit it.',
  sections: [
    {
      heading: 'Information you give me',
      paragraphs: [
        'When you use a contact or sign-up form on this site (built with SureForms, WPForms or OptinMonster), I receive the details you enter, such as your name, email address and message. I use them only to reply to you or to send what you asked for.',
      ],
    },
    {
      heading: 'Comments',
      paragraphs: [
        'If you leave a comment, the name, email, website, comment text, IP address and browser user agent are stored to help with spam detection. Comments may be checked by an automated spam-filtering service.',
      ],
    },
    {
      heading: 'Analytics and cookies',
      paragraphs: [
        'This site uses Google Analytics (through Google Site Kit) to understand how visitors use it, such as which pages are viewed. Google Analytics uses cookies and collects information such as your approximate location, device and browser. See Google’s Privacy Policy. OptinMonster and the form plugins may also set cookies needed for their features to work. You can block or delete cookies in your browser settings.',
      ],
    },
    {
      heading: 'Embedded content',
      paragraphs: [
        'Pages may include embedded content (for example videos or images) from other websites, which behaves as if you visited that website and may collect data about you.',
      ],
    },
    {
      heading: 'Sharing and retention',
      paragraphs: [
        'I do not sell your personal information. Data is shared only with the services named above that run this site. Form submissions and comments are kept only as long as needed for their purpose.',
      ],
    },
    {
      heading: 'Your choices',
      paragraphs: [
        'You can ask to see, correct or delete personal information I hold about you by emailing me.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: ['Questions about this policy: vibhu.tripathi.work@gmail.com'],
    },
  ] satisfies PrivacySection[],
} as const;
