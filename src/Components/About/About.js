import React from "react";
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <p className="txt-center">
        My name is Sameer Sattar and I’m a passionate Computer Science Second
        year student at University of Karachi (DCS-UBIT) and a Web Developer
        using web technologies to build amazing products and focusing on solving
        problems for different niches and different industries using the power
        of technology.
      </p>
      <div className="button">
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      </div>
    </section>
  );
};

export default About;
