/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  //output: "export",
  images: {
    domains: ["ibb.co"], // Add the allowed image domains here
  },

  //   async rewrites() {
  //     return [
  //         {
  //             source: '/[singlejob].txt',
  //             destination: '/job'
  //         }
  //     ];
  // }
  // trailingSlash: true,
  // assetPrefix: "https://next.webel.ssdemo.xyz",
};

module.exports = nextConfig;
