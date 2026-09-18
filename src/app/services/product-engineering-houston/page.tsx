import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const siteUrl = "https://jordanchristley.com";
export const metadata: Metadata = {
  title: "Product Engineering for Houston Startups & Businesses — Houston, TX | Jordan Christley",
  description: "Product engineering services in Houston, TX — MVP development, sprint-based delivery, and launch support.",
  keywords: ["product engineering Houston", "MVP development Houston", "startup developer Houston", "sprint delivery Houston", "CTO as a service Houston"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/product-engineering-houston/`, siteName: "Jordan Christley", title: "Product Engineering for Houston Startups & Businesses", description: "Product engineering services in Houston, TX — MVP development, sprint-based delivery, and launch support.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Product Engineering for Houston Startups & Businesses" }] },
  twitter: { card: "summary_large_image", title: "Product Engineering for Houston Startups & Businesses", description: "Product engineering services in Houston, TX — MVP development, sprint-based delivery, and launch support.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/product-engineering-houston/` },
  robots: { index: true, follow: true },
};
export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#050a07] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="flex items-center gap-4 text-sm text-emerald-400/80">
          <Link href="/" className="hover:text-emerald-300">← Home</Link>
          <span className="text-white/20">/</span>
          <Link href="/services/" className="hover:text-emerald-300">Services</Link>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Product Engineering for Houston Startups & Businesses</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed"><p>Building a product is more than writing code. It&apos;s making the right decisions about scope, architecture, sequencing, and trade-offs.</p>
<h2 className="text-2xl font-semibold text-white pt-4">What product engineering means</h2>
<p>I help you figure out what to build, in what order, and why. That&apos;s product engineering: the intersection of technical execution and product thinking.</p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>MVP development</strong> — Lean, focused builds that get your product in front of real users fast.</li>
<li><strong>Sprint-based delivery</strong> — Two-week cycles with working demos. Real progress, not status reports.</li>
<li><strong>Technical leadership</strong> — Architecture decisions, code reviews, and engineering guidance.</li>
<li><strong>Full-stack execution</strong> — Frontend, backend, infrastructure, and deployment — one partner, zero handoff gaps.</li>
<li><strong>Launch support</strong> — Deployment, monitoring, and the critical first weeks of production.</li>
</ul>
<h2 className="text-2xl font-semibold text-white pt-4">For Houston startups and growing businesses</h2>
<p>Houston&apos;s startup ecosystem is growing fast — from the Ion to the Texas Medical Center&apos;s incubators. I provide the technical leadership to move fast without cutting corners.</p>
<h2 className="text-2xl font-semibold text-white pt-4">How I work</h2>
<p>Every engagement starts with a discovery session. Then I scope the work into two-week sprints, each producing a working demo. You&apos;re never more than two weeks from seeing working software.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Let&apos;s talk product</h2>
<p>If you have an idea that needs to become a product — or a product that needs better engineering — let&apos;s have a conversation.</p></div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let's talk about your product" description="Tell me what you're building." cta="Get in touch" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
