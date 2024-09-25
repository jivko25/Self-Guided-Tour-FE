"use client"
import Image from "next/image";
import React from "react";

function CardSphera({ thumbnailImageUrl, destination, onClick }) {
  
  return (
    <div
      className="flex flex-col items-center justify-center
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
        phone:w-[60px] phone:h-[60px] phone:mb-[10px]
        smallPhone:w-[60px] smallPhone:h-[60px] smallPhone:mb-[10px]
        "
        onClick={onClick}
      />

      <h2
        className="text-[#081120]  font-medium font-['Inter']
        web:text-[31px]
        tablet:text-[25px]
        phone:text-[13px]
        smallPhone:text-[13px]
        "
      onClick={onClick}
      >
        {destination}
      </h2>
    </div>
  );
}

export default CardSphera;
