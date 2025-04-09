import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'arbolitapi.webspaceteam.site',
        protocol: 'https',
      },
      {
        hostname: 'webspaceteam.site',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
