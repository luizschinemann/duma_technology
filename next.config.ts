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
}

export default nextConfig
