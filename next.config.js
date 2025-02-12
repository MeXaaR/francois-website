/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        MEXAR_URL: process.env.MEXAR_URL,
        API_KEY: process.env.API_KEY,
    },
}
