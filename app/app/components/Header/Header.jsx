"use client";
import Web from "./Web/Web";
import Tablet from "./Tablet/Tablet";
import HeaderMobile from "./HeaderMobile.jsx";

export default function Header({ isAuthenticated }) {
  return (
    <>
      {/* Показваме Web компонента само при ширина на екрана по-голяма от 834px */}
      <header className="hidden web:flex w-full  items-center justify-center h-100px py-9">
        <Web />
      </header>

      {/* Показваме Tablet компонента само при ширина на екрана под 834px */}
      <header className="hidden tablet:flex web:hidden items-center justify-center h-100px">
        <Tablet />
      </header>

      <header className="tablet:hidden ">
        <HeaderMobile />
      </header>
    </>
  );
}
