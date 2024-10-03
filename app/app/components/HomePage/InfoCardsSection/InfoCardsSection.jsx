"use client";

import React from "react";
import LocationSvgHomePage from "../Svgs/LocationSvgHomePage";
import BeIndependentSvgHomePage from "../Svgs/BeIndependentSvgHomePage";
function InfoCardsSection() {
  return (
    <section
      className="flex justify-center items-center w-[95%] h-full
    web:flex-row web:gap-[30px] min-h-[200px]
    tablet:flex-row tablet:gap-[20px]
    phone:flex-col phone:gap-[15px]
    flex-col gap-[10px]
    "
    >
      <div
        className="flex items-center justify-center border-[1px] border-[#D1D0D8] rounded-[15px] 
      web:w-[582px] web:h-[172px] web:gap-[20px] web:flex-row
      tablet:w-[383px] tablet:h-[172px] tablet:gap-[20px] tablet:flex-row 
      phone:w-[361px] phone:h-[92px] phone:gap-[20px]
      w-full h-[92px] gap-[20px]
      "
      >
        <BeIndependentSvgHomePage
          className="
            web:w-[107px] web:h-[124px]
            tablet:w-[117px] tablet:h-[134px] tablet:px-[10px]
            phone:w-[68px] phone:h-[78.80px]
            w-[40px] h-[68px]
            "
        />
        <div className="flex flex-col">
          <h4
            className="text-[#081120] font-medium   leading-[30px] 
          web:text-xl web:text-start web:mb-[10px]
          tablet:text-xl tablet:text-start tablet:mb-[10px]
          phone:text-base phone:mb-[5px]
          text-base mb-[0px]
          "
          >
            Be Independent
          </h4>
          <p
            className="text-[#13294b] font-normal   leading-normal
            web:text-base web:w-[278px] web:h-[48px] web:text-start
            tablet:text-base tablet:w-[215px] tablet:h-[48px] tablet:text-start
            phone:text-[13px] phone:w-[223px] phone:h-[32px]
            text-[12px] w-[200px] h-[32px]
            "
          >
            Feel free to enjoy your tour without groups, with your own pace.
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-center border-[1px] border-[#D1D0D8] rounded-[15px] 
      web:w-[582px] web:h-[172px] web:gap-[20px] web:flex-row
      tablet:w-[383px] tablet:h-[172px] tablet:gap-[20px] tablet:flex-row
      phone:w-[361px] phone:h-[92px] phone:gap-[20px] phone:flex-row-reverse
      w-full h-[92px] gap-[20px] flex-row-reverse
      "
      >
        <LocationSvgHomePage
          className="
            web:w-[107px] web:h-[124px]
            tablet:w-[117px] tablet:h-[134px] tablet:px-[10px]
            phone:w-[68px] phone:h-[78.80px]
            w-[67px] h-[78px]
            "
        />
        <div className="flex flex-col">
          <h4
            className="text-[#081120] font-medium   leading-[30px] 
          web:text-xl web:text-start web:mb-[10px]
          tablet:text-xl tablet:text-start tablet:mb-[10px]
          phone:text-base phone:text-end phone:mb-[5px]
          text-base text-end mb-[0px]
          "
          >
            Share with Others
          </h4>
          <p
            className="text-[#13294b] font-normal   leading-normal
            web:text-base web:w-[278px] web:h-[48px] web:text-start
            tablet:text-base tablet:w-[215px] tablet:h-[48px] tablet:text-start
            phone:text-[13px] phone:w-[223px] phone:h-[32px] phone:text-end
            text-[12px] w-[200px] h-[32px] text-end
            "
          >
            Share your favorite places with fellow travelers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoCardsSection;
