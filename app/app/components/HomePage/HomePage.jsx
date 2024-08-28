"use client";
import React, { useEffect } from "react";

import TopSection from "./TopSection/TopSection";
import InfoCardsSection from "./InfoCardsSection/InfoCardsSection";
import Summary from "./Summary/Summary";
import BgBestPlaces from "./BgBestPlaces/BgBestPlaces";

function HomePage() {
  

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
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
      </section>

      {/* <Card imageSrc=""  testimonial = {true}/> */}
    </div>
  );
}

export default HomePage;
