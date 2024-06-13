"use client";

import { useState } from "react";
import Web from "./Web/Web";
import Tablet from "./Tablet/Tablet";

export default function Header({ isAuthenticated }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Web />
      <Tablet />
    </>
  );
}
