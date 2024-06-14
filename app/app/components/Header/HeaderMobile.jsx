"use client";
import { useState } from "react";
import HeaderMobileItem from "./HeaderMobileItem.jsx";

import Explore from "../../public/explore.svg";
import ExploreFocus from "../../public/explore-focus.svg";
import ExploreDark from "../../public/explore-dark.svg";
import ExploreFocusDark from "../../public/explore-focus-dark.svg";

import Tours from "../../public/tours.svg";
import ToursFocus from "../../public/tours-focus.svg";
import ToursDark from "../../public/tours-dark.svg";
import ToursFocusDark from "../../public/tours-focus-dark.svg";

import Menu from "../../public/menu.svg";
import MenuFocus from "../../public/menu-focus.svg";
import MenuDark from "../../public/menu-dark.svg";
import MenuFocusDark from "../../public/menu-focus-dark.svg";

export default function HeaderMobile() {
  const [focus, setFocus] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleFocus = (index) => {
    setFocus(index);
  };

  const navItems = [
    {
      icon: darkMode ? ExploreDark : Explore,
      iconFocus: darkMode ? ExploreFocusDark : ExploreFocus,
      text: "Explore",
    },
    {
      icon: darkMode ? ToursDark : Tours,
      iconFocus: darkMode ? ToursFocusDark : ToursFocus,
      text: "Tours",
    },
    {
      icon: darkMode ? MenuDark : Menu,
      iconFocus: darkMode ? MenuFocusDark : MenuFocus,
      text: "Menu",
    },
  ];

  return (
    <header className="flex  justify-around">
      <nav
        className={`${
          darkMode ? "bg-blue-950 text-white" : "bg-neutral-50 text-blue-950"
        }  fixed bottom-0 w-full shadow flex justify-center`}
      >
        <ul className="flex justify-around w-full">
          {navItems.map((item, i) => (
            <HeaderMobileItem
              key={i}
              icon={item.icon}
              iconFocus={item.iconFocus}
              text={item.text}
              index={i}
              handleFocus={handleFocus}
              isFocused={focus === i}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
