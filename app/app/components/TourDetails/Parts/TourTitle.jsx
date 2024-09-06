import React from "react";
import Star from "../Svg/Star";

function TourTitle({ title }) {
  return (
    <div
      className="flex justify-start items-center w-full 
        web:gap-[30px]
        tablet:gap-[30px] tablet: mb-[30px]
        phone:gap-[20px]
        smallPhone:gap-[20px]
        "
    >
      <h1
        className="text-[#081120] font-['Inter'] font-medium 
          web:text-[39px] web:leading-[58.50px]
          tablet:text-[32px] tablet:leading-[48px]
          phone:text-[25px]
          smallPhone:text-[25px]
          "
      >
        {title}
      </h1>
      <div className="flex gap-[10px]">
        <Star />
        <span className="text-[#13294b] text-base font-normal font-['Inter'] leading-none border-2 border-[#FAFAFA] border-b-[#e8b600]">
          4.8
        </span>
      </div>
    </div>
  );
}

export default TourTitle;
