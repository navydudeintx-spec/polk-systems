/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async redirects() {
    return [
      { source: '/services', destination: '/solutions', permanent: true },
      { source: '/about', destination: '/story', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, no-cache, no-store, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/:path((?!_next/static|_next/image|favicon.ico|icon.png|android-chrome-192x192.png|manifest.json).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, no-cache, no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  devIndicators: false,
};

module.exports = nextConfig;