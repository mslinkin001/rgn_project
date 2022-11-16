import React from "react";
import "./style.css";
import { Text } from "../Context/multilang-context";

const ExserviceItems = (props) => {
  return (
    <>
      <div className="menu__content">
        <img src={props.ExserviceImg} alt="people" className="menu__img" />
        <h3 className="menu__name">
          <Text tid={props.ExserviceTitle} />
        </h3>
        <span className="menu__detail">
          <Text tid={props.ExserviceText} />
        </span>
        <span className="menu__preci">
          <Text tid={props.ExservicePrice} />
        </span>
      </div>
    </>
  );
};

export default ExserviceItems;
