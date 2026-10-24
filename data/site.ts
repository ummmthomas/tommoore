/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for the home page lives here.
 * Case study write-ups live in src/content/work/ as Markdown.
 *
 * Images go in public/ and are referenced without a leading slash
 * (e.g. 'images/rapid/hero.png') so they work under the GitHub Pages base path.
 */

export type Project = {
  /** Matches a file in src/content/work/; leave empty for projects without a case study. */
  slug: string;
  title: string;
  summary: string;
  years: string;
  role: string;
  scope: string;
  impact: string;
  image?: { src: string; alt: string };
};

export type ListItem = { title: string; meta: string; href?: string };

export type Testimonial = { quote: string; name: string; title: string; href?: string };

export const site = {
  url: 'https://ummmthomas.github.io',
  meta: {
    title: 'Tom Moore | Product Designer',
    description:
      'Tom Moore is a London-based product designer with over 7 years of experience building products and teams, solving complex technical problems through inclusive design.',
  },
  hero: {
    name: 'Tom Moore',
    role: 'Product Designer',
    location: 'London',
    tagline: 'Dedicated to addressing intricate technical challenges through inclusive design.',
  },
  work: [
    {
      slug: 'rapid-api',
      title: 'Rapid API',
      summary: 'Optimised workflows for API developers, increasing conversion by 30%.',
      years: '2022 – 2023',
      role: 'Product design lead',
      scope: 'Product strategy, information architecture, UX and UI, IDE integrations',
      impact: '+30% conversion; 100k IDE extension users in the first week',
    },
    {
      slug: 'times-radio',
      title: 'Times Radio',
      summary: 'A new audio platform facilitating 4 million weekly listening hours.',
      years: '2019 – 2020',
      role: 'UX lead',
      scope: 'Research and testing, concept validation, web and native UX',
      impact: 'Record 3.96m weekly listening hours; 600k weekly listeners',
    },
  ] satisfies Project[] as Project[],
  about: {
    paragraphs: [
      'I’m a thoughtful, collaborative product designer with over seven years of industry experience, combining creative skills with a background in computer science.',
      'I’ve led work from first concept to launch across developer tools and media. I like lean hypotheses, low-cost prototypes, and information architecture shaped around what people are trying to do rather than how the system is built.',
    ],
  },
  sideProjects: [
    { title: 'Garments', meta: 'Short film · objects and objectification' },
    { title: 'Installation', meta: 'Interactive installation · rave culture and accessibility' },
    { title: 'Family Portrait', meta: 'Short film · a time capsule of 90s family holidays' },
  ] satisfies ListItem[] as ListItem[],
  // Fill in from the current site's About page once the original copy is available.
  // The section is hidden while this list is empty.
  testimonials: [] as Testimonial[],
  contact: {
    heading: 'Let’s connect and talk about how I can help your team.',
    email: '',
    linkedin: 'https://www.linkedin.com/in/tommoore292/',
  },
};
