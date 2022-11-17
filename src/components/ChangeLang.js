import React, { useState, useContext } from "react";
import { LanguageContext } from "../Context/multilang-context";

import "./style.css";

const selectOptions = ["En", "Fa"];

const ChangeLang = (props) => {
  const [siteLang, setSiteLang] = useState(selectOptions[1]);
  const activeLink = "active-link";
  const activeEnIcon = siteLang === "En" ? activeLink : "";
  const activeFaIcon = siteLang === "Fa" ? activeLink : "";
  const { userLanguageChange } = useContext(LanguageContext);

  const enClickHandler = () => {
    userLanguageChange("en");
    setSiteLang("En");
    props.navHideLang();
    document.body.style.fontFamily = "Poppins";
    document.body.style.direction = "ltr";
  };

  const faClickhandler = () => {
    userLanguageChange("fa");
    setSiteLang("Fa");
    props.navHideLang();
    document.body.style.fontFamily = "Vazir";
    document.body.style.direction = "rtl";
  };

  return (
    <>
      <li className={`lang__link ` + activeEnIcon} onClick={enClickHandler}>
        En
      </li>
      <li className="lang__link">|</li>
      <li className={`lang__link ` + activeFaIcon} onClick={faClickhandler}>
        Fa
      </li>
    </>
  );
};

export default ChangeLang;
