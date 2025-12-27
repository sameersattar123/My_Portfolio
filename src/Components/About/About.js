import React from "react";
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <p className="txt-center">
       I am Sameer Sattar, a Software Quality Assurance Engineer with 1 year of hands-on experience in both manual and automation testing. I hold a Bachelor’s degree in Computer Science (BSCS) from the University of Karachi (UBIT).
       I have experience in designing and executing test cases, identifying and reporting defects, and ensuring software quality across web and mobile applications. I am passionate about delivering reliable, user-friendly, and high-quality software by following structured QA processes and best practices.
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
