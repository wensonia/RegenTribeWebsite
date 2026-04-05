import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',   // Pure static HTML — no Worker, no nodejs_compat needed
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
