"use client";

import { useState, useRef, useEffect } from "react";
import {
  FiGithub,
  FiGlobe,
  FiExternalLink,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

const LINKS = [
  {
    name: "JordanTreDaniel",
    url: "https://github.com/JordanTreDaniel",
    icon: FiGithub,
  },
  {
    name: "jordanchristley.com",
    url: "https://jordanchristley.com",
    icon: FiGlobe,
  },
];

const SKILL_GROUPS = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "Rust", "JavaScript", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Playwright"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "Python APIs"],
  },
  {
    group: "AI / ML",
    items: [
      "RAG Pipelines",
      "LLM Orchestration (Claude, OpenAI)",
      "Vector Databases",
      "Embeddings",
      "AI Agent Design",
      "Prompt Engineering",
    ],
  },
  {
    group: "Infrastructure",
    items: [
      "Cloudflare Workers / D1 / R2 / KV",
      "AWS (Lambda, S3, RDS, CloudFormation)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GCP",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "SQLite / D1", "Redis", "Supabase", "MongoDB"],
  },
  {
    group: "Automation",
    items: [
      "Playwright",
      "Puppeteer",
      "FFmpeg",
      "Email Automation",
      "Notion API",
    ],
  },
  {
    group: "Domains",
    items: [
      "Real Estate Tech",
      "CRM",
      "SaaS",
      "Billing / Stripe",
      "Meeting Transcription & Task Extraction",
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Emerald Technology",
    role: "Independent Consultant",
    start: "2022",
    end: "Present",
    bullets: [
      "Architected and shipped AI-powered systems combining LLM orchestration, autonomous agent design, and Cloudflare-native infrastructure for end-to-end business tooling.",
      "Built multi-agent workflow engines with real-time collaboration, review dashboards, and automated task extraction from meeting transcripts.",
      "Developed full-stack real estate technology platforms with deal tracking, CRM integration, and automated outreach pipelines.",
      "Designed RAG pipelines with vector databases and embeddings for semantic search across business knowledge bases.",
      "Delivered Cloudflare Workers / D1 / R2 / KV serverless stacks with sub-50ms cold starts and zero-ops maintenance.",
    ],
  },
  {
    company: "Booster",
    role: "Software Engineer",
    start: "May 2022",
    end: "2023",
    bullets: [
      "Built and maintained a fundraising platform connecting nonprofits with corporate sponsors, processing donations and managing campaign workflows.",
      "Developed backend services with NestJS and frontend interfaces with React, ensuring type-safe end-to-end data flow.",
      "Integrated LLM-powered features for content generation and donor engagement analysis.",
      "Collaborated with product and design to ship user-facing features on aggressive two-week sprint cycles.",
    ],
  },
  {
    company: "Bayer Crop Science",
    role: "Full Stack Developer",
    start: "Dec 2020",
    end: "2022",
    bullets: [
      "Developed digital agriculture tools serving farmers and agronomists with real-time field data visualization and decision support.",
      "Built React and Node.js applications on AWS (Lambda, S3, RDS, CloudFormation) handling high-throughput geospatial data.",
      "Implemented automated data pipelines for satellite imagery processing and yield prediction models.",
      "Led frontend architecture decisions and mentored junior developers on React best practices and testing strategies.",
    ],
  },
  {
    company: "EOG Resources",
    role: "Frontend Developer",
    start: "Apr 2019",
    end: "Oct 2020",
    bullets: [
      "Built React applications for oil and gas exploration teams, visualizing well data, production metrics, and geological surveys.",
      "Developed automated testing bots with Playwright and Puppeteer to regression-test internal dashboards.",
      "Mentored junior developers through code reviews, pair programming, and internal tech talks on modern frontend practices.",
    ],
  },
  {
    company: "Flatiron School",
    role: "Technical Coach",
    start: "Aug 2018",
    end: "Oct 2020",
    bullets: [
      "Coached cohorts of 15–20 students through full-stack web development curriculum covering JavaScript, React, Ruby on Rails, and SQL.",
      "Led weekly code reviews and debugging sessions, helping students build production-quality portfolio projects.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Resource Realty / 500 Deals",
    description:
      "Full-stack real estate technology platform with deal tracking, CRM, automated outreach pipelines, and AI-powered market analysis.",
  },
  {
    name: "Hermes Agent",
    description:
      "Autonomous AI agent infrastructure with multi-agent orchestration, tool use, and persistent memory across collaborative workflows.",
  },
  {
    name: "Review Dashboard",
    description:
      "Real-time review system for AI-generated outputs — envelopes, verdicts, and automated application of approved changes.",
  },
  {
    name: "Meeting-to-Tasks",
    description:
      "Pipeline that ingests meeting transcripts, extracts actionable items with context tagging, and batch-creates structured tasks in Notion.",
  },
  {
    name: "Outreach Automation",
    description:
      "Automated email and CRM outreach system with lead discovery, contact enrichment, and personalized campaign sequencing.",
  },
];

const EDUCATION = [
  {
    school: "Coder Camps",
    degree: "MEAN Stack Certification",
    start: "2016",
    end: "2017",
  },
  {
    school: "Houston Community College",
    degree: "Associate in Computer Science",
    start: "2014",
    end: "2016",
  },
];

const CERTIFICATIONS = [
  { name: "Learning How to Learn", issuer: "Coursera" },
];

const RESUME_MD = `# Jordan Christley

**Full-Stack AI Engineer & Independent Consultant**

[GitHub](https://github.com/JordanTreDaniel) · [jordanchristley.com](https://jordanchristley.com)

---

## Summary

AI-native full-stack engineer building production systems that combine LLM orchestration, autonomous agent design, and Cloudflare-native infrastructure into end-to-end business tools. Specializes in RAG pipelines, multi-agent workflow orchestration, and browser automation.

---

## Technical Skills

**Languages:** Python, TypeScript, Rust, JavaScript, SQL

**Frontend:** React, Next.js, Redux, Tailwind CSS, Playwright

**Backend:** Node.js, NestJS, Express, FastAPI, Python APIs

**AI / ML:** RAG Pipelines, LLM Orchestration (Claude, OpenAI), Vector Databases, Embeddings, AI Agent Design, Prompt Engineering

**Infrastructure:** Cloudflare Workers / D1 / R2 / KV, AWS (Lambda, S3, RDS, CloudFormation), Docker, Kubernetes, Terraform, GCP

**Databases:** PostgreSQL, SQLite / D1, Redis, Supabase, MongoDB

**Automation:** Playwright, Puppeteer, FFmpeg, Email Automation, Notion API

**Domains:** Real Estate Tech, CRM, SaaS, Billing / Stripe, Meeting Transcription & Task Extraction

---

## Experience

### Independent Consultant — Emerald Technology (2022 – Present)

- Architected and shipped AI-powered systems combining LLM orchestration, autonomous agent design, and Cloudflare-native infrastructure for end-to-end business tooling.
- Built multi-agent workflow engines with real-time collaboration, review dashboards, and automated task extraction from meeting transcripts.
- Developed full-stack real estate technology platforms with deal tracking, CRM integration, and automated outreach pipelines.
- Designed RAG pipelines with vector databases and embeddings for semantic search across business knowledge bases.
- Delivered Cloudflare Workers / D1 / R2 / KV serverless stacks with sub-50ms cold starts and zero-ops maintenance.

### Software Engineer — Booster (May 2022 – 2023)

- Built and maintained a fundraising platform connecting nonprofits with corporate sponsors, processing donations and managing campaign workflows.
- Developed backend services with NestJS and frontend interfaces with React, ensuring type-safe end-to-end data flow.
- Integrated LLM-powered features for content generation and donor engagement analysis.
- Collaborated with product and design to ship user-facing features on aggressive two-week sprint cycles.

### Full Stack Developer — Bayer Crop Science (Dec 2020 – 2022)

- Developed digital agriculture tools serving farmers and agronomists with real-time field data visualization and decision support.
- Built React and Node.js applications on AWS (Lambda, S3, RDS, CloudFormation) handling high-throughput geospatial data.
- Implemented automated data pipelines for satellite imagery processing and yield prediction models.
- Led frontend architecture decisions and mentored junior developers on React best practices and testing strategies.

### Frontend Developer — EOG Resources (Apr 2019 – Oct 2020)

- Built React applications for oil and gas exploration teams, visualizing well data, production metrics, and geological surveys.
- Developed automated testing bots with Playwright and Puppeteer to regression-test internal dashboards.
- Mentored junior developers through code reviews, pair programming, and internal tech talks on modern frontend practices.

### Technical Coach — Flatiron School (Aug 2018 – Oct 2020)

- Coached cohorts of 15–20 students through full-stack web development curriculum covering JavaScript, React, Ruby on Rails, and SQL.
- Led weekly code reviews and debugging sessions, helping students build production-quality portfolio projects.

---

## Key Projects

- **Resource Realty / 500 Deals** — Full-stack real estate technology platform with deal tracking, CRM, automated outreach pipelines, and AI-powered market analysis.
- **Hermes Agent** — Autonomous AI agent infrastructure with multi-agent orchestration, tool use, and persistent memory across collaborative workflows.
- **Review Dashboard** — Real-time review system for AI-generated outputs — envelopes, verdicts, and automated application of approved changes.
- **Meeting-to-Tasks** — Pipeline that ingests meeting transcripts, extracts actionable items with context tagging, and batch-creates structured tasks in Notion.
- **Outreach Automation** — Automated email and CRM outreach system with lead discovery, contact enrichment, and personalized campaign sequencing.

---

## Education

- **Coder Camps** — MEAN Stack Certification (2016 – 2017)
- **Houston Community College** — Associate in Computer Science (2014 – 2016)

---

## Certifications

- Learning How to Learn — Coursera
`;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
      {children}
    </p>
  );
}

function SkillBadge({ item }: { item: string }) {
  return (
    <span className="inline-block rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1 text-xs text-emerald-100/80 shadow-sm shadow-emerald-900/20">
      {item}
    </span>
  );
}

export default function ResumePage() {
  const [exportOpen, setExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function copyMarkdown() {
    await navigator.clipboard.writeText(RESUME_MD);
    setCopied(true);
    setExportOpen(false);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="relative min-h-screen bg-[#050a07] text-white pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:py-24">
        {/* ── Header ──────────────────────────────────────────── */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Jordan Christley
              </h1>
              <p className="mt-2 text-lg text-emerald-300">
                Full-Stack AI Engineer &amp; Independent Consultant
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md px-4 py-2 text-sm text-emerald-200/80 shadow-sm shadow-emerald-900/20 transition-all hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-300 hover:shadow-md hover:shadow-emerald-900/30"
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                    <FiExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                );
              })}

              {/* Export Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setExportOpen(!exportOpen)}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md px-4 py-2 text-sm text-emerald-200/80 shadow-sm shadow-emerald-900/20 transition-all hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-300 hover:shadow-md hover:shadow-emerald-900/30"
                >
                  Export
                  <FiChevronDown
                    className={`h-4 w-4 transition-transform ${exportOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {exportOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-emerald-300/15 bg-emerald-950/40 backdrop-blur-md shadow-lg shadow-emerald-900/30">
                    <a
                      href="/jordan-christley-resume.pdf"
                      download
                      onClick={() => setExportOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-emerald-100/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      Download PDF
                    </a>
                    <button
                      onClick={copyMarkdown}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-emerald-100/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {copied ? (
                        <>
                          <FiCheck className="h-4 w-4 text-emerald-400" />
                          Copied!
                        </>
                      ) : (
                        "Copy Markdown"
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ── Summary ─────────────────────────────────────────── */}
        <section className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30 backdrop-blur-md">
          <SectionLabel>Summary</SectionLabel>
          <p className="mt-4 text-sm leading-relaxed text-emerald-50/80">
            AI-native full-stack engineer building production systems that
            combine LLM orchestration, autonomous agent design, and
            Cloudflare-native infrastructure into end-to-end business tools.
            Specializes in RAG pipelines, multi-agent workflow orchestration,
            and browser automation.
          </p>
        </section>

        {/* ── Technical Skills ─────────────────────────────────── */}
        <section>
          <SectionLabel>Technical Skills</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.group}
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-5 shadow-lg shadow-emerald-900/30 backdrop-blur-md"
              >
                <h3 className="text-sm font-semibold text-emerald-300">
                  {group.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillBadge key={item} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section>
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-6 flex flex-col gap-8">
            {EXPERIENCE.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30 backdrop-blur-md"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-emerald-300/80">{job.company}</p>
                  </div>
                  <p className="text-xs text-emerald-200/50">
                    {job.start} — {job.end}
                  </p>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-sm leading-relaxed text-emerald-50/75 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/50"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Projects ─────────────────────────────────────── */}
        <section>
          <SectionLabel>Key Projects</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-5 shadow-lg shadow-emerald-900/30 backdrop-blur-md"
              >
                <h3 className="text-sm font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-emerald-100/60">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ────────────────────────────────────────── */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="mt-6 flex flex-col gap-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col gap-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg shadow-black/20 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {edu.school}
                  </h3>
                  <p className="text-xs text-emerald-300/70">{edu.degree}</p>
                </div>
                <p className="text-xs text-emerald-200/50">
                  {edu.start} — {edu.end}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ───────────────────────────────────── */}
        <section>
          <SectionLabel>Certifications</SectionLabel>
          <div className="mt-6 flex flex-wrap gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md px-4 py-2 text-sm text-emerald-100/80 shadow-sm shadow-emerald-900/20"
              >
                <span className="font-medium text-emerald-300">
                  {cert.name}
                </span>
                <span className="text-emerald-200/40">·</span>
                <span className="text-emerald-200/50">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
