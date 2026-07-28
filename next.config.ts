import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://v1.screenshot.11ty.dev/**"),
    ],
  },
};

export default nextConfig;