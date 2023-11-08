/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sparrownews.in",
        port: "",
        pathname: "/news/**",
      },
    ],
  },
};

module.exports = nextConfig;
