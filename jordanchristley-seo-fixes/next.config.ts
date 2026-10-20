import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Security headers are configured via public/_headers for Cloudflare Pages
  // For Vercel deployment, use the headers() config below:
  // headers: async () => [
  //   {
  //     source: "/(.*)",
  //     headers: [
  //       { key: "X-Content-Type-Options", value: "nosniff" },
  //       { key: "X-Frame-Options", value: "DENY" },
  //       { key: "X-XSS-Protection", value: "1; mode=block" },
  //       { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  //       {
  //         key: "Strict-Transport-Security",
  //         value: "max-age=63072000; includeSubDomains; preload",
  //       },
  //       {
  //         key: "Permissions-Policy",
  //         value: "camera=(), microphone=(), geolocation=()",
  //       },
  //     ],
  //   },
  // ],
};

export default nextConfig;
