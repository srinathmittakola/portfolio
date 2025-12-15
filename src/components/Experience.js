import React from 'react'
import { experiences } from './Experiences';

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience">
        <h2>Experience</h2>
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="role">{experience.title}</div>
            <div>
              <div className="company">{experience.company}</div>
              <div className="date">{experience.duration}</div>
            </div>
            <p>– Developed Android applications using Kotlin following clean architecture and best coding practices.
</p>
          </div>
        ))}
        
      </section>
    </>
  )
}
