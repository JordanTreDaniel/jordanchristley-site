import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-emerald-300/15 bg-emerald-900/30 px-8 py-12 text-center backdrop-blur-md sm:px-12">
        <p className="font-[family-name:var(--font-display)] text-7xl font-bold tracking-tight text-emerald-300 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-glass-highlight sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-base text-emerald-100/80">
          This page doesn&apos;t exist yet — or it wandered off.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-200"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
