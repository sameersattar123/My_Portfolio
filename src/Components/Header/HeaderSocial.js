import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'


const HeaderSocial = () => {
  return (
    <div className='header__Social'>
    <a href="https://www.linkedin.com/in/sameer-sattar-aa0928241" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/sameersattar123" target="_blank"><BsGithub/></a>
    <a href="" target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocial
