import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://jordanchristley.com";

// resume/page.tsx is a client component and cannot export metadata.
// This nested layout supplies canonical for /resume only.
// openGraph/twitter intentionally omitted — root layout owns social images.
export const metadata: Metadata = {
  alternates: { canonical: `${siteUrl}/resume` },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
