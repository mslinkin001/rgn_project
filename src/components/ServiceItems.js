import React from "react";
import "./style.css";

import { Text } from "../Context/multilang-context";

const ServiceItems = (props) => {
  return (
    <>
      <div className="services__content">
        <img
          src={props.serviceSVG}
          alt={props.serviceAlt}
          className="services__img"
        />

        <h3 className="services__title">
          <Text tid={props.serviceTitle} />
        </h3>
        <p className="services__description">
          <Text tid={props.serviceText} />
        </p>
      </div>
    </>
  );
};

export default ServiceItems;
