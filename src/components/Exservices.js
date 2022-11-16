import React from "react";
import "./style.css";
import { Text } from "../Context/multilang-context";
import ExserviceItems from "./ExserviceItems";

import consultpic from "../assets/img/consult.jpg";
import monitoringPic from "../assets/img/monitoring.jpg";
import qualityPic from "../assets/img/quality.jpg";

const ExserviceItemsArray = [
  {
    ExserviceImg: consultpic,
    ExserviceTitle: "ConsultTitle",
    ExserviceText: "ConsultText",
    ExservicePrice: "Price",
  },
  {
    ExserviceImg: monitoringPic,
    ExserviceTitle: "SupervisionTitle",
    ExserviceText: "SupervisionText",
    ExservicePrice: "Price",
  },
  {
    ExserviceImg: qualityPic,
    ExserviceTitle: "QualityTitle",
    ExserviceText: "QualityText",
    ExservicePrice: "Price",
  },
];

const Exservices = () => {
  return (
    <>
      <section className="menu section bd-container" id="Extra services">
        <span className="section-subtitle">
          <Text tid="ExservicesTitle" />
        </span>
        <h2 className="section-title">
          <Text tid="ExservicesText" />
        </h2>

        <div className="menu__container bd-grid">
          {ExserviceItemsArray.map((ExserviceItem, index) => {
            return (
              <ExserviceItems
                key={index}
                ExserviceImg={ExserviceItem.ExserviceImg}
                ExserviceTitle={ExserviceItem.ExserviceTitle}
                ExserviceText={ExserviceItem.ExserviceText}
                ExservicePrice={ExserviceItem.ExservicePrice}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Exservices;
