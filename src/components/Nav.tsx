"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/emerald-tech", label: "Emerald Tech" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 py-4 px-6">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-2 py-1.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              pathname === link.href
                ? "bg-emerald-300/20 text-emerald-300"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
