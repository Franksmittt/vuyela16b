import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  // cacheComponents: true, // TODO: Enable after resolving Clerk compatibility
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
