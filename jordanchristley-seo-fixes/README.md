# SEO Fixes for jordanchristley.com

## Files Created

```
jordanchristley-seo-fixes/
├── audit-report           → ~/dev/jordanchristley-seo-audit.md (detailed audit)
├── sitemap.xml            → Copy to repo as public/sitemap.xml
├── robots.txt             → Copy to repo as public/robots.txt
├── _headers               → Copy to repo as public/_headers (Cloudflare Pages)
├── meta-tags.md           → Reference guide for all metadata changes
├── schema.json            → Reference for JSON-LD structured data
├── next.config.ts         → Replacement for repo's next.config.ts
├── src-app-layout.tsx     → Replacement for src/app/layout.tsx
└── src-app-emerald-tech-page.tsx → Replacement for src/app/emerald-tech/page.tsx
```

## Quick Apply (in the repo directory)

```bash
cd ~/dev/jordanchristley-site

# 1. Copy static files
cp ~/dev/jordanchristley-seo-fixes/sitemap.xml public/sitemap.xml
cp ~/dev/jordanchristley-seo-fixes/robots.txt public/robots.txt
cp ~/dev/jordanchristley-seo-fixes/_headers public/_headers

# 2. Replace source files
cp ~/dev/jordanchristley-seo-fixes/src-app-layout.tsx src/app/layout.tsx
cp ~/dev/jordanchristley-seo-fixes/src-app-emerald-tech-page.tsx src/app/emerald-tech/page.tsx
cp ~/dev/jordanchristley-seo-fixes/next.config.ts next.config.ts

# 3. Build and test
npm run build

# 4. Commit and push
git add .
git commit -m "feat: add comprehensive SEO — sitemap, OG tags, JSON-LD, security headers"
git push
```

## What Was Fixed

| Gap | Fix |
|-----|-----|
| No sitemap.xml | Static sitemap.xml in /public |
| No robots.txt | robots.txt with sitemap reference |
| Generic title | Keyword-rich titles with location |
| No OG tags | Full Open Graph metadata on all pages |
| No Twitter Card | Twitter Card tags with large image |
| No canonical URL | Canonical URLs via alternates.canonical |
| No JSON-LD | Person, ProfessionalService, FAQPage schemas |
| No security headers | _headers file + meta tags |
| No keywords meta | Targeted keyword arrays |

## Still TODO (Manual)

1. **Create OG images** (1200x630) and save as:
   - `public/og-image.png` (home page)
   - `public/og-emerald.png` (emerald-tech page)

2. **Submit to Google Search Console:**
   - https://search.google.com/search-console
   - Add property: jordanchristley.com
   - Submit sitemap: https://jordanchristley.com/sitemap.xml

3. **Submit to Bing Webmaster Tools:**
   - https://www.bing.com/webmasters
   - Submit sitemap

4. **Test social sharing:**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

5. **Add more content pages** for keyword coverage:
   - `/about/` — Jordan's story and background
   - `/services/` — Detailed service descriptions
   - `/blog/` — Technical articles (huge SEO boost)

6. **Update sameAs in JSON-LD** with actual social profiles:
   - GitHub, LinkedIn, Twitter/X, etc.
