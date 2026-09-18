import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { FiCpu, FiCode, FiLayers, FiPenTool, FiShield, FiZap } from "react-icons/fi";

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  title: "Services — AI Integration, Web Development & Digital Transformation in Houston, TX",
  description: "Full-spectrum technology services for Houston businesses: AI integration, custom web development, product engineering, experience design, platform hardening, and digital transformation.",
  keywords: ["AI services Houston", "web development services Houston", "digital transformation Houston", "product engineering Houston", "experience design Houston", "platform hardening Houston", "custom software Houston"],
  openGraph: { type: "website", locale: "en_US", url: `${siteUrl}/services/`, siteName: "Jordan Christley", title: "Services — Houston, TX", description: "Full-spectrum technology services for Houston businesses.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Services Houston TX" }] },
  twitter: { card: "summary_large_image", title: "Services — Houston, TX", description: "Full-spectrum technology services for Houston businesses.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/services/` },
  robots: { index: true, follow: true },
};

const services = [
  { title: "AI Integration", slug: "ai-integration-houston", description: "Embed artificial intelligence into your existing products and workflows.", icon: FiCpu, highlights: ["Custom AI models", "LLM integration", "Workflow automation", "AI strategy"] },
  { title: "Custom Web Development", slug: "custom-web-development-houston", description: "High-performance web applications built from scratch for your specific business needs.", icon: FiCode, highlights: ["React & Next.js", "Full-stack apps", "API design", "Performance optimization"] },
  { title: "Product Engineering", slug: "product-engineering-houston", description: "From MVP to production — complete product builds with technical leadership and sprint-based delivery.", icon: FiLayers, highlights: ["MVP development", "Sprint delivery", "Technical leadership", "Launch support"] },
  { title: "Experience Design", slug: "experience-design-houston", description: "Interfaces that don&apos;t just work — they feel alive. Bold visual direction and conversion-focused design.", icon: FiPenTool, highlights: ["UI/UX design", "Design systems", "Motion design", "Conversion optimization"] },
  { title: "Platform Hardening", slug: "platform-hardening-houston", description: "Performance tuning, security hardening, and observability for platforms that need to scale reliably.", icon: FiShield, highlights: ["Security audit", "Performance tuning", "Monitoring", "Infrastructure"] },
  { title: "Digital Transformation", slug: "digital-transformation-houston", description: "Modernize legacy systems, connect disconnected tools, and unlock new business capability.", icon: FiZap, highlights: ["Legacy modernization", "System integration", "Cloud migration", "Process automation"] },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050a07] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <Link href="/" className="text-sm text-emerald-400/80 hover:text-emerald-300">← Home</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Services</h1>
          <p className="mt-4 text-lg text-emerald-50/70">Technology services for Houston businesses — from AI integration to full product builds.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="group rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30 transition hover:border-emerald-300/30 hover:bg-emerald-950/50">
                <Icon className="h-6 w-6 text-emerald-300" />
                <h2 className="mt-4 text-lg font-semibold group-hover:text-emerald-200">{s.title}</h2>
                <p className="mt-2 text-sm text-emerald-100/70">{s.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span key={h} className="rounded-full border border-emerald-300/10 bg-emerald-950/60 px-3 py-1 text-xs text-emerald-200/80">{h}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
        <section className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-semibold">How I work</h2>
          <div className="mt-6 space-y-4 text-sm text-emerald-50/80">
            {[{ t: "Discovery call", d: "We talk through your business, your challenges, and what success looks like." }, { t: "Scoped proposal", d: "Clear scope with milestones, timelines, and pricing." }, { t: "Sprint delivery", d: "Two-week cycles with working demos at the end of each sprint." }, { t: "Launch & optimize", d: "Ship with confidence, then iterate based on real usage data." }].map((step) => (
              <div key={step.t} className="rounded-2xl border border-emerald-300/10 bg-emerald-950/60 px-5 py-4">
                <p className="font-semibold text-white">{step.t}</p>
                <p className="mt-1">{step.d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-20">
          <ContactForm title="Ready to get started?" description="Tell me about your project." cta="Start a conversation" note="I respond within 24 hours." showCompany tone="emerald" />
        </section>
      </div>
    </main>
  );
}
