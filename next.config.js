/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: false,
    }
}

module.exports = withContentlayer({ ...nextConfig })
