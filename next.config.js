/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrites: async () => [
  //   {
  //     source: '/',
  //     destination: '/id',
  //   },
  // ],
  
  compiler: {
    removeConsole: true
  }
}

module.exports = nextConfig
