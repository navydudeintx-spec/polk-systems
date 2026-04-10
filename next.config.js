/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async redirects() {
    return [
      { source: '/services', destination: '/solutions', permanent: true },
      { source: '/about', destination: '/story', permanent: true },
    ];
  },

  devIndicators: false,
};

module.exports = nextConfig;