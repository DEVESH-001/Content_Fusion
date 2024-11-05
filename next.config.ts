import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
    domains: [
      "aceternity.com",
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
      "www.google.com",
      "assets.aceternity.com",
    ],
  },
};

export default nextConfig;
