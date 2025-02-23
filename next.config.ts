import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    loader: 'default',
  },
};

export default nextConfig;
