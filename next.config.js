/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: '/',
  trailingSlash: true,
}

module.exports = nextConfig 