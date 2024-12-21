/** @type {import('next').NextConfig} */
const nextConfig = {
// Use the 'src' directory as the root directory
pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
basePath: '/src',
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
