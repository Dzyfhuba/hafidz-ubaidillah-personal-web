/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrites: async () => [
  //   {
  //     source: '/',
  //     destination: '/id',
  //   },
  // ],
  
  compiler: {
    removeConsole: process.env.APP_ENV === 'production'
  },
  experimental: {
    // serverActions: true,
  }
}

module.exports = nextConfig
