"use client";
import useScreenSize from "@/app/hooks/useScreenSize.jsx";

import Header from "../Header/Header.jsx";
import HeaderMobile from "../Header/HeaderMobile.jsx";
import Footer from "../Footer.jsx";

export default function NavLayout() {
  const screenWidth = useScreenSize();

  return (
    <div className="tablet:w-full">
      {screenWidth < 834 ? (
        <HeaderMobile />
      ) : (
        <>
          <Header />
          <Footer />
        </>
      )}
    </div>
  );
}
