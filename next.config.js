/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
// });
const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
});

module.exports = withPWA({
  // next.js config
});
