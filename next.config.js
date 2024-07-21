/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    output: 'export',
    images: {
        unoptimized: true,
    },
}
