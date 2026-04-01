# BMR Calculator

A static, physiotherapy-friendly BMR calculator web app scaffold focused on education.

## Project Overview

This project provides a clean, clinically credible starter app for estimating:

- Basal Metabolic Rate (BMR)
- Estimated maintenance calories
- A gentle calorie-deficit example
- A practical protein intake range

It also includes educational landing-page sections tailored to adults in rehab contexts, including example macro templates, weekly exercise structures, FAQ, and a clear disclaimer.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown by Vite.

## Build

Create a production build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment Notes

This scaffold is configured for GitHub Pages with:

- `base: '/bmr-calculator/'` in `vite.config.ts`

To deploy:

1. Ensure repository name is `bmr-calculator` (or update `base` to match your repo name).
2. Build site with `npm run build`.
3. Deploy `dist/` folder using GitHub Actions or a Pages deploy action (for example `actions/upload-pages-artifact` + `actions/deploy-pages`).
4. In GitHub repository settings, set Pages source to GitHub Actions.

If your repo name differs, update Vite `base` accordingly.
