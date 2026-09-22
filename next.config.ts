import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
    /** formats: ["image/avif", "image/webp"], */
  },
};

/**export default nextConfig; */
module.exports = nextConfig;
