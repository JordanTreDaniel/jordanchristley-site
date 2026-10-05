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
    panel: "border-emerald-300/15 bg-emerald-900/30 backdrop-blur-md",
    input:
      "border-emerald-300/15 bg-emerald-950/40 focus:border-emerald-300/50",
    button: "bg-emerald-300 text-emerald-950 hover:bg-emerald-200",
    subtle: "text-glass-highlight/60",
  },
  emerald: {
    panel: "border-emerald-300/20 bg-emerald-900/40 backdrop-blur-md",
    input:
      "border-emerald-300/20 bg-emerald-950/40 focus:border-emerald-300/60",
    button: "bg-emerald-300 text-emerald-950 hover:bg-emerald-200 shadow-lg shadow-emerald-300/25",
    subtle: "text-emerald-100/70",
  },
};

const inputClass =
  "w-full rounded-xl border px-4 py-3 text-glass-highlight placeholder:text-glass-highlight/40 focus:outline-none";

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
      className={`rounded-3xl border px-6 py-8 shadow-2xl shadow-emerald-950/40 ${styles.panel}`}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-glass-highlight">{title}</h2>
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
              className={`${inputClass} ${styles.input}`}
              name="name"              placeholder="Jordan"
              required
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input
              className={`${inputClass} ${styles.input}`}
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
              className={`${inputClass} ${styles.input}`}
              name="company"
              placeholder="Emerald Labs"
              type="text"
            />
          </label>
        ) : null}

        <label className="grid gap-2 text-sm">
          Message
          <textarea
            className={`min-h-[140px] w-full resize-none rounded-xl border px-4 py-3 text-glass-highlight placeholder:text-glass-highlight/40 focus:outline-none ${styles.input}`}
            name="message"            placeholder="Tell me what you're building."
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
          {(submitted || note) && (
            <p
              className={`text-xs ${styles.subtle}`}
              aria-live="polite"
              role="status"
            >
              {submitted ? "Thanks! I'll get back to you soon." : note}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
