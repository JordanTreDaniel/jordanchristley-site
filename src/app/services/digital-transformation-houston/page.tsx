import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const siteUrl = "https://jordanchristley.com";
export const metadata: Metadata = {
  title: "Digital Transformation for Houston Businesses — Houston, TX | Jordan Christley",
  description: "Digital transformation services in Houston, TX — legacy modernization, system integration, and technology strategy.",
  keywords: ["digital transformation Houston", "legacy modernization Houston", "system integration Houston", "cloud migration Houston", "process automation Houston"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/digital-transformation-houston/`, siteName: "Jordan Christley", title: "Digital Transformation for Houston Businesses", description: "Digital transformation services in Houston, TX — legacy modernization, system integration, and technology strategy.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Digital Transformation for Houston Businesses" }] },
  twitter: { card: "summary_large_image", title: "Digital Transformation for Houston Businesses", description: "Digital transformation services in Houston, TX — legacy modernization, system integration, and technology strategy.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/digital-transformation-houston/` },
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
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Digital Transformation for Houston Businesses</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed"><p>Every Houston business is a technology business now. The question isn&apos;t whether you need digital transformation — it&apos;s whether you&apos;re leading it or being dragged into it.</p>
<h2 className="text-2xl font-semibold text-white pt-4">What digital transformation actually means</h2>
<p>It&apos;s not about buying new software — it&apos;s about fundamentally rethinking how your business operates with modern technology as the backbone.</p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>Legacy system modernization</strong> — Replace or upgrade aging systems without disrupting operations.</li>
<li><strong>System integration</strong> — Connect your CRM, ERP, analytics, and custom tools into a cohesive ecosystem.</li>
<li><strong>Cloud migration</strong> — Move from on-premise to cloud infrastructure with zero-downtime strategies.</li>
<li><strong>Process automation</strong> — Identify and automate the manual workflows that eat up your team&apos;s time.</li>
<li><strong>Data strategy</strong> — Structure your data so it becomes a strategic asset, not a liability.</li>
</ul>
<h2 className="text-2xl font-semibold text-white pt-4">The Houston business landscape</h2>
<p>Houston is home to some of the world&apos;s most important industries. The opportunity for digital transformation is massive — but it requires strategic, incremental modernization.</p>
<h2 className="text-2xl font-semibold text-white pt-4">My transformation methodology</h2>
<p>I map your current landscape, then design a phased roadmap. Each phase delivers tangible value within weeks, not months. Costs stay manageable, risk stays low, and results compound.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Let&apos;s modernize your business</h2>
<p>If your Houston business is running on systems that are holding you back, let&apos;s talk about a roadmap that makes sense.</p></div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let's transform your business" description="Tell me about your current tech stack and challenges." cta="Get in touch" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
