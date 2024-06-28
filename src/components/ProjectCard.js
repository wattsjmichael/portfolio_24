// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, github, liveDemo, learnMore }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={github}>GitHub</a>
      <a href={liveDemo}>Live Demo</a>
      <a href={learnMore}>Learn More</a>
    </div>
  );
};

export default ProjectCard;
