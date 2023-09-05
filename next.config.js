/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-franciskahajdu.web4musicians.eu',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
