import React from 'react'
import Star from '../Svgs/Star'
import Btn from '../../Buttons/Btn'

function TourPurchase({ destination, price, id, router }) {
  return (
    <div
          className="flex flex-col h-full flex-wrap items-start justify-center w-full
        web:gap-[30px] web:max-w-[430px] web:mt-[0px]
        tablet:max-w-[584px] tablet:mt-[0px]
        phone:mt-[20px] phone:w-[95%]
        smallPhone:mt-[20px] smallPhone:w-[95%]
        "
        >
          <div
            className="flex 
          web:items-start web:flex-col 
          tablet:flex-row tablet:gap-[20px] tablet:justify-center
          phone:flex-col phone:mb-[20px]
          smallPhone:flex-col smallPhone:mb-[20px]
          "
          >
            <h2
              className="text-[#081120] font-medium font-['Inter']  
            web:text-[31px] web:mb-[20px]
            tablet:text-2xl tablet:mb-[20px]
            phone:text-xl phone:mb-[10px]
            smallPhone:text-xl smallPhone:mb-[10px]
            "
            >
              {destination} Theaters Tour
            </h2>
            <div className="flex gap-[10px] tablet:mt-[5px] ">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div
            className="flex 
          web:flex-col 
          tablet:flex-col-reverse 
          phone:flex-col-reverse phone:items-start
          smallPhone:flex-col-reverse smallPhone:items-start
          "
          >
            <p
              className="flex text-[#081120] font-medium font-['Inter'] 
            web:mb-[10px] web:flex-row web:text-2xl web:gap-[10px]
            tablet:text-xl target:flex-row-reverse tablet:mb-[20px] tablet:gap-[1px]
            phone:mb-[30px] phone:flex-row-reverse phone:text-lg phone:gap-[1px]
            smallPhone:mb-[30px] smallPhone:flex-row-reverse smallPhone:text-lg smallPhone:gap-[1px]
            "
            >
              <span>USD</span>
              <span>{price}</span>
            </p>

            <p
              className=" text-[#13294b] font-normal font-['Inter'] leading-normal w-full
            web:mb-[10px] web:max-w-[430px] web:text-base
            tablet:mb-[20px] tablet:max-w-[430px] tablet:text-base 
            phone:mb-[10px] phone:text-sm 
            smallPhone:mb-[10px] smallPhone:text-sm 
            "
            >
              Explore the beautiful buildings and green parks of Sofia’s biggest
              theaters. Take a walk trough a beautiful sightseeing in the
              historical center of the city.
            </p>
          </div>

          <div className="web:w-[430px] tablet:w-[282px] phone:w-[361px] smallPhone:w-[300px]">
            <Btn
              type="submit"
              variant="filled"
              text="Buy Tour"
              fullWidth
              onClick={() => router.push(`/payment?tourId=${id}`)}
            />
          </div>
        </div>
  )
}

export default TourPurchase