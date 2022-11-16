import React from "react";
import "./style.css";

const MainWrapper = (props) => {
  return (
    <>
      <main className="l-main">{props.children}</main>
    </>
  );
};

export default MainWrapper;
