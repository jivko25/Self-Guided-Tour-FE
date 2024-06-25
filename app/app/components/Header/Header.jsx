"use client";
import Web from "./Web/Web";
import Tablet from "./Tablet/Tablet";
import HeaderMobile from "./HeaderMobile.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext";
import { usePathname } from "next/navigation";

export default function Header({ isAuthenticated }) {
  const { session, setSession } = useAuth();
  const [headerVisible, setHeaderVisible] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    if (isAuthenticated) {
      setSession(isAuthenticated);
    } else {
      setSession(false);
    }
    
    // handle mobile menu visibility
    if (pathname === '/sign-in' || pathname === '/create-account') {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  }, [setSession, isAuthenticated, pathname, setHeaderVisible]);

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

      <header className="tablet:hidden z-50" hidden={headerVisible}>
        <HeaderMobile isAuthenticated={session} />
      </header>
    </>
  );
}
