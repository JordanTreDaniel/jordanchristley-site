"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/emerald-tech", label: "Emerald Tech" },
];

export default function Nav() {
  const pathname = usePathname();

  // Hide nav on emerald-tech page — it has its own JourneyPage navigation
  if (pathname.startsWith("/emerald")) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 py-4 px-1 sm:px-6">
      <div className="flex items-center gap-1 rounded-full border border-emerald-300/15 bg-emerald-900/40 backdrop-blur-md px-1 py-2 shadow-lg shadow-emerald-950/40 sm:gap-3 sm:px-2 sm:py-1.5">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full py-2 pl-2 pr-2 transition-all hover:bg-emerald-300/10 sm:py-0 sm:pl-2 sm:pr-1"
        >
          <img
            src="/icon-192.png"
            alt="Jordan Christley"
            className="h-7 w-7 rounded-full"
            width={28}
            height={28}
          />
          <span className="hidden text-sm font-semibold text-glass-highlight sm:inline">
            Jordan Christley
          </span>
        </Link>
        <div className="h-4 w-px bg-emerald-300/15" aria-hidden />
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-2 py-3 text-sm font-medium transition-all sm:px-4 sm:py-1.5 ${
              pathname === link.href
                ? "bg-emerald-300/15 text-emerald-300"
                : "text-glass-highlight/60 hover:text-glass-highlight hover:bg-emerald-300/10"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
