# jordanchristley-site

Personal site and Emerald Technology Consulting marketing site for **Jordan Christley** — AI consultant & software engineer based in Houston, TX.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4**
- **framer-motion**
- **TypeScript**
- **Static export** (`output: "export"`) — no server runtime

## Design system

Obsidian / Emerald / Living Green brand palette with a green-glass material language (deep translucent green glass, razor living-green borders, glass-highlight insets). Display type is **Fredoka**; body type is **Nunito Sans** — both loaded via `next/font` in `src/app/layout.tsx`.

The emerald color scale is remapped to brand hexes in `src/app/globals.css` (e.g. `emerald-300` → `#18D878`, `emerald-950` → `#071B18`). Explicit brand tokens (`bg-obsidian`, `text-living-green`, etc.) are also available.

Full material rules live in `.agents/skills/green-glass/SKILL.md`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static export in `out/`.

## Deploy

GitHub Pages via GitHub Actions. The workflow is `.github/workflows/deploy.yml` — it triggers on **push to `main`** (and `workflow_dispatch`). It installs deps with `npm ci`, runs `npm run build`, uploads `out/` as a Pages artifact, and deploys it.

## Routes

| Route | What it is |
|---|---|
| `/` | Home |
| `/about` | About Jordan |
| `/resume` | Resume |
| `/emerald-tech` | Emerald Technology Consulting |
| `/services` | Services overview |
| `/services/ai-integration-houston` | AI integration |
| `/services/custom-web-development-houston` | Custom web development |
| `/services/digital-transformation-houston` | Digital transformation |
| `/services/experience-design-houston` | Experience design |
| `/services/platform-hardening-houston` | Platform hardening |
| `/services/product-engineering-houston` | Product engineering |
| `/blog` | Blog index |
| `/blog/*` | Individual posts (see `src/app/blog/`) |

SEO metadata routes: `robots.ts` and `sitemap.ts` in `src/app/` (static-export compatible).
