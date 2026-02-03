import type { Metadata } from "next";
import Link from "next/link";
import { FiCpu, FiLayers, FiPenTool, FiShield, FiZap } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import LogoCloud from "@/components/LogoCloud";

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
    <main className="relative min-h-screen overflow-hidden bg-[#07140d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.35),_transparent_60%)]" />
      <div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-emerald-400/25 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[160px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:py-24">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-emerald-100/70">
          <Link className="transition hover:text-emerald-100" href="/">
            Jordan Christley
          </Link>
          <a className="transition hover:text-emerald-100" href="#contact">
            Get in touch
          </a>
        </nav>

        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
              Emerald Technology Consulting
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A premium technology studio for bold, modern businesses.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-emerald-50/70">
              Emerald delivers end-to-end digital execution: strategy, design,
              and engineering that makes your brand feel polished, powerful, and
              ready for scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200"
                href="#contact"
              >
                Start a project
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-emerald-200/20 px-6 py-3 text-sm font-semibold text-emerald-50/80 transition hover:border-emerald-200/40 hover:text-emerald-50"
                href="/"
              >
                Back to main site
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200/15 bg-emerald-950/40 p-6 shadow-2xl shadow-emerald-900/40">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
              Focus
            </p>
            <p className="mt-4 text-lg text-emerald-50">
              Designed to help teams ship confidently, look premium, and build
              trust faster.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-emerald-100/70">
              {[
                "Executive-level digital strategy",
                "Full-stack delivery with visual polish",
                "Modern web platforms and product builds",
                "High-touch collaboration and oversight",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-200/10 bg-emerald-950/60 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-emerald-200/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30"
              >
                <Icon className="h-6 w-6 text-emerald-200" />
                <h2 className="mt-4 text-lg font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-emerald-100/70">
                  {service.detail}
                </p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-200/15 bg-emerald-950/40 p-6">
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
                  className="rounded-2xl border border-emerald-200/10 bg-emerald-950/60 px-4 py-3"
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
            title="Ready to build with Emerald?"
            description="Tell me about your product, timeline, and goals. I will follow up with the next steps and a scope outline."
            cta="Request a consult"
            note="Email delivery is intentionally not wired yet."
            showCompany
            tone="emerald"
          />
        </section>
      </div>
    </main>
  );
}
