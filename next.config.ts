import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore - Next.js 16/Turbopack specific setting
  turbopack: {
    root: '.',
  },
  async rewrites() {
    return [
      {
        source: '/tm',
        destination: '/tm/index.html',
      },
      {
        source: '/tm/',
        destination: '/tm/index.html',
      },
    ]
  },
}

export default nextConfig
