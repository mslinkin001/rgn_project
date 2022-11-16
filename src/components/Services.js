import React from "react";
import "./style.css";
import computerSVG from "../assets/svg/computer.svg";
import cellphoneSVG from "../assets/svg/cellphone.svg";
import portalSVG from "../assets/svg/portal.svg";

import { Text } from "../Context/multilang-context";
import ServiceItems from "./ServiceItems";

const serviceItems = [
  {
    serviceSVG: computerSVG,
    serviceAlt: "computer icon",
    serviceTitle: "windowsApps",
    serviceText: "windowsAppsText",
  },
  {
    serviceSVG: portalSVG,
    serviceAlt: "web portal icon",
    serviceTitle: "webPortals",
    serviceText: "webPortalsText",
  },
  {
    serviceSVG: cellphoneSVG,
    serviceAlt: "cellphone icon",
    serviceTitle: "mobileApps",
    serviceText: "mobileAppsText",
  },
];

const Services = () => {
  return (
    <>
      <section className="services section bd-container" id="Services">
        <span className="section-subtitle">
          <Text tid="servicesTitle" />
        </span>
        <h2 className="section-title">
          <Text tid="servicesTitle-sub" />
        </h2>

        <div className="services__container  bd-grid">
          {serviceItems.map((serviceItem, index) => {
            return (
              <ServiceItems
                key={index}
                serviceSVG={serviceItem.serviceSVG}
                serviceAlt={serviceItem.serviceAlt}
                serviceTitle={serviceItem.serviceTitle}
                serviceText={serviceItem.serviceText}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
