import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  title: "About — Jordan Christley, AI Consultant & Software Engineer in Houston, TX",
  description: "Jordan Christley is a 10+ year self-taught software engineer and AI consultant in Houston, TX. Learn about his journey building Emerald Technology Consulting.",
  keywords: ["Jordan Christley Houston", "AI consultant Houston", "software engineer Houston", "self-taught developer Houston", "Emerald Technology Consulting", "Houston tech entrepreneur"],
  openGraph: { type: "profile", locale: "en_US", url: `${siteUrl}/about/`, siteName: "Jordan Christley", title: "About — Jordan Christley", description: "Jordan Christley is a 10+ year self-taught software engineer and AI consultant in Houston, TX.", images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Jordan Christley" }] },
  twitter: { card: "summary_large_image", title: "About — Jordan Christley", description: "Jordan Christley is a 10+ year self-taught software engineer and AI consultant in Houston, TX.", images: [`${siteUrl}/og-image.png`], creator: "@jordanchristley" },
  alternates: { canonical: `${siteUrl}/about/` },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050a07] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link href="/" className="text-sm text-emerald-400/80 hover:text-emerald-300">← Home</Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">Building the future, one line of code at a time.</h1>
        <div className="mt-10 space-y-6 text-base text-emerald-50/80 leading-relaxed">
          <p>I&apos;m Jordan Christley — a 10+ year self-taught software engineer based in Houston, TX. I run <Link href="/emerald-tech/" className="text-emerald-400 underline-offset-4 hover:underline">Emerald Technology Consulting</Link>, where I help businesses harness AI, ship better web products, and modernize their technology stack.</p>
          <h2 className="text-2xl font-semibold text-white pt-4">How I got here</h2>
          <p>My path into software wasn&apos;t conventional. I didn&apos;t come from a CS degree or a big-tech pipeline. I learned by building — stay up late nights dissecting open-source projects, deploying side projects that nobody asked for, and solving real problems for real people. That scrappy, hands-on approach became the foundation of everything I do.</p>
          <p>Over the past decade, I&apos;ve worked across the full stack: frontend interfaces that feel alive, backend systems that don&apos;t blink under load, and AI integrations that actually make products smarter — not just flashier.</p>
          <h2 className="text-2xl font-semibold text-white pt-4">What I believe</h2>
          <p>Technology should be a force multiplier, not a tax. Too many businesses in Houston are stuck with legacy systems, disconnected tools, and digital strategies that haven&apos;t kept pace with what&apos;s possible. I believe every company deserves access to the same caliber of engineering and AI capability that was once reserved for Silicon Valley.</p>
          <p>That&apos;s why I started Emerald Technology Consulting. Not to sell buzzwords, but to sit down with founders and operations leaders, understand where the friction is, and build the thing that actually moves the needle.</p>
          <h2 className="text-2xl font-semibold text-white pt-4">Houston, through and through</h2>
          <p>Houston is home. Not just because I live here, but because I see massive untapped potential in this city&apos;s business landscape. Houston has world-class energy, healthcare, and logistics industries — sectors that are ripe for AI and modern software transformation.</p>
          <p>From Midtown to the Energy Corridor, from The Heights to Sugar Land, I work with businesses across the Houston metro area.</p>
          <h2 className="text-2xl font-semibold text-white pt-4">What I offer</h2>
          <p>Through Emerald Technology, I provide a focused set of services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/services/ai-integration-houston/" className="text-emerald-400 hover:underline">AI Integration</Link> — Embed intelligence into your existing products and workflows.</li>
            <li><Link href="/services/custom-web-development-houston/" className="text-emerald-400 hover:underline">Custom Web Development</Link> — High-performance web apps built for your specific needs.</li>
            <li><Link href="/services/product-engineering-houston/" className="text-emerald-400 hover:underline">Product Engineering</Link> — From concept to launch, with speed and precision.</li>
            <li><Link href="/services/experience-design-houston/" className="text-emerald-400 hover:underline">Experience Design</Link> — Interfaces that feel alive and convert.</li>
            <li><Link href="/services/platform-hardening-houston/" className="text-emerald-400 hover:underline">Platform Hardening</Link> — Performance, security, and reliability at scale.</li>
            <li><Link href="/services/digital-transformation-houston/" className="text-emerald-400 hover:underline">Digital Transformation</Link> — Modernize legacy systems and unlock new capability.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white pt-4">Let&apos;s work together</h2>
          <p>If you&apos;re building something and need a technical partner who cares as much about your product as you do — I&apos;d love to hear from you. Check out <Link href="/emerald-tech/" className="text-emerald-400 hover:underline">Emerald Technology Consulting</Link> or <Link href="/services/" className="text-emerald-400 hover:underline">browse all services</Link> to see how I can help.</p>
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ContactForm title="Let&apos;s connect" description="Tell me about your project or business challenge." cta="Send a message" note="I respond within 24 hours." showCompany tone="emerald" />
      </section>
    </main>
  );
}
