import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.adarksolutions.com",
          },
        ],
        destination: "https://adarksolutions.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
