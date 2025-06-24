import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This skips ESLint errors on Vercel
  },
};

export default nextConfig;
