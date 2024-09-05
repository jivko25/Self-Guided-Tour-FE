import React from "react";
import Walk from "../Svg/Walk";
import LocationSharp from "../Svg/LocationSharp";

function TourInfo({ estimatedDuration, destination }) {
  return (
    <div
      className="flex border-b-2  border-[#d1d0d8] 
        web:h-[250px] web:w-[80%] web:justify-around web:items-center
        tablet:flex-row-reverse tablet:h-[250px] tablet:w-[95%] tablet:justify-center tablet:gap-[20px] tablet:items-center
        phone:flex-col-reverse phone:items-start phone:justify-center phone:gap-[30px] phone:w-[95%] phone:py-[40px]
        "
    >
      <div className="flex items-center">
        <Walk className="web:h-[60px] web:w-[60px] tablet:h-[40px] tablet:w-[40px]  phone:h-[32px] phone:w-[32px]" />
        <div>
          <h2
            className="text-[#081120] font-medium font-['Inter'] 
            web:text-xl 
            tablet:text-lg
            phone:text-base
            "
          >
            This is a 2.5km walking tour
          </h2>
          <p
            className="text-[#13294b] font-normal font-['Inter']
            web:text-base
            tablet:text-sm
            phone:text-sm
            "
          >
            To complete it you will need average of {estimatedDuration}min.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <LocationSharp className="web:h-[60px] web:w-[60px] tablet:h-[40px] tablet:w-[40px]  phone:h-[32px] phone:w-[32px]" />
        <div>
          <h2
            className="text-[#081120] font-medium font-['Inter'] 
            web:text-xl 
            tablet:text-lg
            phone:text-base

            "
          >
            This tour is located in {destination}
          </h2>
          <p
            className="text-[#13294b]font-normal font-['Inter']
            web:text-base
            tablet:text-sm
            phone:text-sm
            "
          >
            {destination} is the capital of Bulgaria
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourInfo;
