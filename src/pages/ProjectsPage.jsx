import React from 'react';

const ProjectPage = () => {
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Quantico, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <h2>React TriviaQuest Challenge</h2>
      <img src="https://github.com/arzucaner/react-triviaquest-challenge/blob/main/image/README/1699429057578.png" alt="project picture" />
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

