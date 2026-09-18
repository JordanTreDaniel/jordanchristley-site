import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const siteUrl = "https://jordanchristley.com";
export const metadata: Metadata = {
  title: "Custom Web Development for Houston Businesses — Houston, TX | Jordan Christley",
  description: "Custom web application development in Houston, TX — React, Next.js, full-stack apps built for performance and scale.",
  keywords: ["web development Houston", "custom web app Houston", "React developer Houston", "Next.js developer Houston", "full-stack developer Houston"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/custom-web-development-houston/`, siteName: "Jordan Christley", title: "Custom Web Development for Houston Businesses", description: "Custom web application development in Houston, TX — React, Next.js, full-stack apps built for performance and scale.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Custom Web Development for Houston Businesses" }] },
  twitter: { card: "summary_large_image", title: "Custom Web Development for Houston Businesses", description: "Custom web application development in Houston, TX — React, Next.js, full-stack apps built for performance and scale.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/custom-web-development-houston/` },
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
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Custom Web Development for Houston Businesses</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed"><p>Off-the-shelf software gets you 80% of the way there. Custom web development gets you the other 20% — the part that differentiates your business and scales as you grow.</p>
<h2 className="text-2xl font-semibold text-white pt-4">What I build</h2>
<p>High-performance web applications tailored to your specific business needs. Not templates. Real software, built with modern tooling, designed to last.</p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>Single-page applications</strong> — React and Next.js apps with server-side rendering and dynamic routing.</li>
<li><strong>Full-stack platforms</strong> — End-to-end solutions with authentication, databases, file storage, and real-time features.</li>
<li><strong>Internal tools &amp; dashboards</strong> — Custom admin panels and data visualization tools.</li>
<li><strong>API design &amp; integration</strong> — REST and GraphQL APIs that connect your systems.</li>
<li><strong>E-commerce &amp; booking systems</strong> — Custom checkout flows, inventory management, and scheduling.</li>
</ul>
<h2 className="text-2xl font-semibold text-white pt-4">The Houston tech advantage</h2>
<p>Houston businesses often need software specific to their industry — energy trading platforms, healthcare data portals, logistics trackers. Custom development means the software adapts to you, not the other way around.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Technology choices</h2>
<p>I work with a modern, proven stack: React, Next.js, TypeScript, Node.js, PostgreSQL, and Cloudflare infrastructure. Technology is never the point — the point is solving your problem.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Let&apos;s build something</h2>
<p>Whether you need a complete web application from scratch or want to modernize an existing system, I&apos;d love to hear about your project.</p></div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let's build your web application" description="Tell me about the web app you need." cta="Get in touch" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
