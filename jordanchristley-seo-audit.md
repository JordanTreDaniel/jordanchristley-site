# SEO Audit: jordanchristley.com
**Date:** August 28, 2026
**Repo:** JordanTreDaniel/jordanchristley-site (public)
**Stack:** Next.js 16, static export, Cloudflare Pages, GitHub Pages

---

## Current State Summary

| Element | Status | Notes |
|---------|--------|-------|
| `<title>` tag | ✅ Exists | Home: "Jordan Christley", Emerald: "Emerald Technology Consulting \| Jordan Christley" |
| `<meta description>` | ✅ Exists | Generic — no keywords, no location, no services |
| OG tags (og:title, og:image, etc.) | ❌ Missing | No Open Graph metadata at all |
| Twitter Card tags | ❌ Missing | No twitter:card, twitter:title, etc. |
| Canonical URL | ❌ Missing | No `<link rel="canonical">` on any page |
| JSON-LD structured data | ❌ Missing | Zero `<script type="application/ld+json">` |
| `sitemap.xml` | ❌ Missing | Returns 404 |
| `robots.txt` | ⚠️ Cloudflare-managed | Exists but no sitemap reference; blocks AI crawlers |
| Security headers | ❌ Missing | No HSTS, CSP, X-Frame-Options via meta or config |
| OG image | ❌ Missing | No `og:image` — social shares show blank |
| Favicon | ✅ Exists | `/favicon.ico` present |
| `lang` attribute | ✅ Exists | `<html lang="en">` |
| Viewport meta | ✅ Exists | Standard responsive setup |

---

## Pages Found

### 1. `/` (Home)
- **Title:** "Jordan Christley"
- **Description:** "Jordan Christley is a developer and entrepreneur building modern web products and consulting with businesses."
- **Issues:** Generic title (no keywords), description doesn't mention Houston, AI, or services. No page-level metadata export — uses layout default only.

### 2. `/emerald-tech/`
- **Title:** "Emerald Technology Consulting | Jordan Christley"
- **Description:** "Emerald Technology Consulting partners with businesses to design and deliver modern web products, platforms, and digital experiences."
- **Issues:** Better title but no location. Description is vague — doesn't mention AI, Houston, or specific services. No OG/Twitter/canonical/JSON-LD.

### 3. `/contact` — 404
### 4. `/about` — 404
### 5. `/pawparadise/` — 404 (portfolio item links out to external URL)

---

## Priority-Ordered Fixes

### P0 — Critical (Do First)
1. **Create `sitemap.xml`** — Google can't discover pages without it
2. **Create `robots.txt`** — Reference sitemap, allow search crawlers
3. **Add canonical URLs** — Prevent duplicate content issues
4. **Add OG tags** — Social sharing is completely broken (no preview images)

### P1 — High Impact
5. **Improve page titles with keywords** — Target "AI consultant Houston", etc.
6. **Improve meta descriptions** — Include location, services, keywords
7. **Add JSON-LD structured data** — Organization, LocalBusiness, Service schemas
8. **Add Twitter Card tags** — Twitter/X sharing optimization

### P2 — Medium Impact
9. **Create OG image** — 1200x630 branded image for social shares
10. **Add security headers** — HSTS, CSP via next.config.ts headers
11. **Add `hreflang`** — If multilingual in future

### P3 — Content SEO
12. **Add more pages** — `/about`, `/services`, `/blog` for keyword coverage
13. **Add internal linking** — Cross-link between home and emerald-tech
14. **Add alt text to images** — Accessibility + image SEO

---

## Recommended Page Titles & Meta Descriptions

### Home (`/`)
- **Title:** `Jordan Christley — AI Consultant & Software Engineer in Houston, TX`
- **Description:** `Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.`
- **Keywords:** AI consultant Houston, software engineer Houston, web developer Houston

### Emerald Tech (`/emerald-tech/`)
- **Title:** `Emerald Technology Consulting — AI & Web Development in Houston, TX`
- **Description:** `Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses. Product engineering, experience design, and platform hardening.`
- **Keywords:** AI consultant Houston, custom AI development Houston, AI business transformation Houston

---

## Target Keywords

| Primary | Secondary |
|---------|-----------|
| AI consultant Houston | self-taught software engineer |
| AI expert Houston | Jordan Christley developer |
| AI training Houston | technology specialist Houston |
| AI business transformation Houston | custom AI development Houston |

### Service Areas (Emerald Technology)
Houston, Midtown, Downtown, The Heights, Montrose, Galleria, Energy Corridor, Katy, Sugar Land, The Woodlands, Pearland, Missouri City

---

## What Exists in the Repo

```
src/app/layout.tsx        — Root layout with basic metadata (title template + description)
src/app/page.tsx          — Home page (client component, NO metadata export)
src/app/emerald-tech/page.tsx — Emerald page (has metadata export, no OG/Twitter/canonical)
next.config.ts            — Static export config, no headers/SEO setup
public/favicon.ico        — Favicon exists
```

### What's Missing from the Repo
- No `sitemap.xml` generation
- No `robots.txt` (Cloudflare auto-generates one, but it blocks AI crawlers and has no sitemap ref)
- No OG image in `/public`
- No `headers()` in next.config.ts
- No `generateMetadata()` functions with OG/Twitter fields
- No JSON-LD components or scripts
- No canonical URL logic
