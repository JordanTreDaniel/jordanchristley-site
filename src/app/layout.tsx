import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const siteUrl = "https://jordanchristley.com";

export const viewport: Viewport = {
  themeColor: "#050a07",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    template: "%s | Jordan Christley",
  },
  description:
    "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.",
  applicationName: "Jordan Christley",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "AI consultant Houston",
    "AI expert Houston",
    "software engineer Houston",
    "web developer Houston",
    "technology specialist Houston",
    "custom AI development Houston",
    "AI business transformation Houston",
    "Jordan Christley developer",
    "self-taught software engineer",
  ],
  authors: [{ name: "Jordan Christley" }],
  creator: "Jordan Christley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jordan Christley",
    title: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    description:
      "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology through Emerald Technology Consulting.",
    images: [
      { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Jordan Christley" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
    description:
      "Jordan Christley is a 10+ year self-taught software engineer in Houston, TX building AI tools, web apps, and creative technology.",
    creator: "@jordanchristley",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD: Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jordan Christley",
              jobTitle: "Software Engineer & AI Consultant",
              description:
                "10+ year self-taught software engineer building AI tools, web apps, and creative technology in Houston, TX.",
              url: siteUrl,
              image: `${siteUrl}/opengraph-image.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Web Development",
                "Software Engineering",
                "AI Integration",
                "Product Strategy",
                "Full-Stack Development",
              ],
            }),
          }}
        />
        {/* JSON-LD: Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jordan Christley",
              url: siteUrl,
              description:
                "Jordan Christley — AI Consultant & Software Engineer in Houston, TX",
              publisher: {
                "@type": "Person",
                name: "Jordan Christley",
              },
            }),
          }}
        />
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${fredoka.variable} ${nunitoSans.variable} antialiased pt-16 bg-obsidian text-glass-highlight`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
