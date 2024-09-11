import React from 'react'

const AmazonPromo = ({ affiliateUrl, imageUrl }) => (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', maxWidth: '500px', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', margin: '20px 0', transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imageUrl} alt="Product Image" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '4px', marginRight: '16px' }} />
            <div>
                <h3 style={{ margin: '0 0 8px', color: '#0066c0', fontSize: '18px' }}>Homedics Ss2000 Soundspa Portable White Noise Relaxation Speaker!</h3>
                <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#111' }}>Discover why this product is a must-have for you.<br /><b>Limited time offer!</b></p>
                <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#ff9900', color: '#000', padding: '10px 20px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px', transition: 'background-color 0.3s, transform 0.3s' }}>
                    Get It Now on Amazon
                </a>
            </div>
        </div>
        <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#555' }}>As an Amazon Associate I earn from qualifying purchases.</p>
    </div>
);

export default AmazonPromo;
