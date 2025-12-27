import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import me from "../../Assets/images/SAVE_20230113_021759-removebg-preview.png"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Sameer Sattar Shaikh</h1>
            <h5>SQA Engineer | Manual & Automation Tester</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
                <img src={me} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
