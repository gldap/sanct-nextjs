/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path:"",
  },
  basePath: "/sanct-nextjs",
  assetPrefix: "/sanct-nextjs",
}

module.exports = nextConfig
