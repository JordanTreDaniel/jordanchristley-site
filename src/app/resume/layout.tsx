import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://jordanchristley.com";

// resume/page.tsx is a client component and cannot export metadata.
// This nested layout supplies canonical + og:url for /resume only.
export const metadata: Metadata = {
  alternates: { canonical: `${siteUrl}/resume` },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/resume`,
    siteName: "Jordan Christley",
    title: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    description:
      "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.",
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: "Jordan Christley" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    description:
      "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.",
    creator: "@jordanchristley",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
