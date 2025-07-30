import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ovzgadca8zgb0qko.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
