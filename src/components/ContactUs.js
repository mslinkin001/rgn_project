import React from "react";
import "./style.css";
import { Text } from "../Context/multilang-context";

const ContactUs = () => {
  return (
    <>
      <section className="contact section bd-container" id="Contact us">
        <div className="contact__container bd-grid">
          <div className="contact__data">
            <span className="section-subtitle contact__initial">
              <Text tid="contactusTitle" />
            </span>
            <h2 className="section-title contact__initial">
              <Text tid="contactusMainTitle" />
            </h2>
            <p className="contact__description">
              <Text tid="contactusText" />
            </p>
          </div>

          <div className="contact__button">
            <a href="#Footer" className="button">
              <Text tid="contactusButton" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
