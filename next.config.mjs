/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() { return [
    { source: '/', destination: '/en', permanent: false },
    { source: '/en/culture/film', destination: '/en/film', permanent: true },
    { source: '/zh/culture/film', destination: '/zh/film', permanent: true },
    { source: '/article/:slug', destination: '/zh/archive/:slug', permanent: false },
    { source: '/journal/:slug', destination: '/zh/archive/:slug', permanent: false },
    { source: '/journal', destination: '/zh/archive', permanent: false },
  ]; },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
