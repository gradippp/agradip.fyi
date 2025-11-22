import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "default",
  },
  // Optional: minify and other optimizations
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
