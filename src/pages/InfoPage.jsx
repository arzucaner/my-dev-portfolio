import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';




const InfoPage = () => {
    const profileImageURL = 'https://media.licdn.com/dms/image/C5603AQHdV2DftaLXsQ/profile-displayphoto-shrink_400_400/0/1560533242809?e=1707350400&v=beta&t=_vAujYBmLP-W3elVs1lmsnuAqqmNE32_7uwzR5wu-AQ';

    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Quantico, sans-serif',
    };

    const profileImageStyle = {
        width: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    };

    const contactFormStyle = {
        maxWidth: '400px',
        margin: '0 auto',
    };   

    return (
        <div style={containerStyle}>
            <a href="https://media.licdn.com/dms/image/C5603AQHdV2DftaLXsQ/profile-displayphoto-shrink_400_400/0/1560533242809?e=1707350400&v=beta&t=_vAujYBmLP-W3elVs1lmsnuAqqmNE32_7uwzR5wu-AQ" target="_blank" rel="noopener noreferrer">
                <img src={profileImageURL} alt="Arzu Caner" style={{ width: '150px', borderRadius: '50%' }} />
            </a>

            <h1>Arzu Caner</h1>
            <p>Software Developer</p>
            <p>Technical SEO background</p>
            <p>Tech Stack</p>
            <p>Frontend: HTML, CSS, JavaScript, TypeScript, React.js, Vue.js</p>
                <p>Backend: Node.js, Testing with Jest 🃏
                Database: MongoDB 🍃</p>

            <div style={contactFormStyle}>
                <Box>
                    <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Box>
            </div>
        </div>
    );
};

export default InfoPage;