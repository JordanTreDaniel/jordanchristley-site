import type { Metadata } from "next";
import { FiCpu, FiLayers, FiPenTool, FiShield, FiZap } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import LogoCloud from "@/components/LogoCloud";
import JourneyPage from "@/components/JourneyPage";
import PortfolioCard from "@/components/PortfolioCard";

const siteUrl = "https://jordanchristley.com";

export const metadata: Metadata = {
  title: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
  description:
    "Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses. Product engineering, experience design, and platform hardening by Jordan Christley.",
  keywords: [
    "AI consultant Houston",
    "AI expert Houston",
    "AI training Houston",
    "AI business transformation Houston",
    "custom AI development Houston",
    "technology specialist Houston",
    "web development Houston",
    "Emerald Technology",
    "Houston digital transformation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/emerald-tech/`,
    siteName: "Jordan Christley",
    title: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
    description:
      "Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses.",
    images: [
      {
        url: `${siteUrl}/og-emerald.png`,
        width: 1200,
        height: 630,
        alt: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Technology Consulting — AI & Web Development in Houston, TX",
    description:
      "Emerald Technology Consulting delivers AI integration, custom web development, and digital transformation for Houston businesses.",
    images: [`${siteUrl}/og-emerald.png`],
    creator: "@jordanchristley",
  },
  alternates: {
    canonical: `${siteUrl}/emerald-tech/`,
  },
};

const services = [
  {
    title: "Product engineering",
    detail: "Launch new web platforms and MVPs with speed and precision.",
    icon: FiLayers,
  },
  {
    title: "Experience design",
    detail: "High-end UI systems with bold visual direction and polish.",
    icon: FiPenTool,
  },
  {
    title: "AI integration",
    detail: "Modern AI workflows that feel native to your product.",
    icon: FiCpu,
  },
  {
    title: "Platform hardening",
    detail: "Performance, observability, and security upgrades.",
    icon: FiShield,
  },
  {
    title: "Launch velocity",
    detail: "Tight execution cycles with momentum built in.",
    icon: FiZap,
  },
];

const engagement = [
  "Fractional product & engineering leadership",
  "Design + build in two-week delivery cycles",
  "Polished marketing and sales enablement sites",
  "Post-launch optimization and performance tuning",
];

export default function EmeraldTechPage() {
  return (
    <main className="relative min-h-screen bg-[#050a07] text-white">
      {/* JSON-LD: ProfessionalService structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Emerald Technology Consulting",
            description:
              "AI integration, custom web development, and digital transformation for Houston businesses.",
            url: `${siteUrl}/emerald-tech/`,
            image: `${siteUrl}/og-emerald.png`,
            founder: {
              "@type": "Person",
              name: "Jordan Christley",
              url: siteUrl,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Houston",
              addressRegion: "TX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.7604,
              longitude: -95.3698,
            },
            areaServed: [
              "Houston",
              "Midtown Houston",
              "Downtown Houston",
              "The Heights Houston",
              "Montrose Houston",
              "Galleria Houston",
              "Energy Corridor Houston",
              "Katy TX",
              "Sugar Land TX",
              "The Woodlands TX",
              "Pearland TX",
              "Missouri City TX",
            ],
            serviceType: [
              "AI Integration",
              "Custom Web Development",
              "Product Engineering",
              "Experience Design",
              "Platform Hardening",
              "Digital Transformation",
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Emerald Technology Consulting offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Emerald Technology Consulting offers AI integration, custom web development, product engineering, experience design, platform hardening, and digital transformation services for Houston businesses.",
                },
              },
              {
                "@type": "Question",
                name: "Where is Jordan Christley based?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jordan Christley is based in Houston, TX and serves businesses throughout the Houston metro area including Midtown, Downtown, The Heights, Montrose, Galleria, Energy Corridor, Katy, Sugar Land, The Woodlands, Pearland, and Missouri City.",
                },
              },
              {
                "@type": "Question",
                name: "Does Emerald Technology offer AI training for businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Emerald Technology Consulting provides AI integration and training services to help Houston businesses adopt and leverage artificial intelligence in their operations.",
                },
              },
            ],
          }),
        }}
      />

      <JourneyPage />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:py-24">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30"
              >
                <Icon className="h-6 w-6 text-emerald-300" />
                <h2 className="mt-4 text-lg font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-emerald-100/70">
                  {service.detail}
                </p>
              </div>
            );
          })}
        </section>

        <section>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
            Portfolio
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Recent Work</h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Immersive, high-craft projects that demonstrate our approach to
            design, development, and delivery.
          </p>

          <div className="mt-8">
            <PortfolioCard
              title="Paw Paradise Journey"
              description="Scroll-driven journey site for a pet care brand. Built with AI-generated video flythrough, interactive flash cards, and a polished handoff form — all in a single continuous scroll experience."
              imageSrc="/pawparadise-preview.png"
              liveUrl="https://pawparadise-journey.higgsfield.app/"
              tags={[
                "Next.js",
                "Framer Motion",
                "AI Video",
                "Scroll-Scrub",
                "Cloudflare Workers",
              ]}
            />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-300/15 bg-emerald-950/40 p-6">
            <h2 className="text-2xl font-semibold">
              Engagements built for momentum.
            </h2>
            <p className="text-sm text-emerald-100/70">
              Flexible sprints, focused outcomes, and a partner who stays close
              to the product.
            </p>
            <div className="grid gap-3 text-sm text-emerald-50/80">
              {engagement.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-300/10 bg-emerald-950/60 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
                Trusted stack
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Modern tools with proven delivery.
              </h2>
              <p className="mt-2 text-sm text-emerald-100/70">
                A curated toolkit for web platforms, product builds, and
                AI-powered experiences.
              </p>
            </div>
            <LogoCloud />
          </div>
        </section>

        <section id="contact">
          <ContactForm
            title="Let's find clarity together"
            description="Tell me about your business, what's working, and where you're stuck. I'll follow up with practical next steps."
            cta="Send a message"
            note="I'll respond within 24 hours."
            showCompany
            tone="emerald"
          />
        </section>
      </div>
    </main>
  );
}
