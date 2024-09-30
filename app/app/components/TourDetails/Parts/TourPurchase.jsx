import React, { useEffect, useState } from "react";
import Btn from "../../Buttons/Btn";
import StarRating from "../../StarRating/StarRating";

function TourPurchase({
  destination,
  price,
  id,
  router,
  isBought,
  isReviewed,
  handleReviewing,
  averageRating,
  sessionId,
  creatorId,
}) {
  const handleBuy = () => {
    if (!sessionId) {
      router.push("/sign-in");
    } else if (sessionId && creatorId != sessionId) {
      router.push(`/payment?tourId=${id}`);
    }
  };
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
          <StarRating starsCount={Math.floor(averageRating)} />
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
          <span>{price}</span>
        </p>

        <p
          className="text-[#13294b] font-normal font-['Inter'] leading-normal w-full
            web:mb-[10px] web:max-w-[430px] web:text-base
            tablet:mb-[20px] tablet:max-w-[430px] tablet:text-base 
            mb-[10px] text-sm"
        >
          Explore the beautiful buildings and green parks of Sofia’s biggest
          theaters. Take a walk trough a beautiful sightseeing in the historical
          center of the city.
        </p>
      </div>

      <div className="web:w-[430px] tablet:w-[282px] w-full">
        <div className="flex flex-col gap-y-2">
          {sessionId && (
            <>
              {(isBought || creatorId == sessionId) && (
                <Btn
                  variant="filled"
                  text="Preview"
                  fullWidth
                  link={`/preview/${id}`}
                />
              )}
            </>
          )}
          {sessionId && (
            <>
              {isBought && creatorId != sessionId && (
                <Btn
                  className={
                    isReviewed
                      ? "hover:!text-opacity-100 hover:border-blue-950"
                      : ""
                  }
                  variant="outlined"
                  text="Rate This Tour"
                  fullWidth
                  disabled={isReviewed}
                  onClick={handleReviewing}
                />
              )}
            </>
          )}
        </div>
        
        {(!sessionId || (!isBought && creatorId != sessionId)) && (
          <Btn
            type="submit"
            variant="filled"
            text="Buy Tour"
            fullWidth
            onClick={handleBuy}
          />
        )}
      </div>
    </div>
  );
}

export default TourPurchase;
