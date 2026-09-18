import type { Metadata } from "next";
import {
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Resume | Jordan Christley",
  description:
    "Resume of Jordan Christley — Full-Stack AI Engineer & Independent Consultant specializing in LLM orchestration, autonomous agent design, and Cloudflare-native infrastructure.",
};

const LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jordanchristley",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/jordanchristley",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
      {children}
    </p>
  );
}

function SkillBadge({ item }: { item: string }) {
  return (
    <span className="inline-block rounded-full border border-emerald-300/15 bg-emerald-950/50 px-3 py-1 text-xs text-emerald-100/80">
      {item}
    </span>
  );
}

export default function ResumePage() {
  return (
    <main className="relative min-h-screen bg-[#050a07] text-white">
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
            <div className="flex flex-wrap gap-3">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-950/40 px-4 py-2 text-sm text-emerald-200/80 transition-colors hover:border-emerald-300/30 hover:text-emerald-300"
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                    <FiExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                );
              })}
            </div>
          </div>
        </header>

        {/* ── Summary ─────────────────────────────────────────── */}
        <section className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30">
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
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-5 shadow-lg shadow-emerald-900/30"
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
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-6 shadow-lg shadow-emerald-900/30"
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
                className="rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-5 shadow-lg shadow-emerald-900/30"
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
                className="flex flex-col gap-1 rounded-3xl border border-emerald-300/15 bg-emerald-950/30 p-5 shadow-lg shadow-emerald-900/30 sm:flex-row sm:items-baseline sm:justify-between"
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
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-950/40 px-4 py-2 text-sm text-emerald-100/80"
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
