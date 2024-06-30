"use client";
import React from "react";
import Btn from "../../../Buttons/Btn.jsx";

function NavigationButtons({ prevStep, handleFinish }) {
  return (
    <div
      className="flex items-start w-full h-[138px] bg-neutral-50 border-t border-gray-200 
            web:justify-start web:gap-[324px]
            tablet:justify-center tablet:gap-[324px]
            phone:justify-center"
    >
      <Btn
        variant="transparent"
        className="hidden tablet:inline-flex web:inline-flex text-center text-gray-900 text-base font-semibold px-4 py-3 w-32 h-[43px] justify-center items-center border-b-2 border-neutral-50 web:ml-[100px]"
        text="Prev"
        onClick={prevStep}
      />
      <Btn
        variant="fullWidth"
        className="text-center text-gray-900 text-base font-semibold px-4 py-3 w-32 h-[43px] justify-center items-center inline-flex border-b-2 border-yellow-500"
        text="Next"
        onClick={handleFinish}
      />
    </div>
  );
}

export default NavigationButtons;
