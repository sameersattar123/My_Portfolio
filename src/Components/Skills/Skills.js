import React from 'react'
import {BsFillPatchCheckFill} from "react-icons/bs"
import "./Skills.css"
import Skill from './Skill'



const Skills = () => {
  return (
    <section id='skills'>
    <h2>My Skills</h2>
    <div className="container experience__container">
      <div className="experiencs_-frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <Skill skill="HTML5" level="Intermediate" />
          <Skill skill="CSS3" level="Intermediate" />
          <Skill skill="Bootstrap5" level="Intermediate" />
          <Skill skill="Tailwind CSS" level="Intermediate" />
          <Skill skill="Material UI" level="Intermediate" />
          <Skill skill="JavaScript" level="Intermediate" />
          <Skill skill="TypeScript" level="Intermediate" />
          <Skill skill="React JS" level="Intermediate" />
          <Skill skill="Redux" level="Intermediate" />
          <Skill skill="Next JS" level="Intermediate" />
        </div>
      </div>
      <div className="experiencs_-frontend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <Skill skill="Node JS" level="Intermediate" />
          <Skill skill="Express JS" level="Intermediate" />
          <Skill skill="Mongo DB" level="Intermediate" />
          <Skill skill="Git" level="Basic" />
          <Skill skill="GitHub" level="Basic" />
        </div>
      </div>
    </div>
    </section>
      
  )
}

export default Skills
