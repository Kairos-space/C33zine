/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() { return [{ source: '/', destination: '/en', permanent: false }]; },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
