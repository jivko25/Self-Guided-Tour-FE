import React from "react";
import ArrowUndoOutline from "../Svgs/ArrowUndoOutline";
import ArrowRedoOutline from "../Svgs/ArrowRedoOutline";

function HowJauntsterWorks() {
  return (
    <div
      className="flex flex-col items-center h-full mb-[50px]
      web:mt-[100px] web:gap-[50px] 
      tablet:m-[50px]
      m-[35px]"
    >
      <h1
        className="text-[#081120] font-medium font-['Inter'] leading-9
        web:text-2xl web:mb-[20px] 
        tablet:m-[20px] 
        text-lg text-center"
      >
        How Jauntster works
      </h1>

      <div
        className="flex justify-center
        web:gap-[30px] web:flex-row web:mt-[0px] web:mb-[50px]
        flex-col gap-[100px] mt-[70px] mb-[70px]"
      >
        <div
          className="flex items-center justify-evenly  bg-neutral-50 rounded-[5px] border border-[#d1d0d8] relative w-full h-full
          web:max-w-[733px] web:min-h-[278px] web:p-[33px]
          tablet:max-w-[583px] tablet:min-h-[278px] tablet:p-[20px]
          max-w-[361px] min-h-[278px] p-[20px]"
        >
          <div
            className="absolute flex bg-[#E7EAED] border-[10px] border-[#FAFAFA] rounded-full items-center justify-center gap-[1px]
            top-[-50px] px-[15px] py-[30px]
            web:h-[110px] web:w-[110px] web:top-[-55px]
            tablet:h-[110px] tablet:w-[110px] tablet:top-[-55px]
            h-[90px] w-[90px] top-[-45px]"
          >
            <ArrowUndoOutline />
            <ArrowRedoOutline />
          </div>

          <div
            className="flex flex-col 
            web:mt-[30px] web:items-start
            tablet:mt-[10px] items-center"
          >
            <h1
              className="text-[#081120]font-medium font-['Inter'] leading-[30px] font-medium
              web:mb-[20px] web:text-xl web:mt-[5px]
              tablet:text-lg tablet:mb-[20px] tablet:mt-[40px]
              text-sm mt-[30px] mb-[10px] text-center"
            >
              How to get the most of the tour and its story
            </h1>
            <p
              className="flex text-[#13294b] font-normal font-['Inter'] leading-normal w-full
              web:max-w-[667px] web:text-start web:text-base
              tablet:max-w-[535px] tablet:text-center tablet:text-base
              text-sm max-w-[300px]  text-center items-center"
            >
              You can start the tour from a fixed starting point. The route then
              continuous in direction, chosen from the publisher. It helps you
              to better understand the story behind the landmarks. If you like
              you can use Resume to pick up a tour from the closest location
              whenever you like.
            </p>
          </div>
        </div>

        <div
          className="flex items-center justify-evenly  bg-neutral-50 rounded-[5px] border border-[#d1d0d8] relative w-full h-full
          web:max-w-[733px] web:min-h-[278px] web:p-[33px]
          tablet:max-w-[583px] tablet:min-h-[278px] tablet:p-[20px]
          max-w-[361px] min-h-[278px] p-[20px]"
        >
          <div
            className="absolute flex bg-[#E7EAED] border-[10px] border-[#FAFAFA] rounded-full items-center justify-center gap-[1px]
            top-[-50px] px-[15px] py-[30px]
            web:h-[110px] web:w-[110px] web:top-[-55px]
            tablet:h-[110px] tablet:w-[110px] tablet:top-[-55px]
            h-[90px] w-[90px] top-[-45px]"
          >
            <ArrowUndoOutline />
            <ArrowRedoOutline />
          </div>

          <div
            className="flex flex-col 
            web:mt-[30px] web:items-start
            tablet:mt-[10px] items-center"
          >
            <h1
              className="text-[#081120]font-medium font-['Inter'] leading-[30px] font-medium
              web:mb-[20px] web:text-xl web:mt-[5px]
              tablet:text-lg tablet:mb-[20px] tablet:mt-[40px]
              text-sm mt-[30px] mb-[10px] text-center"
            >
              How to get the most of the tour and its story
            </h1>
            <p
              className="flex text-[#13294b] font-normal font-['Inter'] leading-normal w-full
              web:max-w-[667px] web:text-start web:text-base
              tablet:max-w-[535px] tablet:text-center tablet:text-base
              text-sm max-w-[300px] text-center items-center"
            >
              You can start the tour from a fixed starting point. The route then
              continuous in direction, chosen from the publisher. It helps you
              to better understand the story behind the landmarks. If you like
              you can use Resume to pick up a tour from the closest location
              whenever you like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowJauntsterWorks;
