import React from 'react'
import { experiences } from './Experiences';

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience">
        <h2>Experience</h2>
        {experiences.map((experience)=>(
          <div class="experience-item">
          <div class="role">{experience.title}</div>
          <div><div class="company">{experience.company}</div>
          <div class="date">{experience.duration}</div></div>
          
        </div>
        ))}
        
      </section>
    </>
  )
}
