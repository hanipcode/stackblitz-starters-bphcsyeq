/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC minifier
  swcMinify: false,
  // Use Babel instead of SWC
  experimental: {
    forceSwcTransforms: false
  }
};

module.exports = nextConfig;