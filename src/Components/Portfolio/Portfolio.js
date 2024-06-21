import React from 'react'
import "./Portfolio.css"
import { data } from '../../data'

const Portfolio = () => {
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
    {
      data.map(({id , title , img , github , livedemo})=>{
        return(
      <article className="portfolio__item" key={id}>
      <div className="portfolio__item-images">
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} target={"_blank"}  rel="noreferrer" className="btn">Github</a>
      <a href={livedemo} target={"_blank"}  rel="noreferrer" className="btn btn-primary">Live Demo</a>
      </div>
      </article>
        )
      })
    }
      
    </div>
   
   </section>
  )
}

export default Portfolio
