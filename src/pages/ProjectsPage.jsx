import React from 'react';
import projectImage from '../assets/project-1.png';

const ProjectPage = () => {
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Quantico, sans-serif',
    padding:'20px',
  };

  const imageStyle = {
    maxWidth: '20%',
    height: 'auto',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2>React TriviaQuest Challenge</h2>
      <img src={projectImage} alt="project" style={imageStyle} />
      <p>
        React TriviaQuest Challenge is an interactive trivia quiz application developed using React. This project provides users with a fun experience to test their general knowledge and information.
      </p>

      <h3>Used Technologies</h3>
      <ul>
        <li>React.js</li>
        <li>API</li>
      </ul>

      <h3>Achievements and Challenges</h3>
      <p>
        A brief assessment of achievements obtained and challenges faced
        during the project is provided.
      </p>

      <h3>Links</h3>
      <ul>
        <li>
          <a href="https://github.com/arzucaner/react-triviaquest-challenge" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ViAYjc-SEtA&t=9s" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectPage;

