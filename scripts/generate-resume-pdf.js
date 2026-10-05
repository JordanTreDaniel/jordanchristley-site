#!/usr/bin/env node
/**
 * generate-resume-pdf.js
 *
 * Renders Jordan's resume as a print-optimized PDF using Playwright.
 * Usage: node scripts/generate-resume-pdf.js
 * Output: public/jordan-christley-resume.pdf
 */

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

// ── Resume Data ─────────────────────────────────────────────────────────────
// Sourced from src/app/resume/page.tsx — keep in sync.

const CONTACT = {
  name: "Jordan Christley",
  title: "Full-Stack AI Engineer & Independent Consultant",
  email: "christleyjordan@protonmail.com",
  phone: "832-875-6634",
  linkedin: "linkedin.com/in/jordan-christley-787729120",
  github: "github.com/JordanTreDaniel",
  website: "jordanchristley.com",
};

const SUMMARY = `AI-native full-stack engineer building production systems that combine LLM orchestration, autonomous agent design, and Cloudflare-native infrastructure into end-to-end business tools. Specializes in RAG pipelines, multi-agent workflow orchestration, and browser automation. Currently running an independent consulting operation delivering AI-powered solutions across real estate tech, CRM, and business automation.`;

const SKILL_GROUPS = [
  { group: "Languages", items: ["Python", "TypeScript", "Rust", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Redux", "Tailwind CSS", "Playwright"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "FastAPI", "Python APIs"] },
  { group: "AI / ML", items: ["RAG Pipelines", "LLM Orchestration (Claude, OpenAI)", "Vector Databases", "Embeddings", "AI Agent Design", "Prompt Engineering"] },
  { group: "Infrastructure", items: ["Cloudflare Workers / D1 / R2 / KV", "AWS (Lambda, S3, RDS, CloudFormation)", "Docker", "Kubernetes", "Terraform", "GCP"] },
  { group: "Databases", items: ["PostgreSQL", "SQLite / D1", "Redis", "Supabase", "MongoDB"] },
  { group: "Automation", items: ["Playwright", "Puppeteer", "FFmpeg", "Email Automation (Gmail/IMAP)", "Notion API"] },
  { group: "Domains", items: ["Real Estate Tech", "CRM", "SaaS", "Billing / Stripe", "Meeting Transcription & Task Extraction"] },
];

const EXPERIENCE = [
  {
    company: "Emerald Technology",
    role: "Independent Consultant",
    start: "2022",
    end: "Present",
    location: "Houston, TX",
    bullets: [
      "Architect and deploy AI-native business automation systems combining LLM orchestration, web scraping, email pipelines, and payment processing",
      "Build autonomous agent infrastructure on GCP with multi-tool orchestration, browser automation, and wave-based sub-agent dispatch",
      "Develop production real estate tech: deal pipelines with AI-powered candidate scoring, automated email ingestion, investor matching, and skip-tracing",
      "Implement end-to-end meeting-to-task pipelines — transcription, AI extraction, Notion CRM ingestion, and adversarial review workflows",
      "Design Cloudflare-native infrastructure (Workers, D1, R2, KV) with Terraform infrastructure-as-code",
      "Build Stripe-integrated invoicing, billing, and subscription management systems",
      "Create AI-generated websites with scroll-driven 3D, video generation, and social media integration",
    ],
  },
  {
    company: "Booster",
    role: "Software Engineer",
    start: "May 2022",
    end: "2023",
    location: "South Houston, TX (Remote)",
    bullets: [
      "Built and maintained fundraising platform web applications using Node.js, NestJS, React, and Redux",
      "Improved conversion rates and queue job execution times across the platform",
      "Integrated LLMs with vector storage for intelligent features",
      "Worked with SQL databases, SSH, AWS, and Docker in production environments",
    ],
  },
  {
    company: "Bayer Crop Science",
    role: "Full Stack Developer",
    start: "Dec 2020",
    end: "2022",
    location: "Houston, TX",
    bullets: [
      "Full stack development on digital agriculture tools using React, Node.js, and AWS",
      "Managed React applications with Material UI, Recoil, and Redux on the frontend",
      "Built and maintained Node.js APIs with PostgreSQL databases",
      "Deployed and managed AWS resources including CloudFormation, S3, and RDS",
      "Participated in hackathons, contributing ideas and prototypes",
    ],
  },
  {
    company: "EOG Resources",
    role: "Frontend Developer",
    start: "Apr 2019",
    end: "Oct 2020",
    location: "Houston, TX",
    bullets: [
      "Built and maintained key React web applications for a 1,000+ employee oil & gas company",
      "Designed and implemented UI components with React and Material UI",
      "Led development of automated testing bots using Node.js, Python Flask, and Puppeteer — saving hundreds of hours of manual QA",
      "Reviewed and created hundreds of pull requests in a collaborative development process",
      "Mentored junior developers on best practices and code quality",
    ],
  },
  {
    company: "Flatiron School",
    role: "Technical Coach",
    start: "Aug 2018",
    end: "Oct 2020",
    location: "Houston, TX",
    bullets: [
      "Taught coding fundamentals and web technologies (JavaScript, Ruby, Python, React, Redux, Rails) to career-changing students",
      "Coached students through complex learning challenges, breaking down abstract concepts into clear explanations",
      "Adapted teaching approaches based on individual learning patterns and emotional cues",
    ],
  },
];

const PROJECTS = [
  { name: "Resource Realty / 500 Deals", description: "Real estate deal pipeline with AI-powered candidate scoring, email ingestion, investor matching, and automated deal verification. Cloudflare Workers + D1." },
  { name: "Hermes Agent", description: "Autonomous agent VM on GCP with SSH access, multi-tool orchestration, and wave-based sub-agent dispatch patterns." },
  { name: "Review Dashboard", description: "Meeting-to-tasks pipeline with adversarial review and envelope system. Transcription → AI extraction → Notion ingestion → human review → automated actions." },
  { name: "Meeting-to-Tasks", description: "End-to-end pipeline: audio transcription → context-tagging → task extraction → master JSON draft → review gate → batch Notion creation." },
  { name: "Outreach Automation", description: "Apollo scraping, Gmail draft creation, and investor/recruiter outreach pipeline with automated contact research." },
];

const EDUCATION = [
  { school: "Coder Camps", degree: "MEAN Stack Certification", start: "2016", end: "2017" },
  { school: "Houston Community College", degree: "Associate in Computer Science", start: "2014", end: "2016" },
];

const CERTIFICATIONS = [{ name: "Learning How to Learn", issuer: "Coursera" }];

// ── HTML Template ───────────────────────────────────────────────────────────

function buildHTML() {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const contactParts = [];
  if (CONTACT.email) contactParts.push(`<a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a>`);
  if (CONTACT.phone) contactParts.push(`<span>${esc(CONTACT.phone)}</span>`);
  if (CONTACT.linkedin) contactParts.push(`<a href="https://${esc(CONTACT.linkedin)}">${esc(CONTACT.linkedin)}</a>`);
  if (CONTACT.github) contactParts.push(`<a href="https://${esc(CONTACT.github)}">${esc(CONTACT.github)}</a>`);
  if (CONTACT.website) contactParts.push(`<a href="https://${esc(CONTACT.website)}">${esc(CONTACT.website)}</a>`);

  const skillsHTML = SKILL_GROUPS.map(
    (g) => `<li><strong>${esc(g.group)}:</strong> ${g.items.map(esc).join(", ")}</li>`
  ).join("\n      ");

  const experienceHTML = EXPERIENCE.map(
    (job) => `
    <div class="entry">
      <div class="l1"><span class="org">${esc(job.company)}</span><span class="date">${esc(job.start)} — ${esc(job.end)}</span></div>
      <div class="l2"><span>${esc(job.role)}${job.location ? " — " + esc(job.location) : ""}</span></div>
      <ul>
        ${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("\n        ")}
      </ul>
    </div>`
  ).join("\n");

  const projectsHTML = PROJECTS.map(
    (p) => `
    <div class="entry">
      <div class="l1"><span class="org">${esc(p.name)}</span></div>
      <p class="desc">${esc(p.description)}</p>
    </div>`
  ).join("\n");

  const educationHTML = EDUCATION.map(
    (e) => `
    <div class="entry">
      <div class="l1"><span class="org">${esc(e.school)}</span><span class="date">${esc(e.start)} — ${esc(e.end)}</span></div>
      <div class="l2"><span>${esc(e.degree)}</span></div>
    </div>`
  ).join("\n");

  const certsHTML = CERTIFICATIONS.map(
    (c) => `<li><strong>${esc(c.name)}</strong> — ${esc(c.issuer)}</li>`
  ).join("\n      ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Resume — ${esc(CONTACT.name)}</title>
<style>
  :root { --ink: #111; --rule: #111; --link: #1a4f8b; --muted: #333; }
  @page { size: letter; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: "Georgia", "Times New Roman", "Latin Modern Roman", serif;
    color: var(--ink);
    font-size: 10.5pt;
    line-height: 1.35;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    width: 8.5in;
    min-height: 11in;
    padding: 0.5in 0.6in;
    margin: 0 auto;
    background: #fff;
  }

  /* ── Header ─────────────────────────────────── */
  header { margin-bottom: 10px; }
  header h1 { font-size: 26pt; font-weight: 700; letter-spacing: -0.3px; }
  header .title { font-size: 11pt; color: var(--muted); margin-top: 2px; font-style: italic; }
  header .contact {
    font-size: 9.5pt;
    margin-top: 4px;
    border-bottom: 1.2px solid var(--rule);
    padding-bottom: 8px;
    line-height: 1.5;
  }
  header .contact a { color: var(--link); text-decoration: underline; }
  header .contact .sep { color: #888; margin: 0 5px; }

  /* ── Section headings ───────────────────────── */
  h2 {
    font-size: 11.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1.2px solid var(--rule);
    padding-bottom: 2px;
    margin: 12px 0 6px;
  }

  /* ── Entry (job / project / education) ──────── */
  .entry { margin-bottom: 8px; }
  .entry .l1 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .entry .l1 .org { font-weight: 700; }
  .entry .l1 .date { font-weight: 700; white-space: nowrap; }
  .entry .l2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-style: italic;
    color: var(--muted);
    font-size: 10pt;
  }
  .entry .desc {
    font-size: 10pt;
    color: var(--muted);
    margin-top: 2px;
  }

  /* ── Lists ──────────────────────────────────── */
  ul { list-style: none; margin-top: 2px; }
  ul li {
    padding-left: 14px;
    position: relative;
    margin-bottom: 1.5px;
  }
  ul li::before { content: "•"; position: absolute; left: 2px; }

  /* ── Skills (compact inline) ────────────────── */
  .skills-list li { margin-bottom: 3px; }

  a { color: var(--link); text-decoration: underline; }

  @media print {
    body { background: #fff; }
    .page { padding: 0.45in 0.55in; min-height: auto; }
  }
</style>
</head>
<body>
<div class="page">

  <header>
    <h1>${esc(CONTACT.name)}</h1>
    <p class="title">${esc(CONTACT.title)}</p>
    <div class="contact">
      ${contactParts.join('<span class="sep">|</span>')}
    </div>
  </header>

  <section>
    <h2>Summary</h2>
    <p style="margin-top:4px; font-size:10pt;">${esc(SUMMARY)}</p>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <ul class="skills-list">
      ${skillsHTML}
    </ul>
  </section>

  <section>
    <h2>Experience</h2>
    ${experienceHTML}
  </section>

  <section>
    <h2>Key Projects</h2>
    ${projectsHTML}
  </section>

  <section>
    <h2>Education</h2>
    ${educationHTML}
  </section>

  <section>
    <h2>Certifications</h2>
    <ul>
      ${certsHTML}
    </ul>
  </section>

</div>
</body>
</html>`;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const outDir = path.resolve(__dirname, "..", "public");
  const outPath = path.join(outDir, "jordan-christley-resume.pdf");
  const htmlPath = path.join(outDir, "resume-print.html");

  // Write the standalone HTML so you can also open it in a browser
  const html = buildHTML();
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(htmlPath, html, "utf-8");
  console.log(`Wrote HTML → ${htmlPath}`);

  // Launch Chromium and render to PDF
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });

  await page.pdf({
    path: outPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`Wrote PDF  → ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
