import React from 'react'
import { Link } from 'react-router-dom';
import { projects } from './ProjectsData';

export default function Projects() {
    return (
        <>
            <section id="projects" className="projects">
                <div className="container">
                    <h2>My Projects</h2>

                    <div className="project-list">
                        {projects.map((project) => (
                            <div className="project-card modern-card" key={project.id}>

                                {/* LEFT CONTENT */}
                                <div className="card-left">

                                    {/* Title */}
                                    <h3 className="project-title">{project.title}</h3>

                                    {/* Short Description */}
                                    <p className="project-description">
                                        <h5>Description</h5>
                                        {project.description}
                                    </p>

                                    {/* Key Features */}
                                    <h5>Key Features</h5>

                                    {project.features && (
                                        <ul className="project-features">
                                            {project.features.slice(0, 4).map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <h5>Tech Stack</h5>

                                    {project.techStack && (
                                        <div className="tech-stack">
                                            {project.techStack.map((tech, index) => (
                                                <span className="tech-badge" key={index}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}



                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="card-right">
                                    <img
                                        src={project.image1}
                                        alt={project.title}
                                        className="card-image"
                                    />
                                    <img
                                        src={project.image2}
                                        alt={project.title}
                                        className="card-image"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
