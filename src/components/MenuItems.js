import React, { useContext } from "react";
import "./style.css";
import { Text, LanguageContext } from "../Context/multilang-context";

const MenuItems = (props) => {
  const langContext = useContext(LanguageContext);
  const navHideHandler = (e) => {
    props.navHideHandler(e);
  };
  return (
    <>
      <li className="nav__item">
        <a
          href={"#" + props.menuItem}
          className={
            props.navMenuActive === langContext.dictionary[props.menuItem]
              ? "nav__link active-link"
              : "nav__link "
          }
          onClick={navHideHandler}
        >
          <Text tid={props.menuItem} />
        </a>
      </li>
    </>
  );
};

export default MenuItems;
