import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Static export so the catalog can be hosted on GitHub Pages at /shipyard.
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/shipyard" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
