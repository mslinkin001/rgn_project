import React from "react";
import "./style.css";
import homePic from "../assets/img/home.webp";
import { Text } from "../Context/multilang-context";

const Home = () => {
  return (
    <>
      <section className="home" id="Home">
        <div className="home__container bd-container bd-grid">
          <img src={homePic} alt="" className="home__img" />

          <div className="home__data">
            <h1 className="home__title">
              <Text tid="mainTitle" />
            </h1>
            <h2 className="home__subtitle">
              <Text tid="mainSub" /> <br />
              <Text tid="mainSub-sub" />
            </h2>
            <a href="#Services" className="button">
              <Text tid="serviceClick" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
