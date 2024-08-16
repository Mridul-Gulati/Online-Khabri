import { allBlogs } from "@/.contentlayer/generated";

const EXTERNAL_DATA_URL = 'https://www.onlinekhabri.com';

function generateSiteMap(blogPosts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Static URLs -->
        <url>
            <loc>${EXTERNAL_DATA_URL}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>yearly</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL}/about</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL}/blog</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
        </url>
        <!-- Dynamic blog URLs -->
        ${blogPosts
            .map(({ slug, date }) => {
                return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/blog/${slug}`}</loc>
                <lastmod>${new Date(date).toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>
            `;
            })
            .join('')}
    </urlset>
    `;
}

export async function getServerSideProps() {
    // Ensure allBlogs is defined and not empty
    const blogPosts = allBlogs ? allBlogs.map((blog) => ({
        slug: slug(blog.title),
        date: blog.date,
    })) : [];

    return {
        props: {
            blogPosts,
        },
    };
}

export default function Sitemap({ blogPosts }) {
    if (!blogPosts || blogPosts.length === 0) {
        return new Response('<xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }

    const sitemap = generateSiteMap(blogPosts);

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
