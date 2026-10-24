/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for the home and archive pages lives here.
 * Case study write-ups live in src/content/work/ as Markdown.
 *
 * Images go in public/ and are referenced without a leading slash
 * (e.g. 'images/rapid/hero.png') so they work under the GitHub Pages base path.
 */

export const site = {
  url: 'https://ummmthomas.github.io',
  meta: {
    title: 'Tom Moore | Product Designer',
    description:
      'Tom Moore is a London-based product designer with over 7 years of experience building products and teams, solving complex technical problems through inclusive design.',
  },
  hero: {
    name: 'Tom Moore',
    role: 'Product Designer, London',
    tagline: 'Dedicated to addressing intricate technical challenges through inclusive design.',
    contact: "Let's connect and talk about how I can help your team.",
    avatarSrc: 'avatar.svg',
    avatarAlt: 'Tom Moore',
  },
  about: {
    paragraphs: [
      'I’m a thoughtful, collaborative product designer with over seven years of industry experience, combining creative skills with a background in computer science.',
      'I’ve led work from first concept to launch across developer tools and media, from Rapid’s API Hub to the launch of Times Radio at News UK.',
      {
        heading: 'How I work',
        bullets: [
          'Lean hypotheses and low-cost prototypes to de-risk big bets early',
          'Information architecture shaped around user goals, not system components',
          'Close partnership with Product and Engineering, including distributed teams',
        ],
      },
      {
        heading: 'Focus areas',
        techItems: ['Developer tools', 'Media & audio', 'Research', 'Information architecture', 'Inclusive design'],
      },
    ],
  },
  // Fill in from the current site's About page once the original copy is available.
  // The section is hidden while this list is empty.
  testimonials: [] as readonly { quote: string; name: string; title: string; href?: string }[],
  featuredProjects: [
    {
      slug: 'rapid-api',
      title: 'Rapid API',
      period: '2022 – 2023',
      summary: 'Optimised workflows for API developers, increasing conversion by 30%.',
      solution: 'A single, goal-oriented workflow to design, test, monitor and publish APIs, extended into IDEs like VS Code.',
      impact: '30% increase in conversion across user segments; the VS Code extension reached 100k users in its first week.',
      readTime: '7 min read',
      image: '',
      imageAlt: '',
      tags: ['Developer tools', 'Information architecture', 'Distributed team'],
    },
    {
      slug: 'times-radio',
      title: 'Times Radio',
      period: '2019 – 2020',
      summary: 'A new audio platform facilitating 4 million weekly listening hours.',
      solution: 'Validated demand with low-cost prototypes, then designed the web and native architecture around the player and on-demand content.',
      impact: 'Record weekly listening hours and 600k weekly listeners, with high satisfaction and NPS.',
      readTime: '6 min read',
      image: '',
      imageAlt: '',
      tags: ['Media', 'Research', 'Web & native'],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Client work and personal projects by Tom Moore.',
    intro: 'Client work alongside personal projects: community-set and self-generated creative briefs.',
  },
  projectArchive: [
    { date: '2022 – 2023', project: 'Rapid API Hub', role: 'Product design lead', type: 'Developer tools' },
    { date: '2019 – 2020', project: 'Times Radio', role: 'UX lead', type: 'Media, web & native' },
    { date: '—', project: 'Garments', role: 'Personal project', type: 'Short film' },
    { date: '—', project: 'Installation', role: 'Personal project', type: 'Interactive installation' },
    { date: '—', project: 'Family Portrait', role: 'Personal project', type: 'Short film' },
  ],
  contact: {
    email: '',
    github: '',
    linkedin: 'https://www.linkedin.com/in/tommoore292/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
