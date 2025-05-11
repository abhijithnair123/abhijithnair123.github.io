/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/abhijith-portfolio',
  assetPrefix: '/abhijith-portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig;
