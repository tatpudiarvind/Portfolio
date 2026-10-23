# Arvind Tatpudi — Portfolio

Angular portfolio site authored for Arvind Tatpudi. It uses the publicly viewable portfolio only as high-level inspiration for concise positioning and evidence-led project storytelling; no source code, copy, photos, or other assets were copied.

## Run locally

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

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site with `--base-href /Portfolio/` and publishes it at `https://tatpudiarvind.github.io/Portfolio/`. In the repository, set **Settings → Pages → Source** to **GitHub Actions** once.

## Before publishing

Follow `PLAN.md` to replace clearly marked contact placeholders, verify employment details, and add only approved links, metrics, and images. The current case-processing feature is deliberately labeled as in progress.
