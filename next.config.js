/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    compiler: {
        removeConsole: false,
    },
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap.xml',
            },
        ];
    },
}

module.exports = withContentlayer({ ...nextConfig })