import React from "react";
import "./style.css";
import { Text } from "../Context/multilang-context";

const Footer = () => {
  return (
    <>
      <footer className="footer section bd-container" id="Footer">
        <div className="footer__container bd-grid">
          <div className="footer__content">
            <a href="#Home" className="footer__logo">
              <Text tid="siteLogo" />
            </a>
            <span className="footer__description">
              <Text tid="siteDescription" />
            </span>
            <div>
              <a href="#" className="footer__social">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="footer__social">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="footer__social">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">
              <Text tid="servicesTitle" />
            </h3>
            <ul>
              <li>
                <a href="#Services" className="footer__link">
                  <Text tid="windowsApps" />
                </a>
              </li>
              <li>
                <a href="#Services" className="footer__link">
                  <Text tid="webPortals" />
                </a>
              </li>
              <li>
                <a href="#Services" className="footer__link">
                  <Text tid="mobileApps" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">
              <Text tid="ExservicesTitle" />
            </h3>
            <ul>
              <li>
                <a href="#Exservices" className="footer__link">
                  <Text tid="ConsultTitle" />
                </a>
              </li>
              <li>
                <a href="#Exservices" className="footer__link">
                  <Text tid="SupervisionTitle" />
                </a>
              </li>
              <li>
                <a href="#Exservices" className="footer__link">
                  <Text tid="QualityTitle" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">
              <Text tid="AddressTitle" />
            </h3>
            <ul>
              <li>
                <Text tid="AddressCountry" /> - <Text tid="AddressCity" />
              </li>
              <li>
                <Text tid="AddressLine" />
              </li>
              <li>
                <Text tid="Phone" />
              </li>
              <li>
                <Text tid="Email" />
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copy" style={{ direction: "ltr" }}>
          &#169; 2022 RGN. All right reserved Designed By:
          <a href="https://github.com/mslinkin001" target="__blank">
            Milad Sohrabi
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
