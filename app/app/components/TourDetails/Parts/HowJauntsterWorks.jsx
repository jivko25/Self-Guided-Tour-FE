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
        className="text-[#081120] font-medium   leading-9
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
            h-[90px] w-[90px]"
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
              className="text-[#081120]font-medium   leading-[30px] font-medium
              web:mb-[20px] web:text-xl web:mt-[5px]
              tablet:text-lg tablet:mb-[20px] tablet:mt-[40px]
              text-sm mt-[30px] mb-[10px] text-center"
            >
              How to get the most of the tour and its story 
            </h1>
            <p
              className="flex text-[#13294b] font-normal   leading-normal w-full
              web:max-w-[667px] web:text-start web:text-base
              tablet:max-w-[535px] tablet:text-center tablet:text-base
              text-sm max-w-[300px]  text-center items-center"
            >
              This tour was designed with a story in mind! To get the full
              experience, it’s best to follow the route and visit the locations
              in the suggested order. Each stop builds on the last, giving you a
              deeper insight into the journey. Feel free to pause and take in
              the surroundings. The beauty of this tour is that you set the
              pace. Whether you’re capturing the perfect photo or stopping for a
              quick coffee break, there’s no rush!
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
            h-[90px] w-[90px]"
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
              className="text-[#081120]font-medium   leading-[30px] font-medium
              web:mb-[20px] web:text-xl web:mt-[5px]
              tablet:text-lg tablet:mb-[20px] tablet:mt-[40px]
              text-sm mt-[30px] mb-[10px] text-center"
            >
              Enjoy the real and interactive ways of the experience 
            </h1>
            <p
              className="flex text-[#13294b] font-normal   leading-normal w-full
              web:max-w-[667px] web:text-start web:text-base
              tablet:max-w-[535px] tablet:text-center tablet:text-base
              text-sm max-w-[300px] text-center items-center"
            >
              Make sure to check out the author’s photos, videos, and voice
              notes at each stop. These little details can unlock hidden stories
              and help you see things through their eyes. Some tours are best on
              foot, while others might have you biking or driving through scenic
              routes. Check the tour’s mode (walking, biking, or driving) to
              make sure you're ready to roll!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowJauntsterWorks;
