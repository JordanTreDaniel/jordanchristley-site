import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const siteUrl = "https://jordanchristley.com";
export const metadata: Metadata = {
  title: "Experience Design for Houston Businesses — Houston, TX | Jordan Christley",
  description: "Experience design and UI/UX services in Houston, TX — interfaces that convert, motion that delights, and design systems that scale.",
  keywords: ["experience design Houston", "UI UX designer Houston", "web design Houston TX", "UI design Houston", "conversion design Houston"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/experience-design-houston/`, siteName: "Jordan Christley", title: "Experience Design for Houston Businesses", description: "Experience design and UI/UX services in Houston, TX — interfaces that convert, motion that delights, and design systems that scale.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Experience Design for Houston Businesses" }] },
  twitter: { card: "summary_large_image", title: "Experience Design for Houston Businesses", description: "Experience design and UI/UX services in Houston, TX — interfaces that convert, motion that delights, and design systems that scale.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/experience-design-houston/` },
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
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Experience Design for Houston Businesses</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed"><p>Your product&apos;s interface is your brand made tangible. Every pixel, every animation, every interaction either builds trust or erodes it.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Beyond pretty screens</h2>
<p>Experience design isn&apos;t about making things look nice — it&apos;s about making things work beautifully.</p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>UI design</strong> — Bold, polished interfaces that stand out and convert.</li>
<li><strong>Design systems</strong> — Reusable component libraries that keep your product consistent as it scales.</li>
<li><strong>Motion &amp; interaction design</strong> — Micro-interactions, scroll-driven animations, and transitions that make your product feel alive.</li>
<li><strong>Conversion optimization</strong> — Layout, hierarchy, and flow design that guides users toward the action you want.</li>
<li><strong>User research &amp; testing</strong> — Practical usability studies that surface the problems analytics can&apos;t see.</li>
</ul>
<h2 className="text-2xl font-semibold text-white pt-4">Design for Houston&apos;s market</h2>
<p>Houston businesses compete in a market where digital first impressions matter. From healthcare platforms in the Medical Center to professional services sites in the Galleria — generic design doesn&apos;t cut it.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Design + engineering, one partner</h2>
<p>When the same person designs and builds your interface, there&apos;s no lossy handoff and no gap between what was designed and what ships.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Let&apos;s create something remarkable</h2>
<p>If your product needs a better interface — or you&apos;re starting from scratch — I&apos;d love to hear about it.</p></div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let's design your next product" description="Tell me about your product or project." cta="Get in touch" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
