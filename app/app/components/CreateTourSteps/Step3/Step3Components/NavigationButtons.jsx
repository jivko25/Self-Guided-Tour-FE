"use client";
import React from "react";
import Btn from "../../../Buttons/Btn.jsx";

function NavigationButtons({ handlePrevStep, handleNextStep }) {
  return (
    <div
      className="flex items-start gap-4 w-full h-[128px] pt-[20px]
            web:justify-center web:max-w-[50%] web:gap-[380px] web:bg-neutral-50 web:border-t web:border-gray-200
            tablet:justify-center tablet:gap-[350px] tablet:bg-neutral-50 tablet:border-t tablet:border-gray-200
            phone:justify-center phone:mb-[50px] phone:pt-[20px]
            smallPhone:justify-center smallPhone:pt-[0px]"
    >
      <Btn
        variant="transparent"
        className=" text-center text-gray-900 text-base font-semibold px-4 py-3 w-[128px] h-[43px] justify-center items-center border-b-2 border-neutral-50
        web:inline-flex  
        tablet:inline-flex"
        text="Prev"
        onClick={handlePrevStep}
      />
      <Btn
        variant="fullWidth"
        className="text-center text-gray-900 hover:text-opacity-70 text-base font-semibold justify-center items-center flex border-b-2 border-yellow-500 hover:border-opacity-70 h-[43px]
        web:px-[16px] web:py-[12px] web:w-[128px]
        tablet:px-[16px] tablet:py-[12px] tablet:w-[128px]
        phone:px-[16px] phone:py-[12px] phone:w-[177px] 
        smallPhone:px-[16px] smallPhone:py-[12px] smallPhone:w-[130px]"
        text="Next"
        onClick={handleNextStep}
      />
    </div>
  );
}

export default NavigationButtons;
