/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
}

module.exports = nextConfig
