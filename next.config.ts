import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pages from the previous site.
      { source: "/case-studies", destination: "/apps", permanent: true },
      { source: "/privacy-policy", destination: "/legal", permanent: true },
      { source: "/terms-of-use", destination: "/legal", permanent: true },
    ];
  },
};

export default nextConfig;
