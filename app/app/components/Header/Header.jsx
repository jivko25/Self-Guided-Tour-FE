"use client";
import Web from "./Web/Web";
import Tablet from "./Tablet/Tablet";
import HeaderMobile from "./HeaderMobile.jsx";

export default function Header({ isAuthenticated }) {
  return (
    <>
      {/* Показваме Web компонента само при ширина на екрана по-голяма от 834px */}
      <div className="hidden web:flex w-full  items-center justify-center h-100px py-9">
        <Web />
      </div>

      {/* Показваме Tablet компонента само при ширина на екрана под 834px */}
      <div className="hidden tablet:flex web:hidden items-center justify-center h-100px">
        <Tablet />
      </div>

      <div className="tablet:hidden ">
        <HeaderMobile />
      </div>
    </>
  );
}
