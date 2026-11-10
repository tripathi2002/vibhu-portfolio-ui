export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string | null;
}

export const ARTICLES: Article[] = [
  {
    slug: 'my-journey-as-a-full-stack-developer',
    title: 'My Journey as a Full-Stack Developer',
    date: '2026-01-24',
    category: 'Uncategorized',
    excerpt:
      'Building software was never just about writing code for me—it has always been about solving real problems. Over the past',
    image: 'images/article-journey.png',
    content: `
<p>Building software was never just about writing code for me—it has always been about solving real problems. Over the past few years, I’ve grown from learning the basics of web development to working professionally on production-level applications. This article shares my journey as a full-stack developer and what I’ve learned along the way.</p>
<h2>How It All Started</h2>
<p>I began my journey with curiosity about how websites work behind the scenes. Starting with HTML, CSS, and JavaScript, I gradually moved into backend development. As I explored more, I realized the power of building complete applications—from user interfaces to databases and APIs.</p>
<p>This curiosity pushed me to dive deeper into full-stack development rather than limiting myself to just frontend or backend.</p>
<h2>Professional Experience & Growth</h2>
<p>Over time, I worked on multiple real-world projects where I gained hands-on experience with:</p>
<ul>
<li>Designing scalable backend APIs</li>
<li>Working with databases and server-side logic</li>
<li>Creating responsive and user-friendly interfaces</li>
<li>Collaborating with teams using Agile methodologies</li>
</ul>
<p>These experiences helped me understand not just <strong>how</strong> to code, but <strong>why</strong> certain architectural and performance decisions matter.</p>
<h2>My Current Skill Set</h2>
<p>As a full-stack developer, I primarily work with:</p>
<ul>
<li><strong>Frontend:</strong> Angular, React, HTML, CSS, JavaScript, TypeScript</li>
<li><strong>Backend:</strong> Node.js, Express.js, PHP</li>
<li><strong>Databases:</strong> MongoDB, SQL</li>
<li><strong>Tools & Practices:</strong> Git, REST APIs, performance optimization, reusable components</li>
</ul>
<p>I focus on writing clean, maintainable, and reusable code that can scale over time.</p>
<h2><strong>Challenges I Faced & What I’m Working Toward</strong></h2>
<p>Like any developer, the journey hasn’t been smooth. Debugging complex issues, understanding system design, and keeping up with fast-changing technologies were challenging. However, each challenge helped me improve my problem-solving skills and technical depth. My goal is to continue building robust backend systems, improve my system design skills, and contribute to meaningful products. I’m particularly interested in scalable architectures, APIs, and modern web technologies.</p>
<h2>Conclusion</h2>
<p>This journey as a full-stack developer has taught me that learning never stops. Every project, bug, and optimization brings a new lesson. Through this blog, I plan to share my experiences, technical insights, and practical learnings that may help other developers on a similar path.</p>`,
  },
  {
    slug: 'how-im-structuring-my-portfolio-for-long-term-scalability',
    title: 'How I’m Structuring My Portfolio for Long-Term Scalability',
    date: '2026-01-02',
    category: 'Career',
    excerpt:
      'Context While building my portfolio, I didn’t want it to be just a visual site that looks good today and',
    image: null,
    content: `
<h3><strong>Context</strong></h3>
<p>While building my portfolio, I didn’t want it to be just a visual site that looks good today and breaks tomorrow.<br>I treated it like a real product — something that should be <strong>easy to scale, update, and maintain</strong> over time.</p>
<p>Instead of rushing into design, I focused on structure first.</p>
<hr />
<h3><strong>What I Focused On</strong></h3>
<p>Before adding content, I made a few intentional decisions:</p>
<ul>
<li>Content should be <strong>reusable</strong> across platforms (LinkedIn, Instagram, blog)</li>
<li>Posts should be <strong>easy to add without redesign</strong></li>
<li>The structure should support both <strong>WordPress and future migration</strong> (Next.js if needed)</li>
<li>Minimal dependencies, maximum clarity</li>
</ul>
<p>This helped me avoid overengineering while still thinking long-term.</p>
<h3><strong>Key Structural Decisions</strong></h3>
<ul>
<li><strong>Posts over pages</strong><br>Blog-style posts allow consistency, SEO, and growth.</li>
<li><strong>Fixed content format</strong><br>Every post follows the same structure:<br>Context → Decisions → Learnings → What’s next</li>
<li><strong>Clean URLs & SEO-first setup</strong><br>Slugs, headings, and internal linking planned from day one.</li>
<li><strong>Minimal UI</strong><br>Readability &gt; animations<br>Content &gt; visuals</li>
</ul>
<hr />
<h3><strong>What I Learned</strong></h3>
<ul>
<li>Structure saves more time than tools</li>
<li>A simple system scales better than a perfect design</li>
<li>Writing exposes unclear thinking quickly</li>
<li>Treating a portfolio like a product changes mindset</li>
</ul>`,
  },
  {
    slug: 'developer-portfolio-public',
    title: 'Why I’m Building My Developer Portfolio Publicly',
    date: '2025-12-29',
    category: 'Career',
    excerpt:
      'Most developers treat a portfolio as a static page — a list of skills, a few projects, and a contact',
    image: null,
    content: `
<p>Most developers treat a portfolio as a static page — a list of skills, a few projects, and a contact form.<br>I decided to do it differently.</p>
<p>This portfolio is not just to <em>show what I’ve built</em>, but to <strong>document how I think, learn, and make decisions</strong> as a developer.</p>
<h3><strong>Context</strong></h3>
<p>Over the last couple of years, I’ve worked with multiple tech stacks — Node.js, Angular, React, WordPress — across different kinds of projects.<br>What I realized was this:</p>
<blockquote><p>Skills alone don’t reflect problem-solving ability.</p></blockquote>
<p>So instead of only showcasing finished work, I want this space to show the <strong>process behind the work</strong>.</p>
<hr />
<h3><strong>What I’m Doing Differently</strong></h3>
<ul>
<li>Writing posts alongside building projects</li>
<li>Explaining <em>why</em> I chose a certain approach, not just <em>what</em> I used</li>
<li>Documenting mistakes, refactors, and improvements</li>
<li>Treating this portfolio as a long-term knowledge base</li>
</ul>
<p>The goal is clarity — for others, and for my future self.</p>
<hr />
<h3><strong>Key Learnings So Far</strong></h3>
<ul>
<li>Clean thinking matters more than complex code</li>
<li>Consistency builds credibility faster than perfection</li>
<li>Real-world decisions are rarely black and white</li>
<li>Writing improves technical clarity</li>
</ul>`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatArticleDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
