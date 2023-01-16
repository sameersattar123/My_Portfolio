import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a> </li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
    </ul>
    <div className="footer__Socials">
    <a href="https://www.linkedin.com/in/sameer-sattar-aa0928241" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/sameersattar123" target="_blank"><BsGithub/></a>
    <a href="" target="_blank"><AiFillFacebook/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Sameer Sattar. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer
