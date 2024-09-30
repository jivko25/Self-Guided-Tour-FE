"use client";
import React, { useEffect } from "react";

import TopSection from "./TopSection/TopSection";
import InfoCardsSection from "./InfoCardsSection/InfoCardsSection";
import Summary from "./Summary/Summary";
import BgBestPlaces from "./BgBestPlaces/BgBestPlaces";
import BgBiggestTowns from "./BgBiggestTowns/BgBiggestTowns";
import HowItWorks from "./HowItWorks/HowItWorks";
import MakeYourOwnTours from "./MakeYourOwnTours/MakeYourOwnTours";
import Testimonials from "./Testimonials/Testimonials";

function HomePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-[50px]">
      <TopSection />

      <section
        className="flex justify-center items-center w-full mt-[50px] h-full
        web:flex-col
        tablet:flex-col
        phone:flex-col-reverse
        flex-col-reverse
      "
      >
        <InfoCardsSection />
        <Summary />
        <BgBestPlaces />
        <BgBiggestTowns />
      </section>

      <HowItWorks />
      <MakeYourOwnTours />
      <Testimonials/>
    </div>
  );
}

export default HomePage;
