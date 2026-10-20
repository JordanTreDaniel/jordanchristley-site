# SEO Strategy: jordanchristley.com + Emerald Technology

**Date:** August 28, 2026
**Goal:** Attract young, intelligent, positive people doing interesting things in business/culture — especially Houston and Miami. Position Jordan Christley as a developer/creator/entrepreneur, and Emerald Technology as the local, in-person AI consulting service that hides the automation behind it.

---

## 1. Site Architecture

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage — developer/creator/entrepreneur identity | ✅ Exists |
| `/about` | The story: self-taught, 10+ years, never college, built with LLMs/Cursor/OpenCode | ❌ Build |
| `/projects` | Showcase published apps, games, tools (MMSTR, shark-finder, etc.) | ❌ Build |
| `/blog` | Content hub — long-tail SEO targeting | ❌ Build |
| `/emerald-tech` | AI consulting/services sub-brand | ✅ Exists |
| `/emerald-tech/service-areas` | Houston + surrounding areas landing page | ❌ Build |
| `/emerald-tech/service-areas/[city]` | Individual city pages (Houston, Katy, Sugar Land, etc.) | ❌ Build |
| `/contact` | Contact form + social links | ❌ Build |
| `/resume` | Professional resume | ❌ Build |

---

## 2. Keyword Strategy

### Primary (money keywords — local search volume)
- AI consultant Houston
- AI expert Houston
- AI training Houston
- AI business transformation Houston
- technology specialist Houston
- custom AI development Houston

### Secondary (broader reach)
- AI consulting agency
- AI automation
- custom AI tools
- AI for small business
- digital transformation Houston

### Long-tail (high intent, low competition)
- AI consultant near me Houston TX
- how to use AI for my business Houston
- AI agent developer Houston
- AI integration services Houston
- small business AI solutions Houston

### Personal brand
- Jordan Christley developer
- self-taught software engineer
- developer creator entrepreneur Houston

---

## 3. Local SEO Strategy (from YouTube University BTnU_cCx36Y)

### Google Business Profile (Emerald Technology)
- **Categories:** AI Consulting (primary), Technology Services, Computer Consultant
- **Services (validate with Semrush CPC):** AI Training, Business Automation, Custom AI Development, AI Strategy Consulting, Web Development, Digital Transformation
- **Service areas (≤2hr drive):** Houston, Midtown Houston, Downtown Houston, The Heights, Montrose, Galleria, Energy Corridor, Katy, Sugar Land, The Woodlands, Pearland, Missouri City
- **BS Test:** Only add what you can actually deliver. No filler categories/services.

### Service Area Page Matrix
Each city gets its own page with unique content:
- `/emerald-tech/service-areas/houston` — "AI Consultant in Houston, TX"
- `/emerald-tech/service-areas/katy` — "AI Consultant in Katy, TX"
- `/emerald-tech/service-areas/sugar-land` — "AI Consultant in Sugar Land, TX"
- etc.

Each page: unique intro, local case study or example, service list, FAQ, CTA. Never thin/duplicate content.

### Review Engine
1. Ask every client post-delivery via email/text
2. Qualify with 1-5 referral form (review gate)
3. 1-3★ → handle offline (refund/compensate)
4. 4-5★ → redirect to Google "get more reviews" link
5. Auto-reply to 4-5★, hand-reply to 1-3★
6. Target: ~8 new reviews/month, 4.7-4.9 average

### Weekly Posts (activity signal, not for views)
- 1 post/week on Google Business Profile
- AI tips, project updates, Houston tech scene
- Automate with Claude → make.com → GMB

### Citations
Consistent Name/Address/Phone on: Yelp, Facebook, Bing, BBB, Yellow Pages, LinkedIn

---

## 4. Content Strategy

### Blog Posts (target long-tail keywords)
1. "How I Built [Project] with AI in 24 Hours" — showcase each project
2. "AI for Small Business: A Houston Developer's Guide"
3. "Why I Chose In-Person AI Consulting in Houston (And Hid the Automation)"
4. "The AI Tech Stack: LLMs, Cursor, OpenCode, and What's Next"
5. "From Zero to Developer: My Self-Taught Journey"
6. "AI Business Transformation: What Houston Companies Actually Need"

### Case Studies
- MMSTR: "How I Built a Chris Voss Negotiation Practice App with AI"
- Shark-finder: "Building a Real Estate Deal Pipeline with NestJS"
- Any future projects

### AEO Content (Answer Engine Optimization)
- FAQ page targeting "what is AI consulting", "how much does AI consulting cost Houston"
- Structured data (FAQPage schema) on every service page
- Content designed to be cited by Claude/GPT/Perplexity

---

## 5. Technical SEO Checklist

Distilled from the MMSTR SEO audit process — apply to every site:

### Static Files (drop into /public)
- [x] `sitemap.xml` — XML sitemap with all pages
- [x] `robots.txt` — Allow all crawlers, reference sitemap
- [x] `_headers` — Security headers (Cloudflare Pages)

### Metadata (per-page)
- [x] `<title>` with keyword + location
- [x] `<meta name="description">` with services + location
- [x] `<meta name="keywords">` with primary + secondary terms
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:site_name)
- [x] Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- [x] `<link rel="canonical">` on every page
- [x] `metadataBase` in Next.js layout

### Structured Data (JSON-LD)
- [x] Person schema (Jordan Christley)
- [x] ProfessionalService schema (Emerald Technology)
- [x] FAQPage schema (service questions)
- [x] WebSite schema (site-wide)
- [ ] Service schema per service area page
- [ ] LocalBusiness schema for GBP integration

### Security
- [x] HSTS header
- [x] X-Content-Type-Options
- [x] X-Frame-Options
- [x] Referrer-Policy
- [x] Permissions-Policy

### Analytics & Search
- [ ] Google Search Console — submit sitemap
- [ ] Bing Webmaster Tools — submit sitemap
- [ ] Google Analytics or Plausible — track visitors
- [ ] Facebook/Meta Pixel — retargeting (optional)
- [ ] Mobile-friendly test

### Performance
- [ ] OG images (1200×630) for social sharing
- [ ] Favicon (already exists)
- [ ] Apple touch icon
- [ ] Page speed optimization (Core Web Vitals)

---

## 6. Logo Concept: Emerald

### Concept
Geometric emerald gemstone — minimal, modern, conveys precision and clarity.

### Design Direction
- **Shape:** Hexagonal or octagonal gem silhouette, clean lines
- **Colors:** Emerald green (#046307 primary, #50C878 accent) on dark background (#0a0a0a)
- **Style:** Flat design, no gradients, no clip art. Think Stripe/Linear/Vercel aesthetic.
- **Typography:** Clean sans-serif (Space Grotesk, Inter, or similar)

### Variants Needed
1. **Full logo** — gem + "Emerald Technology" wordmark (for headers, print)
2. **Compact** — gem + "ET" or just gem (for favicon, app icons)
3. **OG image** — 1200×630 with gem + "Jordan Christley | AI Consultant Houston"
4. **Favicon** — 32×32 and 16×16 simplified gem

### Generation
- Use Claude Design or p5.js sketch for the concept
- Export SVG for scalability
- PNG exports at 1x, 2x, 3x for all sizes

---

## 7. AEO (Answer Engine Optimization)

AI answer engines (Claude, GPT, Perplexity) cite structured, authoritative content.

### Strategy
1. **FAQ schema** on every service page — directly answers what AI queries
2. **"How I built X" blog posts** — technical depth that gets cited
3. **Local authority signals** — consistent NAP, reviews, service area pages
4. **Long-form content** that answers questions fully (not thin summaries)

### Key Queries to Own
- "AI consultant Houston" → Emerald Technology page
- "how to use AI for my business" → blog post + FAQ
- "AI developer Houston" → Jordan Christley homepage
- "custom AI tools for small business" → blog + service page

---

## 8. Competitive Analysis

### The Gap in Houston AI Consulting
Most AI consultants are:
- Online-only, remote-first
- Scalable-first, automated-first
- No in-person relationship
- Generic "we do AI" messaging

### Jordan's Edge
- **In-person first** — Houston locals can meet in person
- **Relationship-first** — hides the automation, builds trust
- **10+ years experience** — self-taught, real track record
- **Builder, not talker** — ships actual apps (MMSTR, shark-finder, etc.)
- **Young, positive, cultural** — attracts the target demographic

### Differentiation Message
"I'm not another AI agency that sends you a proposal and disappears. I'm in Houston. I build things. Let's meet."

---

## 9. Execution Phases

### Phase 1: Technical Foundation (Week 1)
- [ ] Deploy sitemap.xml, robots.txt, _headers to GitHub Pages
- [ ] Update layout.tsx with full OG/Twitter/canonical metadata
- [ ] Update emerald-tech/page.tsx with enhanced metadata
- [ ] Add JSON-LD structured data (Person, ProfessionalService, FAQ)
- [ ] Create OG images (1200×630)
- [ ] Submit to Google Search Console + Bing Webmaster Tools

### Phase 2: Content Pages (Week 2-3)
- [ ] Build /about page (the story)
- [ ] Build /projects page (portfolio)
- [ ] Build /contact page
- [ ] Build /emerald-tech/service-areas/ hub page
- [ ] Build individual city service area pages (start with Houston, Katy, Sugar Land)

### Phase 3: Content & SEO (Week 3-4)
- [ ] Write first 3 blog posts (project case studies)
- [ ] Set up Google Business Profile for Emerald Technology
- [ ] Set up citation profiles (Yelp, BBB, LinkedIn)
- [ ] Start review engine with first clients

### Phase 4: Scale (Month 2+)
- [ ] Publish 2 blog posts/week
- [ ] Build out all 12 service area pages
- [ ] Add more case studies as projects ship
- [ ] Monitor Search Console for keyword rankings
- [ ] Iterate on content based on what ranks

---

## 10. Files Ready to Deploy

All implementation files are in `~/dev/jordanchristley-seo-fixes/`:

| File | What it does |
|------|-------------|
| `sitemap.xml` | Drop into /public |
| `robots.txt` | Drop into /public |
| `_headers` | Drop into /public (Cloudflare Pages) |
| `src-app-layout.tsx` | Replace src/app/layout.tsx |
| `src-app-emerald-tech-page.tsx` | Replace src/app/emerald-tech/page.tsx |
| `next.config.ts` | Updated config |
| `schema.json` | Reference for all JSON-LD |
| `meta-tags.md` | Step-by-step implementation guide |
| `README.md` | Quick-apply instructions |
