/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    compiler: {
        removeConsole: false,
    },
    async rewrites() {
        return [
            {
                source: '/blog-sitemap.xml',
                destination: '/api/blog-sitemap.xml',
            },
        ];
    },
}

module.exports = withContentlayer({ ...nextConfig })