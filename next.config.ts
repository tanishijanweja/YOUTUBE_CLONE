import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      'https://8ba9-2405-201-400d-d16f-986b-c147-2475-12b5.ngrok-free.app',
    ],
  },
}

module.exports = nextConfig
module.exports = {
  experimental: {
    allowedDevOrigins: ['http://complete-mastodon-typically.ngrok-free.app'],
  },
};
