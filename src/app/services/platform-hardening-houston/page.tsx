import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const siteUrl = "https://jordanchristley.com";
export const metadata: Metadata = {
  title: "Platform Hardening for Houston Businesses — Houston, TX | Jordan Christley",
  description: "Platform hardening services in Houston, TX — performance optimization, security hardening, and observability for production systems.",
  keywords: ["platform hardening Houston", "performance optimization Houston", "security audit Houston", "web application security Houston", "DevOps Houston TX"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/platform-hardening-houston/`, siteName: "Jordan Christley", title: "Platform Hardening for Houston Businesses", description: "Platform hardening services in Houston, TX — performance optimization, security hardening, and observability for production systems.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Platform Hardening for Houston Businesses" }] },
  twitter: { card: "summary_large_image", title: "Platform Hardening for Houston Businesses", description: "Platform hardening services in Houston, TX — performance optimization, security hardening, and observability for production systems.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/platform-hardening-houston/` },
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
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Platform Hardening for Houston Businesses</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed"><p>You built something that works. Now you need it to work under pressure — fast, secure, and reliable at scale.</p>
<h2 className="text-2xl font-semibold text-white pt-4">What platform hardening covers</h2>
<p>Most Houston businesses don&apos;t have a security breach or a performance crisis — until they do. Platform hardening is preventive medicine for your digital infrastructure.</p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>Performance optimization</strong> — Load time reduction, caching strategies, database query optimization, and CDN configuration.</li>
<li><strong>Security hardening</strong> — Vulnerability assessments, authentication hardening, and compliance alignment for Houston-regulated industries.</li>
<li><strong>Observability setup</strong> — Logging, monitoring, alerting, and error tracking so you know about problems before your users do.</li>
<li><strong>Infrastructure review</strong> — Architecture audits, cost optimization, and scaling strategies for cloud infrastructure.</li>
<li><strong>Reliability engineering</strong> — Backup strategies, disaster recovery plans, and failover configurations.</li>
</ul>
<h2 className="text-2xl font-semibold text-white pt-4">Why Houston businesses need this</h2>
<p>Houston&apos;s key industries — energy, healthcare, and financial services — handle sensitive data under strict regulatory requirements. HIPAA, SOC 2, NERC CIP — these aren&apos;t optional.</p>
<h2 className="text-2xl font-semibold text-white pt-4">The hardening process</h2>
<p>I start with a comprehensive audit — performance benchmarks, security scan, infrastructure review. Then a prioritized remediation plan. Each sprint delivers measurable improvement.</p>
<h2 className="text-2xl font-semibold text-white pt-4">Let&apos;s strengthen your platform</h2>
<p>If your platform is showing its age, let&apos;s talk. I&apos;ll give you an honest assessment and a clear plan.</p></div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let's harden your platform" description="Tell me about your platform." cta="Get in touch" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
