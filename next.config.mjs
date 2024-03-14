/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      }
    ]
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/_next/static/chunks/pages/:path*',
      },
    ];
  },
};

export default nextConfig;
