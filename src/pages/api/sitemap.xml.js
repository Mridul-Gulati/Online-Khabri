// pages/api/sitemap.xml.js

import { allBlogs } from "@/.contentlayer/generated";
import siteMetadata from '../../utils/SiteMetadata';

const generateSitemap = (blogs) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${siteMetadata.siteUrl}</loc>
      </url>
      ${blogs
      .map(({ _raw, publishedAt }) => {
        return `
            <url>
              <loc>${`${siteMetadata.siteUrl}/blog/${_raw.flattenedPath}`}</loc>
              <lastmod>${new Date(publishedAt).toISOString()}</lastmod>
            </url>
          `;
      })
      .join('')}
    </urlset>
  `;
};

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');

  const sitemap = generateSitemap(allBlogs);

  res.write(sitemap);
  res.end();
}