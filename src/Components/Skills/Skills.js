import React from 'react'
import {BsFillPatchCheckFill} from "react-icons/bs"
import "./Skills.css"



const Skills = () => {
  return (
    <section id='skills'>
    <h2>My Skills</h2>
    <div className="container experience__container">
      <div className="experiencs_-frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>React JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experiencs_-frontend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>Express JS</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>Mongo DB</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>Git</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='icon'/>
            <div>
            <h4>GitHub</h4>
            <small className='text-light'>Bsic</small>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
      
  )
}

export default Skills
