import type { NextConfig } from 'next';

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

  async rewrites() {
    return [
      { source: '/robots.txt', destination: '/api/robots' },
      { source: '/sitemap.xml', destination: '/api/sitemap' },
      { source: '/feed.xml', destination: '/api/feed' },
    ];
  },
};

export default nextConfig;
