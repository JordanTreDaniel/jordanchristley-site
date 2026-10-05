import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jordanchristley.com";

  return [
    { url: `${base}/`, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/emerald-tech`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${base}/services/ai-integration-houston`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/custom-web-development-houston`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/digital-transformation-houston`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/experience-design-houston`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/platform-hardening-houston`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/product-engineering-houston`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/blog/how-to-add-ai-to-your-houston-business`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/custom-ai-development-for-houston-startups`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/digital-transformation-guide-houston-small-businesses`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/best-web-development-practices-houston-2026`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/why-houston-businesses-need-an-ai-consultant`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
