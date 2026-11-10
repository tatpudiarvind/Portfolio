# Arvind Tatpudi — Portfolio

Angular portfolio site authored for Arvind Tatpudi. It uses the publicly viewable portfolio only as high-level inspiration for concise positioning and evidence-led project storytelling; no source code, copy, photos, or other assets were copied.

Live site: https://tatpudiarvind.github.io/Portfolio/

## What's on the page

- Hero with a before-and-after impact ledger of measured results, plus current role and the roles, locations and sponsorship need
- Projects that each lead with their result (native disclosures for how it was built and checked; the in-progress project is labeled as such), including the public evidence-backed knowledge assistant
- Experience carousel: Siemens Healthineers, Happiest Minds and Option Matrix, with result-first bullets. It auto-advances every 3 seconds, has a Pause/Resume button and previous/next arrows, and pauses on hover, focus, hidden tab or reduced motion. The frame size stays fixed across slides.
- Education, Toolkit, and Contact with LinkedIn and GitHub links and a right-to-work note

Content follows Arvind's CV (v4, November 2026). On this public site, Siemens work shows outcome numbers but keeps internal product and system names and Siemens counts general.

## Project structure

- `src/app/app.component.ts` — typed content data and carousel logic
- `src/app/app.component.html` — page template
- `src/styles.css` — dark design system and carousel styles
- `.github/workflows/deploy.yml` — GitHub Pages deployment
- `PRODUCT.md`, `DESIGN.md`, `PLAN.md` — product, design and publishing notes

## Run locally

Requires Node.js 20+ (developed on Node 24).

Install dependencies and start the Angular development server:

```powershell
Set-Location D:\ArvindPortfolio
npm install
npm start
```

Then visit `http://localhost:4200`.

Create an optimized production build with:

```powershell
npm run build
```

## Free hosting (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site with `--base-href /Portfolio/` and publishes it at `https://tatpudiarvind.github.io/Portfolio/`. In the repository, set **Settings → Pages → Source** to **GitHub Actions** once. Keep `package-lock.json` pointing at the public npm registry (`registry.npmjs.org`) so `npm ci` works on GitHub's runners.

## Before publishing

Follow `PLAN.md` to replace clearly marked contact placeholders, verify employment details, and add only approved links, metrics, and images. The current case-processing feature is deliberately labeled as in progress.
