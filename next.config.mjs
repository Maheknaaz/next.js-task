/** @type {import('next').NextConfig} */
// next.config.mjs

export default {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: false,
      },
    ];
  },
};


