"use client";
import Web from "./Web/Web";
import Tablet from "./Tablet/Tablet";
import HeaderMobile from "./HeaderMobile.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext";

export default function Header({ isAuthenticated }) {
  const { session, setSession } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      setSession(isAuthenticated);
    } else {
      setSession(false);
    }
    // console.log(session);
  }, [setSession, isAuthenticated]);

  return (
    <>
      {/* Показваме Web компонента само при ширина на екрана по-голяма от 834px */}
      <header className="hidden web:flex w-full  items-center justify-center h-100px py-9">
        <Web isAuthenticated={session} />
      </header>

      {/* Показваме Tablet компонента само при ширина на екрана под 834px */}
      <header className="hidden tablet:flex web:hidden items-center justify-center w-full h-100px">
        <Tablet isAuthenticated={session} />
      </header>

      <header className="tablet:hidden z-50">
        <HeaderMobile isAuthenticated={session} />
      </header>
    </>
  );
}
