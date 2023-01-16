import React from 'react'
import "./Contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
  <section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>
  <div className="container contact__container">
  <div className="contact__options">
    <article className="contact__option">
    <AiOutlineMail/>
      <h4>Email</h4>
      <h5>sameersattar1111@gmail.com</h5>
      <a href="mailto:sameersattar1111@gmail.com" target="_blank">Send a message</a>
    </article>
    <article className="contact__option">
    <RiMessengerLine/>
      <h4>Messenger</h4>
      <h5>Sameer Sattar</h5>
      <a href="https://www.facebook.com/sameersattar.sameersattar" target="_blank">Send a message</a>
    </article>
    <article className="contact__option">
    <BsWhatsapp/>
      <h4>WhatsApp</h4>
      <h5>03161063604</h5>
      <a href="https://api.whatsapp.com/send?phone=+92-312-3730895" target="_blank">Send a message</a>
    </article>
  </div>
  <form method="POST" action="https://formspree.io/f/xqkoakdb">
    <input type="text"  name="text" placeholder='Your Full Name' required/>
    <input type="email" name="email"  placeholder='Your Email' required/>
    <textarea name="" id="" rows="7" placeholder='Your Message' required></textarea>
    <button type="submit" className='btn btn-primary'>Send Message</button>
  </form>
  </div>
  </section>
  )
}

export default Contact
