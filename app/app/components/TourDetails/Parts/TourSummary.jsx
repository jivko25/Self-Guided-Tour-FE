import React from 'react'

function TourSummary({ summary }) {
  return (
    <div
          className="flex flex-col h-full flex-wrap w-full
        web:gap-[50px] web:max-w-[733px]
        tablet:max-w-[584px]
        max-w-[100%]"
        >
          <div className="mb-[40px] h-full">
            <h3
              className="text-[#081120] font-medium   leading-9  
            web:mb-[20px] web:text-2xl
            tablet:mb-[20px] tablet:text-2xl
            mb-[20px] text-base"
            >
              About the tour
            </h3>
            <p
              className="text-[#13294b] font-normal   leading-normal w-full
            web:max-w-[733px] web:text-base 
            tablet:max-w-[584px] tablet:text-base 
            max-w-full text-sm"
            >
              {summary}
            </p>
          </div>

          {/* <div
            className="
          tablet:h-full tablet:mb-[20px] 
          phone:h-full phone:mb-[20px]"
          >
            <h3
              className="text-[#081120] text-2xl font-medium   leading-9 
            web:mb-[20px] web:text-2xl
            tablet:mb-[20px] tablet:text-2xl
            phone:mb-[20px] phone:text-base
            "
            >
              Directions to starting point
            </h3>
            <p
              className=" text-[#13294b] text-base font-normal   leading-normal 
            web:max-w-[733px] web:text-base 
            tablet:max-w-[584px] tablet:text-base 
            phone:max-w-full phone:text-sm
            "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.
            </p>
          </div> */}
        </div>
  )
}

export default TourSummary