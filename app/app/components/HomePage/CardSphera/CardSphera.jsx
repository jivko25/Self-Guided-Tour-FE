"use client"
import Image from "next/image";
import React from "react";

function CardSphera({ thumbnailImageUrl, destination, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer
      "
      onClick={onClick}
    >
      <Image
        src={thumbnailImageUrl}
        alt={destination}
        width={300}
        height={300}
        className=" rounded-full object-cover
        web:w-[300px] web:h-[300px] web:mb-[20px]
        tablet:w-40 tablet:h-40 tablet:mb-[20px]
        w-[60px] h-[60px] mb-[10px]
        "
        onClick={onClick}
      />

      <h2
        className="text-[#081120]  font-medium   text-center
        web:text-[31px] 
        tablet:text-[25px] 
        text-[13px] 
        "
      onClick={onClick}
      >
        {destination}
      </h2>
    </div>
  );
}

export default CardSphera;
