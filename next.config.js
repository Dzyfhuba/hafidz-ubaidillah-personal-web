/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = withPWA({
  compiler: {
    removeConsole: process.env.APP_ENV === 'production'
  },
  experimental: {
    // serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '*',
        protocol: 'https'
      }
    ],
  }
})

module.exports = nextConfig
