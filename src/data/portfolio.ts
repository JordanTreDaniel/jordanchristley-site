export interface PortfolioEntry {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl: string;
  tags: string[];
}

export const portfolioEntries: PortfolioEntry[] = [
  {
    title: "MMSTR",
    description:
      "Turn-based discussion tool built on Chris Voss's \"Make Me Say That's Right\" negotiation technique. Enforces comprehension before rebuttal — you can't push your point until you've genuinely understood the other side. Built with Next.js + LangChain + SQLite.",
    imageSrc: "/mmstr-preview.png",
    liveUrl: "https://mmstr.jordanchristley.com/",
    tags: ["Next.js", "LangChain", "Product", "AI"],
  },
  {
    title: "RapClouds",
    description:
      "Interactive word-cloud generator and J. Cole \"The Fall-Off\" t-shirt gallery. Wrap clouds from your own lyrics, then shop a gallery of designs that remix the words into wearable art. Vite/React frontend + FastAPI backend.",
    imageSrc: "/rapclouds-preview.png",
    liveUrl: "https://rapclouds.jordanchristley.com/",
    tags: ["React", "FastAPI", "Creative"],
  },
  {
    title: "Paw Paradise Journey",
    description:
      "Scroll-driven journey site for a pet care brand. Built with AI-generated video flythrough, interactive flash cards, and a polished handoff form — all in a single continuous scroll experience.",
    imageSrc: "/pawparadise-preview.png",
    liveUrl: "https://pawparadise-journey.higgsfield.app/",
    tags: [
      "Next.js",
      "Framer Motion",
      "AI Video",
      "Scroll-Scrub",
      "Cloudflare Workers",
    ],
  },
];
