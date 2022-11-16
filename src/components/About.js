import React from "react";
import "./style.css";
import aboutPic from "../assets/img/rgn.png";
import { Text } from "../Context/multilang-context";

const About = () => {
  return (
    <>
      <section className="about section bd-container" id="About">
        <div className="about__container  bd-grid">
          <div className="about__data">
            <span className="section-subtitle about__initial">
              <Text tid="About" />
            </span>
            <h2 className="section-title about__initial">
              <Text tid="AboutTitle" />
            </h2>
            <p className="about__description">
              <Text tid="AboutText" />
            </p>
            <a href="#Services" className="button">
              <Text tid="serviceClick" />
            </a>
          </div>

          <img src={aboutPic} alt="" className="about__img" />
        </div>
      </section>
    </>
  );
};

export default About;
