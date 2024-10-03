"use client";
import React from "react";
import Search from "@/app/components/Search/Search";
function TopSection() {
  return (
    <>
      <div
        className="absolute brightness-75 top-0 left-0 w-full bg-custom-image bg-cover bg-center z-[-5]
                web:h-[700px]
                tablet:h-[554px]
                phone:h-[245px]
                h-[222px]
                "
      ></div>

      <section
        className="flex flex-col items-center w-full justify-center 
                web:h-[535px]  
                tablet:py-[150px] tablet:h-[554px] 
                phone:relative phone:h-[245px] 
                relative h-[222px]
                "
      >
        <h1
          className="font-bold text-center text-white font-['Inter Tight']
                    web:text-[190px]
                    tablet:text-[120px]
                    phone:text-[70px]
                    text-6xl
                    "
        >
          Jauntster
        </h1>
        <p
          className="text-base font-medium text-center text-white
                    web:text-[32px] web:mb-[65px] web:tracking-[.4em]
                    tablet:text-2xl tablet:mb-[70px] tablet:tracking-[.25em]
                    phone:text-base phone:mb-[40px] phone:tracking-[0.15em]
                    mb-[40px] tracking-[.05em]
                    
                    "
        >
          DISCOVER LIKE A LOCAL
        </p>
        <div
          className="
                    web:mb-[70px] web:static web:phone:absolute-none 
                    tablet:static tablet:mb-[0px]
                    phone:absolute phone:bottom-[-20px]
                    absolute bottom-[-25px]"
        >
          <Search variant="default" />
        </div>
      </section>
    </>
  );
}

export default TopSection;
