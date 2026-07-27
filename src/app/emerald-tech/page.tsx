import type { Metadata } from "next";
import Link from "next/link";
import { FiCpu, FiLayers, FiPenTool, FiShield, FiZap } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import LogoCloud from "@/components/LogoCloud";
import JourneyPage from "@/components/JourneyPage";

export const metadata: Metadata = {
  title: "Emerald Technology Consulting",
  description:
    "Emerald Technology Consulting partners with businesses to design and deliver modern web products, platforms, and digital experiences.",
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
