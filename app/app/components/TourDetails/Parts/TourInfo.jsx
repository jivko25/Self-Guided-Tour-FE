import React from "react";
import Walk from "../Svgs/Walk";
import LocationSharp from "../Svgs/LocationSharp";

function TourInfo({ estimatedDuration, destination }) {
  return (
    <div
        className="flex border-b-2 border-[#d1d0d8] 
        web:h-[250px] web:w-[80%] web:justify-around web:items-center
        tablet:flex-row-reverse tablet:h-[250px] tablet:w-[95%] tablet:justify-center tablet:gap-[20px] tablet:items-center
        flex-col-reverse items-start justify-center gap-[30px] w-[100%] py-[40px]"
      >
        <div className="flex items-center">
          <Walk className="
          web:h-[60px] web:w-[60px]  
          tablet:w-[40px] tablet:h-[40px]
          h-[32px] w-[32px]" />
          <div>
            <h2
              className="text-[#081120] font-medium   
            web:text-xl 
            tablet:text-lg
            text-base
            "
            >
              {/* This is a 2.5km walking tour */}
              To complete it you will need average of {estimatedDuration} min.
            </h2>
            {/* <p
              className="text-[#13294b] font-normal  
            web:text-base
            text-sm"
            >
              To complete it you will need average of {estimatedDuration}min.
            </p> */}
          </div>
        </div>

        <div className="flex items-center">
          <LocationSharp className="
          web:h-[60px] web:w-[60px] 
          tablet:h-[40px] tablet:w-[40px]  
          h-[32px] w-[32px]" />
          <div>
            <h2
              className="text-[#081120] font-medium   
            web:text-xl 
            tablet:text-lg
            text-base"
            >
              This tour is located in {destination}
            </h2>
            <p
              className="text-[#13294b]font-normal  
            web:text-base
            text-sm"
            >
            </p>
          </div>
        </div>
      </div>
  );
}

export default TourInfo;
