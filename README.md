# Tom Moore: product design portfolio

Personal portfolio for Tom Moore, a London-based product designer. Built with [Astro](https://astro.build) and Tailwind CSS, based on the MIT-licensed [Projects Portfolio template](https://github.com/masoudsoleymani/projects-portfolio-template) by Masoud Soleymani.

Live (for now): https://ummmthomas.github.io/tommoore/

## Editing content

- **Home page, archive and contact links:** `data/site.ts`
- **Case studies:** one Markdown file per project in `src/content/work/`. The file name becomes the URL (`/work/<file-name>`), and the matching `slug` in `data/site.ts` links the home page card to it.
- **Images:** put them in `public/` and reference them without a leading slash, e.g. `images/rapid/hero.png`.
- **Colours and type:** design tokens (light and dark) in `src/styles/tokens.css`; the type scale (`.title`, `.headline`, `.subhead`, `.eyebrow`, `.body`, links and captions) is in `src/styles/global.css`.
- **Images:** none yet. Add them per project via `image` in `data/site.ts`; until then each project shows a tinted placeholder.

## Running locally

```sh
npm ci
npm run dev      # http://localhost:4321/tommoore/
npm run build    # outputs to dist/
npm run check    # type-check
npm run lint
```

## Deploying

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

### Moving tommoore.co.uk over

1. In `astro.config.mjs`, set `site` to `'https://tommoore.co.uk'` and remove `base`. Update `site.url` in `data/site.ts` to match.
2. Add a `public/CNAME` file containing `tommoore.co.uk`.
3. Point the domain's DNS at GitHub Pages, then set the custom domain in **Settings → Pages**.
