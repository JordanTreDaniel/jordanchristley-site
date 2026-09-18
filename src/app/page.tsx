"use client";

import ContactForm from "@/components/ContactForm";
import LiquidMetalHero from "@/components/LiquidMetalHero";

export default function Home() {
  return (
    <main>
      <LiquidMetalHero
        badge="Hi, I'm Jordan"
        title="Developer &amp; entrepreneur building bold, modern web products."
        subtitle="I design and ship sleek digital experiences, from landing pages to production-ready web apps. Clean, fast, and always a little unexpected."
        primaryCtaLabel="Hire me"
        secondaryCtaLabel="Get in touch"
        onPrimaryCtaClick={() => window.location.href = "/emerald-tech"}
        onSecondaryCtaClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        features={[
          "Product strategy",
          "Design systems",
          "Full-stack builds",
          "Creative direction",
        ]}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 lg:pb-24">
        <section className="grid gap-6 pt-10 sm:grid-cols-3">
          {[
            {
              title: "Web products",
              detail: "Launch-ready MVPs, marketing sites, and internal tools.",
            },
            {
              title: "Creative tech",
              detail: "Immersive visuals and motion-forward experiences.",
            },
            {
              title: "Founder support",
              detail: "From pitch to product, I stay close to the vision.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-300/15 bg-emerald-950/30 p-5 shadow-lg shadow-emerald-900/30 backdrop-blur-md">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-white/60">{item.detail}</p>
            </div>
          ))}
        </section>

        <section id="contact">
          <ContactForm
            title="Let's build something clean and bold."
            description="Drop a note and I'll follow up with next steps. This form is ready to connect once you add your preferred email delivery."
            cta="Send a note"
            note="No email address is exposed yet."
            tone="neutral"
          />
        </section>
      </div>
    </main>
  );
}
