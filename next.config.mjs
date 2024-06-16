/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.shields.io',
            },
            {
                protocol: 'https',
                hostname: 'camo.githubusercontent.com',
            },
        ],
    },
    env: {
        ADOBE_KEY: process.env.ADOBE_KEY,
    },
}
  

export default nextConfig;
