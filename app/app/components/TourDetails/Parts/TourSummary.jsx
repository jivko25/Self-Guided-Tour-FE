import React from 'react'

function TourSummary({ summary }) {
  return (
    <div
          className="flex flex-col h-full flex-wrap w-full
        web:gap-[50px] web:max-w-[733px]
        tablet:max-w-[584px]
        phone:max-w-[95%]
        smallPhone:max-w-[95%]
        "
        >
          <div className="tablet:mb-[40px] phone:mb-[40px] h-full">
            <h3
              className="text-[#081120] font-medium font-['Inter'] leading-9  
            web:mb-[20px] web:text-2xl
            tablet:mb-[20px] tablet:text-2xl
            phone:mb-[20px] phone:text-base
            smallPhone:mb-[20px] smallPhone:text-base
            "
            >
              About the tour
            </h3>
            <p
              className="text-[#13294b] font-normal font-['Inter'] leading-normal w-full
            web:max-w-[733px] web:text-base 
            tablet:max-w-[584px] tablet:text-base 
            phone:max-w-full phone:text-sm
            smallPhone:max-w-full smallPhone:text-sm
            "
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
              className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9 
            web:mb-[20px] web:text-2xl
            tablet:mb-[20px] tablet:text-2xl
            phone:mb-[20px] phone:text-base
            "
            >
              Directions to starting point
            </h3>
            <p
              className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal 
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