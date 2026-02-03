"use client";

import { useState } from "react";

type ContactFormProps = {
  title: string;
  description: string;
  cta: string;
  note?: string;
  showCompany?: boolean;
  tone?: "neutral" | "emerald";
};

const toneStyles = {
  neutral: {
    panel: "border-white/10 bg-white/5",
    input: "border-white/10 bg-white/5 focus:border-emerald-400/60",
    button: "bg-white text-black hover:bg-white/90",
    subtle: "text-white/60",
  },
  emerald: {
    panel: "border-emerald-300/20 bg-emerald-950/40",
    input: "border-emerald-300/20 bg-emerald-950/30 focus:border-emerald-300/60",
    button: "bg-emerald-300 text-emerald-950 hover:bg-emerald-200",
    subtle: "text-emerald-100/70",
  },
};

export default function ContactForm({
  title,
  description,
  cta,
  note,
  showCompany = false,
  tone = "neutral",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const styles = toneStyles[tone];

  return (
    <div
      className={`rounded-3xl border px-6 py-8 shadow-2xl shadow-black/30 ${styles.panel}`}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className={`text-sm ${styles.subtle}`}>{description}</p>
      </div>

      <form
        className="mt-6 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-3 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Name
            <input
              className={`w-full rounded-xl border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none ${styles.input}`}
              name="name"
              placeholder="Jordan"
              required
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input
              className={`w-full rounded-xl border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none ${styles.input}`}
              name="email"
              placeholder="you@company.com"
              required
              type="email"
            />
          </label>
        </div>

        {showCompany ? (
          <label className="grid gap-2 text-sm">
            Company
            <input
              className={`w-full rounded-xl border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none ${styles.input}`}
              name="company"
              placeholder="Emerald Labs"
              type="text"
            />
          </label>
        ) : null}

        <label className="grid gap-2 text-sm">
          Message
          <textarea
            className={`min-h-[140px] w-full resize-none rounded-xl border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none ${styles.input}`}
            name="message"
            placeholder="Tell me what you're building."
            required
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles.button}`}
            type="submit"
          >
            {cta}
          </button>
          <p
            className={`text-xs ${styles.subtle}`}
            aria-live="polite"
            role="status"
          >
            {submitted
              ? "Thanks! Your message is queued — I will wire up delivery soon."
              : note || "No email is configured yet. This form is ready to wire."}
          </p>
        </div>
      </form>
    </div>
  );
}
