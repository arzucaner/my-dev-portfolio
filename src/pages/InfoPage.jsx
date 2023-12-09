import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import image from '../assets/image.png';

const InfoPage = () => {
    const profileImageURL = image;

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Quantico, sans-serif',
    };

    const imageContainerStyle = {
        marginRight: '100px',
        alignSelf: 'flex-start',
    };

    const profileImageStyle = {
        width: '400px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    };

    const textContainerStyle = {
        textAlign: 'left',
        maxWidth: '400px',
        marginTop: '150px',
    };

    return (
        <div style={containerStyle}>
            <img src={profileImageURL} alt="Arzu Caner" style={profileImageStyle} />

            <div style={textContainerStyle}>
                <h1 style={{ color: '#333', fontSize: '2rem' }} >Arzu Caner</h1>
                <p>Software Developer</p>
                <p>Technical SEO background</p>
                <p>Tech Stack</p>
                <p>Frontend: HTML, CSS, JavaScript, TypeScript, React.js, Vue.js</p>
                <p>Backend: Node.js, Testing with Jest 🃏
                    Database: MongoDB 🍃</p>
            </div>
        </div>

    );
};

export default InfoPage;