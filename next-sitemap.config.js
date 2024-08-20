const siteMetadata = require("./src/utils/SiteMetadata");

module.exports = {
    siteUrl: siteMetadata.siteUrl,
    generateRobotsTxt: true,
    additionalSitemaps: [
        `${siteMetadata.siteUrl}/blog-sitemap.xml`,
    ],
}