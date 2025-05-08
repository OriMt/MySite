/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  basePath: '/MySite', // Your repository name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 