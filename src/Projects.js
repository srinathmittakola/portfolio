import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <h3>Project One</h3>
          <p>Short description of project one.</p>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" />
          <h3>Project Two</h3>
          <p>Short description of project two.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
