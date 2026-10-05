import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioEntries } from "@/data/portfolio";

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  title: "Portfolio — Selected Work",
  description:
    "Live apps and selected work by Jordan Christley — MMSTR, RapClouds, Paw Paradise Journey, and more from Emerald Technology Consulting.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/portfolio`,
    siteName: "Jordan Christley",
    title: "Portfolio — Selected Work",
    description:
      "Live apps and selected work by Jordan Christley — MMSTR, RapClouds, Paw Paradise Journey, and more.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Selected Work",
    description:
      "Live apps and selected work by Jordan Christley — MMSTR, RapClouds, Paw Paradise Journey, and more.",
    creator: "@jordanchristley",
  },
  alternates: { canonical: `${siteUrl}/portfolio` },
  robots: { index: true, follow: true },
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-obsidian text-glass-highlight">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="text-sm text-emerald-400/80 hover:text-emerald-300"
          >
            ← Home
          </Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Portfolio
          </h1>
          <p className="mt-4 text-lg text-emerald-50/70">
            Live apps and selected work — products built with AI, modern web
            stacks, and a bias toward shipping things that actually run.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {portfolioEntries.map((entry) => (
            <PortfolioCard key={entry.title} {...entry} />
          ))}
        </div>

        <section className="mt-20 max-w-3xl">
          <ContactForm
            title="Like what you see?"
            description="Tell me about your project or business challenge — I'll follow up with practical next steps."
            cta="Start a conversation"
            note="I respond within 24 hours."
            showCompany
            tone="emerald"
          />
        </section>
      </div>
    </main>
  );
}
