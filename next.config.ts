import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/Cassandra-Website" : "",
  assetPrefix: isProd ? "/Cassandra-Website/" : "",
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
  },
};

export default nextConfig;
