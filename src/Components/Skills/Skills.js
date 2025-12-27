import React from "react";
import "./Skills.css";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experiencs_-frontend">
          <h3>Manual & Functional Testing</h3>
          <div className="experience__content">
            <Skill skill="Manual Testing" level="Intermediate" />
            <Skill skill="Test Case Design & Execution" level="Advanced" />
            <Skill skill="Smoke & Sanity Testing" level="Advanced" />
            <Skill skill="Functional & Regression Testing" level="Advanced" />
            <Skill skill="UI / UX Testing" level="Intermediate" />
            <Skill skill="Cross-Browser Testing (BrowserStack)" level="Intermediate" />
            <Skill skill="Mobile App Testing (Android / iOS)" level="Intermediate" />
            <Skill skill="API Testing (Postman)" level="Intermediate" />
            <Skill skill="A/B Testing" level="Intermediate" />
          </div>
        </div>
        <div className="experiencs_-frontend">
          <h3>Automation & Performance Testing</h3>
          <div className="experience__content">
            <Skill skill="Automation Testing" level="Intermediate" />
            <Skill skill="Selenium WebDriver" level="Intermediate" />
            <Skill skill="TestNG" level="Intermediate" />
            <Skill skill="Cypress" level="Intermediate" />
            <Skill skill="Playwright" level="Intermediate" />
            <Skill skill="JMeter (Performance Testing)" level="Basic" />
            <Skill skill="Bug Tracking (ClickUp, Jira, Taiga)" level="Advanced" />
            <Skill skill="Test Documentation & Reporting" level="Advanced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
