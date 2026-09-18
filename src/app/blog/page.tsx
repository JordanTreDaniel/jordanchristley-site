import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  title: "Blog — AI, Web Development & Tech Insights in Houston, TX",
  description: "Insights on AI integration, web development, digital transformation, and technology strategy for Houston businesses.",
  keywords: ["Houston tech blog", "AI blog Houston", "web development blog Houston", "digital transformation blog", "AI consultant blog"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/blog/`, siteName: "Jordan Christley", title: "Blog — Houston, TX", description: "Insights on AI, web development, and digital transformation.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Blog Houston TX" }] },
  twitter: { card: "summary_large_image", title: "Blog — Houston, TX", description: "Insights on AI, web development, and digital transformation.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/blog/` },
  robots: { index: true, follow: true },
};

const posts = [
  { title: "How to Add AI to Your Houston Business", slug: "how-to-add-ai-to-your-houston-business", description: "A practical guide for Houston business owners looking to integrate AI into their operations.", date: "September 2026", readTime: "6 min read", category: "AI Integration" },
  { title: "Custom AI Development for Houston Startups", slug: "custom-ai-development-for-houston-startups", description: "Why Houston startups should build custom AI solutions instead of relying on generic SaaS tools.", date: "September 2026", readTime: "7 min read", category: "AI Development" },
  { title: "Digital Transformation Guide for Houston Small Businesses", slug: "digital-transformation-guide-houston-small-businesses", description: "A step-by-step guide to modernizing your Houston small business with digital tools.", date: "September 2026", readTime: "8 min read", category: "Digital Transformation" },
  { title: "Best Web Development Practices for Houston in 2026", slug: "best-web-development-practices-houston-2026", description: "Modern web development standards every Houston business should follow.", date: "September 2026", readTime: "7 min read", category: "Web Development" },
  { title: "Why Houston Businesses Need an AI Consultant", slug: "why-houston-businesses-need-an-ai-consultant", description: "The case for bringing an AI consultant into your Houston business.", date: "September 2026", readTime: "6 min read", category: "AI Strategy" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050a07] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link href="/" className="text-sm text-emerald-400/80 hover:text-emerald-300">← Home</Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-emerald-50/70">Thoughts on AI, web development, and digital transformation for Houston businesses.</p>
        <div className="mt-12 space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group block rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 transition hover:border-emerald-300/30 hover:bg-emerald-950/50">
              <div className="flex items-center gap-3 text-xs text-emerald-200/70">
                <span className="rounded-full border border-emerald-300/10 bg-emerald-950/60 px-3 py-1">{post.category}</span>
                <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-emerald-200">{post.title}</h2>
              <p className="mt-2 text-sm text-emerald-100/70">{post.description}</p>
              <p className="mt-4 text-sm font-medium text-emerald-400 group-hover:text-emerald-300">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
