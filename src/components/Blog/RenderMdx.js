import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const AmazonProductCard = ({ imageUrl, affiliateLink, title }) => (
    <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '500px',
        fontFamily: 'Arial, sans-serif',
        margin: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out'
    }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imageUrl} alt="Product Image" style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '4px',
                marginRight: '16px'
            }} />
            <div>
                <h3 style={{ margin: '0 0 8px', color: '#0066c0', fontSize: '18px' }}>{title}</h3>
                <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#111' }}>
                    Discover why this product is a must-have for you.
                    <br /><b>Limited time offer</b>!
                </p>
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block',
                    backgroundColor: '#ff9900',
                    color: '#000',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s'
                }}>
                    Get It Now on Amazon
                </a>
            </div>
        </div>
        <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#555', textAlign: 'center' }}>
            As an Amazon Associate I earn from qualifying purchases.
        </p>
    </div>
)

const mdxComponents = {
    Image,
    AmazonProductCard
}

const RenderMdx = ({ blog }) => {
    const MDXContent = useMDXComponent(blog.body.code)
    return (
        <div className='first-letter:text-3xl sm:first-letter:text-5xl prose sm:prose-base md:prose-lg max-w-max col-span-12 lg:col-span-8 font-in prose-blockquote:bg-accent/20 dark:prose-blockquote:bg-accentDark/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent dark:prose-blockquote:border-accentDark prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-li:marker:text-accentDark dark:prose-invert'>
            <MDXContent components={mdxComponents} />
        </div>
    )
}

export default RenderMdx