import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placeimg.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'api.escuelajs.co' },
      { protocol: 'https', hostname: 'imgur.com' },
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 'www.everlane.com' },
      { protocol: 'https', hostname: 'www.1620usa.com' },
      { protocol: 'https', hostname: 'instore.co.in' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
