/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.franciskahajdu.de',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
