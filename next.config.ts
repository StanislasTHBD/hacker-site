import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ pour Docker
};

export default nextConfig;
