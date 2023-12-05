import React from 'react';

const AchievementsPage = () => {
  return (
    <div>
      <h2>Achievements</h2>

      <div>
        <h3>Awards</h3>
        <div>
          <p>Title: Award Title 1</p>
          <img src="award_image_url_1" alt="Award 1" style={{ width: '100px' }} />
          <p>URL: <a href="award_url_1" target="_blank" rel="noopener noreferrer">Award Link 1</a></p>
        </div>

        <div>
          <p>Title: Award Title 2</p>
          <img src="award_image_url_2" alt="Award 2" style={{ width: '100px' }} />
          <p>URL: <a href="award_url_2" target="_blank" rel="noopener noreferrer">Award Link 2</a></p>
        </div>
      </div>

      <div>
        <h3>Certifications</h3>
        <div>
          <p>The Frontend Developer Career Path</p>
          <img src="https://scrimba.com/certificate/uNbKzdCL/gfrontend" alt="Certification 1" style={{ width: '100px' }} />
          <p>URL: <a href="https://scrimba.com/certificate/uNbKzdCL/gfrontend" target="_blank" rel="noopener noreferrer">Certification Link 1</a></p>
        </div>

        <div>
          <p>Programming Foundations: Object-Oriented Design</p>
          <img src="https://www.linkedin.com/learning/certificates/c03334f6c3ff2e09aacc369412f88c4212e6879bae287719255fb8559218dbc7" alt="Certification 2" style={{ width: '100px' }} />
          <p>URL: <a href="https://www.linkedin.com/learning/certificates/c03334f6c3ff2e09aacc369412f88c4212e6879bae287719255fb8559218dbc7" target="_blank" rel="noopener noreferrer">Certification Link 2</a></p>
        </div>
        <div>
          <p>Software Architecture: Patterns for Developers</p>
          <img src="https://www.linkedin.com/learning/certificates/a438b2663c2eaf846cda139e441f9508af8362324891544ef007c90b1485fe06" alt="Certification 2" style={{ width: '100px' }} />
          <p>URL: <a href="https://www.linkedin.com/learning/certificates/a438b2663c2eaf846cda139e441f9508af8362324891544ef007c90b1485fe06" target="_blank" rel="noopener noreferrer">Certification Link 2</a></p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;