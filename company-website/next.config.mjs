/** @type {import('next').NextConfig} */
const nextConfig = {
   devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
