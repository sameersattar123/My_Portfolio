import React, { useState } from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {GiSkills} from "react-icons/gi"
import {IoMdContact} from "react-icons/io"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import "./Nav.css"

const Nav = () => {
  const [activeClass , setActiveClass ] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveClass("#")}} className={activeClass === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActiveClass("#about")}} className={activeClass === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>{setActiveClass("#skills")}} className={activeClass === "#skills" ? "active" : ""}><GiSkills/></a>
      <a href="#portfolio" onClick={()=>{setActiveClass("#portfolio")}} className={activeClass === "#portfolio" ? "active" : ""}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={()=>{setActiveClass("#contact")}} className={activeClass === "#contact" ? "active" : ""}><IoMdContact/></a>
    </nav>
  )
}

export default Nav
