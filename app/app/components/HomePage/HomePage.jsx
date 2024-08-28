"use client";
import React, { useEffect } from "react";

import TopSection from "./TopSection/TopSection";
import InfoCardsSection from "./InfoCardsSection/InfoCardsSection";
import Summary from "./Summary/Summary";
import BgBestPlaces from "./BgBestPlaces/BgBestPlaces";
import BgBiggestTowns from "./BgBiggestTowns/BgBiggestTowns";

function HomePage() {
  

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-[100px]">
      <TopSection />

      <section
        className="flex justify-center items-center w-full mt-[50px] h-full
        web:flex-col
        tablet:flex-col
        phone:flex-col-reverse
        smallPhone:flex-col-reverse
      "
      >
        <InfoCardsSection />
        <Summary />
        <BgBestPlaces />
        <BgBiggestTowns/>
      </section>

      
    </div>
  );
}

export default HomePage;
