"use client"
import React from 'react';

const AmazonProductCard = ({ imageUrl, affiliateLink, title }) => (
    <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '500px',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        margin: '20px 0',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 153, 0, 0.6)';
            e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
    >
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
                    Discover why this product is a must-have for You. <br></br><b>Limited time offer!</b>
                </p>
                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#ff9900',
                        color: '#000',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        transition: 'background-color 0.3s, transform 0.3s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffa31a';
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ff9900';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    Get It Now on Amazon
                </a>
            </div>
        </div>
        <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#555', textAlign: 'center' }}>
            As an Amazon Associate I earn from qualifying purchases.
        </p>
    </div>
);

export default AmazonProductCard;