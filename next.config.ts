import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Aman_Rakhade_Portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Aman_Rakhade_Portfolio",
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
