import React from 'react'
import Star from '../Svgs/Star'
import Btn from '../../Buttons/Btn'

function TourPurchase({ destination, price, id, router, isBought, isReviewed, handleReviewing }) {
  return (
    <div
          className="flex flex-col h-full flex-wrap items-start justify-center w-full
        web:gap-[30px] web:max-w-[430px] web:mt-[0px]
        tablet:max-w-[584px] tablet:mt-[0px]
        mt-[20px] w-[95%]"
        >
          <div
            className="flex 
          web:items-start web:flex-col 
          tablet:flex-row tablet:gap-[20px] tablet:justify-center
          flex-col mb-[20px]"
          >
            <h2
              className="text-[#081120] font-medium font-['Inter']  
            web:text-[31px] web:mb-[20px]
            tablet:text-2xl tablet:mb-[20px]
            text-xl mb-[10px]"
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
          flex-col-reverse items-start"
          >
            <p
              className="flex text-[#081120] font-medium font-['Inter'] 
            web:mb-[10px] web:flex-row web:text-2xl web:gap-[10px]
            tablet:text-xl target:flex-row-reverse tablet:mb-[20px] tablet:gap-[1px]
            mb-[30px] flex-row-reverse text-lg gap-[1px]"
            >
              <span>USD</span>
              <span>{price}</span>
            </p>

            <p
              className="text-[#13294b] font-normal font-['Inter'] leading-normal w-full
            web:mb-[10px] web:max-w-[430px] web:text-base
            tablet:mb-[20px] tablet:max-w-[430px] tablet:text-base 
            mb-[10px] text-sm"
            >
              Explore the beautiful buildings and green parks of Sofia’s biggest
              theaters. Take a walk trough a beautiful sightseeing in the
              historical center of the city.
            </p>
          </div>

          <div className="web:w-[430px] tablet:w-[282px] w-full">
            {isBought ? (
              <Btn
              variant="filled"
              text="Rate This Tour"
              fullWidth
              disabled={isReviewed}
              onClick={handleReviewing}
            />
          ) : (
              <Btn
              type="submit"
              variant="filled"
              text="Buy Tour"
              fullWidth
              onClick={() => router.push(`/payment?tourId=${id}`)}
            />
            )}
          </div>
        </div>
  )
}

export default TourPurchase