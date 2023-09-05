/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'api-franciskahajdu.web4musicians.eu',
        hostname: process.env.NEXT_PUBLIC_BACKEND_API,
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
