import React, { useState } from "react";
import ChangeLang from "./ChangeLang";
import { Text } from "../Context/multilang-context";

import "./style.css";
import MenuItems from "./MenuItems";

const Header = () => {
  const [navMenu, setNavMenu] = useState("nav__menu");
  const [navMenuActive, setNavMenuActive] = useState("Home");
  const [darkIcon, setDarkIcon] = useState("moon");

  const menuList = [
    "Home",
    "About",
    "Services",
    "Extra services",
    "Contact us",
  ];

  const navShowHandler = () => {
    setNavMenu("nav__menu show-menu");
  };
  const navHideHandler = (e) => {
    setNavMenu("nav__menu");
    setNavMenuActive(e.target.innerText);
  };

  const navHideLangHandler = () => {
    setNavMenu("nav__menu");
  };

  const darkThemehandler = () => {
    document.body.classList.toggle("dark-theme");
    darkIcon === "moon" ? setDarkIcon("sun") : setDarkIcon("moon");
  };
  return (
    <>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="#Home" className="nav__logo">
            <Text tid="siteLogo" />
          </a>
          <div className={navMenu} id="nav-menu">
            <ul className="nav__list">
              {menuList.map((menuItem, index) => {
                return (
                  <MenuItems
                    key={index}
                    menuItem={menuItem}
                    navHideHandler={navHideHandler}
                    navMenuActive={navMenuActive}
                  />
                );
              })}

              <li onClick={navHideHandler}>
                <i
                  className={"bx bx-" + darkIcon + " change-theme"}
                  id="theme-button"
                  onClick={darkThemehandler}
                ></i>
              </li>
              <ChangeLang navHideLang={navHideLangHandler} />
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={navShowHandler}>
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
