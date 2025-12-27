import React from "react";
import "./Portfolio.css";
import { data } from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My QA Work</h5>
      <h2>Testing Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, video, description }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-video">
                <video controls muted>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <h3>{title}</h3>

              <p className="portfolio__description">
                <span className="portfolio__description-title">
                  Project Description :
                </span>
                <span className="portfolio__description-text">
                  {description}
                </span>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
