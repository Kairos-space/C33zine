/** @type {import('next').NextConfig} */
const nextConfig = {
  // Video files are served from /public as static assets. The archive's
  // runtime cover lookup otherwise causes file tracing to bundle them into
  // the dynamic page function, exceeding Vercel's function size limit.
  experimental: { outputFileTracingExcludes: { '/*': ['public/videos/**/*'] } },
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
