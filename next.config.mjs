/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export configuration
  eslint: {
    ignoreDuringBuilds: true, // Avoid eslint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Adds trailing slash to routes for better SEO and compatibility
};

export default nextConfig;
