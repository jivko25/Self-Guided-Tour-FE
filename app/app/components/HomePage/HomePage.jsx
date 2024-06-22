"use client";
import React from "react";
import Search from "@/app/components/Search/Search";

function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-custom-image bg-cover bg-center z-[-5]
      smallPhone:max-h-[245px] smallPhone:brightness-50 smallPhone:phone:max-h-none 
      phone:max-h-[245px] phone:brightness-50 phone:tablet:max-h-none 
      tablet:brightness-50 tablet:max-h-[554px]
      web:w-full web:h-[655px] web:tablet:max-h-none web:brightness-50 "
      ></div>
      <section className="flex flex-col items-center web:justify-center web:h-[535px] w-full ">
        <h1
          className="text-center text-white font-['Inter Tight']
        web:text-[64px] web:font-bold web:mb-[35px]
        "
        >
          Heading
        </h1>
        <p
          className="text-center text-white 
        web:text-[32px] web:font-medium web:mb-[55px]
        "
        >
          Subheading
        </p>
        <div className="web:mb-[35px]">
          <Search variant="default" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
