import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const siteUrl = "https://jordanchristley.com";
export const metadata: Metadata = {
  title: "AI Integration for Houston Businesses — Houston, TX | Jordan Christley",
  description: "AI integration services for Houston businesses — custom LLMs, intelligent workflows, and production-ready AI systems by Jordan Christley.",
  keywords: ["AI integration Houston", "AI consultant Houston", "LLM integration Houston", "custom AI development Houston", "AI automation Houston"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/ai-integration-houston/`, siteName: "Jordan Christley", title: "AI Integration for Houston Businesses", description: "AI integration services for Houston businesses — custom LLMs, intelligent workflows, and production-ready AI systems by Jordan Christley.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "AI Integration for Houston Businesses" }] },
  twitter: { card: "summary_large_image", title: "AI Integration for Houston Businesses", description: "AI integration services for Houston businesses — custom LLMs, intelligent workflows, and production-ready AI systems by Jordan Christley.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/ai-integration-houston/` },
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
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">AI Integration for Houston Businesses</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed"><p>Artificial intelligence isn&apos;t a future trend — it&apos;s a present-day competitive advantage. If your Houston business is still running on manual processes, disconnected data, or one-size-fits-all software, you&apos;re leaving efficiency and revenue on the table.</p>
<h2 className="text-2xl font-semibold text-white pt-4">What AI integration looks like</h2>
<p>AI integration means embedding intelligence directly into your existing products, workflows, and decision-making processes. It&apos;s not about replacing your team with robots — it&apos;s about giving them superpowers.</p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>Custom LLM-powered features</strong> — Smart search, document analysis, content generation, and conversational interfaces.</li>
<li><strong>Intelligent automation</strong> — Workflows that learn from your data, route tasks automatically, and reduce repetitive manual work.</li>
<li><strong>Predictive analytics</strong> — Data pipelines that surface insights before you know to look for them.</li>
<li><strong>AI-powered search &amp; recommendations</strong> — Internal knowledge bases that actually work, product recommendations that convert.</li>
<li><strong>Computer vision &amp; document processing</strong> — Automated extraction from invoices, contracts, medical records.</li>
</ul>
<h2 className="text-2xl font-semibold text-white pt-4">Why Houston businesses need AI now</h2>
<p>Houston&apos;s economy — energy, healthcare, logistics, and professional services — is uniquely positioned for AI transformation. The data exists. The processes are documented. The bottleneck is implementation.</p>
<p>Whether you&apos;re a healthcare provider in the Texas Medical Center, an energy company in the Energy Corridor, or a mid-size business in the Galleria area — AI integration can cut costs, reduce errors, and free your team.</p>
<h2 className="text-2xl font-semibold text-white pt-4">My approach</h2>
<p>I don&apos;t sell AI for the sake of AI. Every engagement starts with understanding your specific business problem. Then I evaluate whether AI is the right solution — and if it is, I build it to production standards. No black-box APIs you can&apos;t debug, no vendor lock-in, no half-baked prototypes.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Ready to bring AI into your Houston business?</h2>
<p>Let&apos;s start with a conversation about where AI can make the biggest impact in your operations.</p></div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let's talk about AI for your business" description="Tell me about your business challenge." cta="Get in touch" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
