/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "search1.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "search2.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "search3.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "search4.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "blog.naver.com",
      },
    ],
    domains: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==']
  }
};

export default nextConfig;
