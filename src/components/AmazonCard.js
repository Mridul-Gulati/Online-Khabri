"use client"
import React, { useState, useEffect } from 'react';

const AmazonProductCard = ({ imageUrl, affiliateLink, title }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Check initial theme
        setIsDarkTheme(document.documentElement.classList.contains('dark'));

        // Set up a MutationObserver to watch for changes to the 'dark' class
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    setIsDarkTheme(document.documentElement.classList.contains('dark'));
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    const styles = {
        card: {
            border: `1px solid ${isDarkTheme ? '#4a4a4a' : '#e0e0e0'}`,
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '500px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: `0 2px 4px ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            margin: '20px 0',
            transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
            backgroundColor: isDarkTheme ? '#2a2a2a' : '#ffffff',
            color: isDarkTheme ? '#e0e0e0' : '#111',
        },
        title: {
            margin: '0 0 8px',
            color: isDarkTheme ? '#66b0ff' : '#0066c0',
            fontSize: '18px',
        },
        description: {
            margin: '0 0 12px',
            fontSize: '14px',
        },
        button: {
            display: 'inline-block',
            backgroundColor: '#ff9900',
            color: isDarkTheme ? '#000' : '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '4px',
            transition: 'background-color 0.3s, transform 0.3s',
        },
        disclaimer: {
            margin: '12px 0 0',
            fontSize: '12px',
            color: isDarkTheme ? '#aaa' : '#555',
            textAlign: 'center',
        },
    };

    return (
        <div
            style={styles.card}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 15px ${isDarkTheme ? 'rgba(255, 153, 0, 0.3)' : 'rgba(255, 153, 0, 0.6)'}`;
                e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
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
                    <h3 style={styles.title}>{title}</h3>
                    <p style={styles.description}>
                        Discover why this product is a must-have for You. <br></br><b>Limited time offer!</b>
                    </p>
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.button}
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
            <p style={styles.disclaimer}>
                As an Amazon Associate I earn from qualifying purchases.
            </p>
        </div>
    );
};

export default AmazonProductCard;