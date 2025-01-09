import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daou.co.kr',
        port: '',
        pathname: '/export/sites/daou/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
