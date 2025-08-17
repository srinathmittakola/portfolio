import React from 'react'
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
                                <div className="card-left">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <button className="case-study-btn">View case study</button>
                                </div>
                                <div className="card-right">
                                    <img
                                        src={project.image}
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
