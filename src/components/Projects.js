// src/components/Projects.js
import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ProjectCard
        title="Emergency Preparedness VR Simulations"
        description="Developed virtual recreations of office buildings to help companies prepare for disasters."
        image="path/to/project-image.jpg"
        github="path/to/github"
        liveDemo="path/to/live-demo"
        learnMore="path/to/learn-more"
      />
    </section>
  );
};

export default Projects;
