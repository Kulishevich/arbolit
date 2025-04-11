import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,
    STORE_URL: process.env.STORE_URL,
  },
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
