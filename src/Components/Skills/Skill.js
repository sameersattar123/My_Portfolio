import React from 'react'
import {BsFillPatchCheckFill} from "react-icons/bs"
import "./Skills.css"

const Skill = ({skill , level}) => {
  return (
    <article className='experience__details'>
    <BsFillPatchCheckFill className='icon'/>
    <div>
    <h4>{skill}</h4>
    <small className='text-light'>{level}</small>
    </div>
  </article>
  )
}

export default Skill