import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)]" />
      <div className="absolute -top-28 right-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:py-24">
        <nav className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
          <span>Jordan Christley</span>
          <span>Developer • Entrepreneur</span>
        </nav>

        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
              Hi, I&apos;m Jordan
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Developer &amp; entrepreneur building bold, modern web products.
          </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70">
              I design and ship sleek digital experiences, from landing pages to
              production-ready web apps. Clean, fast, and always a little
              unexpected.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                href="/emerald-tech"
              >
                Hire me
              </Link>
          <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                href="#contact"
              >
                Get in touch
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <span className="rounded-full border border-white/10 px-4 py-2">
                Product strategy
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Design systems
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Full-stack builds
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Creative direction
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Now building
              </p>
              <p className="mt-4 text-lg text-white">
                A boutique consulting studio for modern product teams.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Strategy, design, and engineering under one roof.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Fast ships",
                  detail: "Weeks, not quarters.",
                },
                {
                  title: "Design-led",
                  detail: "Visual polish baked in.",
                },
                {
                  title: "Founder energy",
                  detail: "Hands-on, all in.",
                },
                {
                  title: "Modern stack",
                  detail: "Always forward.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-sm text-white/80"
                >
                  <p className="text-base font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
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
            <div key={item.title} className="rounded-2xl border border-white/10 p-5">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-white/60">{item.detail}</p>
            </div>
          ))}
        </section>

        <section id="contact">
          <ContactForm
            title="Let’s build something clean and bold."
            description="Drop a note and I’ll follow up with next steps. This form is ready to connect once you add your preferred email delivery."
            cta="Send a note"
            note="No email address is exposed yet."
            tone="neutral"
          />
        </section>
        </div>
      </main>
  );
}
