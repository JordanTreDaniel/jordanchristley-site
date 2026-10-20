# Meta Tags Implementation Guide for jordanchristley.com

This file contains the exact metadata to add to each page via Next.js `generateMetadata()` exports.

---

## 1. Root Layout (`src/app/layout.tsx`)

Replace the existing `metadata` export with this enhanced version:

```typescript
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    template: "%s | Jordan Christley",
  },
  description:
    "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.",
  keywords: [
    "AI consultant Houston",
    "AI expert Houston",
    "software engineer Houston",
    "web developer Houston",
    "technology specialist Houston",
    "custom AI development Houston",
    "AI business transformation Houston",
    "Jordan Christley developer",
    "self-taught software engineer",
  ],
  authors: [{ name: "Jordan Christley" }],
  creator: "Jordan Christley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jordan Christley",
    title: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    description:
      "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    description:
      "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@jordanchristley",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

---

## 2. Home Page (`src/app/page.tsx`)

This page is currently a `"use client"` component. To add metadata, either:
- **Option A (Recommended):** Add a `metadata` export in a sibling `layout.tsx` or keep the page as server component and move client logic to a child component.
- **Option B:** Add metadata via the root layout only (already done above).

Since the home page uses `"use client"`, the root layout metadata covers it. The home page inherits the root metadata. No changes needed unless you want page-specific metadata.

If you want a page-specific override, create `src/app/page.metadata.ts` or convert to a server component wrapper.

---

## 3. Emerald Tech Page (`src/app/emerald-tech/page.tsx`)

Replace the existing `metadata` export with:

```typescript
import type { Metadata } from "next";

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  title: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
  description:
    "Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses. Product engineering, experience design, and platform hardening by Jordan Christley.",
  keywords: [
    "AI consultant Houston",
    "AI expert Houston",
    "AI training Houston",
    "AI business transformation Houston",
    "custom AI development Houston",
    "technology specialist Houston",
    "web development Houston",
    "Emerald Technology",
    "Houston digital transformation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/emerald-tech/`,
    siteName: "Jordan Christley",
    title: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
    description:
      "Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses.",
    images: [
      {
        url: `${siteUrl}/og-emerald.png`,
        width: 1200,
        height: 630,
        alt: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
    description:
      "Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses.",
    images: [`${siteUrl}/og-emerald.png`],
    creator: "@jordanchristley",
  },
  alternates: {
    canonical: `${siteUrl}/emerald-tech/`,
  },
};
```

---

## 4. JSON-LD Structured Data (Add to Layout or Pages)

Add this to `src/app/layout.tsx` inside the `<head>` tag, or create a `JsonLd` component:

### In layout.tsx `<head>`:

```tsx
{/* JSON-LD Structured Data */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jordan Christley",
      jobTitle: "Software Engineer & AI Consultant",
      url: "https://jordanchristley.com",
      sameAs: [],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Web Development",
        "Software Engineering",
        "AI Integration",
        "Product Strategy",
        "Full-Stack Development",
      ],
    }),
  }}
/>
```

### In emerald-tech/page.tsx `<head>` or as a component:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Emerald Technology Consulting",
      description:
        "AI integration, custom web development, and digital transformation for Houston businesses.",
      url: "https://jordanchristley.com/emerald-tech/",
      founder: {
        "@type": "Person",
        name: "Jordan Christley",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      areaServed: [
        "Houston",
        "Midtown Houston",
        "Downtown Houston",
        "The Heights Houston",
        "Montrose Houston",
        "Galleria Houston",
        "Energy Corridor Houston",
        "Katy TX",
        "Sugar Land TX",
        "The Woodlands TX",
        "Pearland TX",
        "Missouri City TX",
      ],
      serviceType: [
        "AI Integration",
        "Custom Web Development",
        "Product Engineering",
        "Experience Design",
        "Platform Hardening",
        "Digital Transformation",
      ],
    }),
  }}
/>
```

---

## 5. Sitemap Generation (Alternative to Static File)

For Next.js with `output: "export"`, add this to `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Sitemap is generated as a static file in /public/sitemap.xml
  // No built-in sitemap generation for static export — use the static file
};

export default nextConfig;
```

Or use the `next-sitemap` package for automatic generation:

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jordanchristley.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  trailingSlash: true,
};
```

Add to `package.json` scripts:

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

---

## 6. Security Headers (next.config.ts)

For static export, headers must be configured at the Cloudflare level or via `_headers` file in `/public/`:

### Option A: Cloudflare Pages `_headers` file

Create `public/_headers`:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Option B: Via meta tags (less effective but works for static)

Already included in the layout.tsx changes above.

---

## 7. OG Image

Create a 1200x630 branded image and save as:
- `public/og-image.png` (home page)
- `public/og-emerald.png` (emerald-tech page)

Use tools like:
- Figma export
- Canva
- `@vercel/og` (if switching to Vercel)
- HTML/CSS screenshot tool

---

## 8. Canonical URL Logic

For static export, canonical URLs are set via the `alternates.canonical` field in metadata (shown above). Next.js renders them as `<link rel="canonical" href="...">`.

---

## Deployment Checklist

1. ✅ Add `sitemap.xml` to `/public/`
2. ✅ Add `robots.txt` to `/public/` (replaces Cloudflare's auto-generated one)
3. ✅ Update `layout.tsx` with enhanced metadata
4. ✅ Update `emerald-tech/page.tsx` with enhanced metadata
5. ✅ Create OG images and save to `/public/`
6. ✅ Create `public/_headers` for security headers
7. ✅ Build and deploy: `npm run build`
8. ✅ Submit sitemap to Google Search Console
9. ✅ Submit to Bing Webmaster Tools
10. ✅ Test with https://search.google.com/test/mobile-friendly
11. ✅ Test with https://developers.facebook.com/tools/debug/
12. ✅ Test with https://cards-dev.twitter.com/validator
