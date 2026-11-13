/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves this project from /Portfolio-2027 rather than the
  // domain root. Keeping this conditional preserves root-relative URLs while
  // developing locally.
  basePath: process.env.GITHUB_ACTIONS ? '/Portfolio-2027' : '',
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
