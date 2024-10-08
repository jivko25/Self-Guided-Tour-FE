"use client";
import Link from "next/link";
import React from "react";
import SeeMoreSvgHomePage from "../Svgs/SeeMoreSvgHomePage";
import { useRouter } from "next/navigation";
import CardSphera from "../CardSphera/CardSphera";
import sofia from "../../../public/images/SofiaImgHome.png";
import plovdiv from "../../../public/images/PlovdivImgHome.png";
import veliko from "../../../public/images/VelikoTurnovoImgHome.png";
import ruse from "../../../public/images/RuseImgHome.png";

function BgBiggestTowns() {
  const exploreBiggestCities = [
    {
      thumbnailImageUrl: sofia,
      destination: "Sofia",
    },
    {
      thumbnailImageUrl: plovdiv,
      destination: "Plovdiv",
    },
    {
      thumbnailImageUrl: veliko,
      destination: "Veliko Tarnovo",
    },
    {
      thumbnailImageUrl: ruse,
      destination: "Ruse",
    },
  ];
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center gap-[20px] w-full h-full mb-[50px]
      web:max-w-[1792px] web:min-h-[752px] web:gap-[30px]
      tablet:px-[10px] tablet:gap-[30px] tablet:min-h-[450px]
       
      "
    >
      <div
        className="flex items-center w-[95%] max-w-[1792px]
      web:justify-between web:mb-[50px]
      tablet:justify-between tablet:mb-[30px]
      justify-center
      "
      >
        <h2
          className="text-[#081120] font-medium   leading-[58.50px]
          web:text-[39px]
          tablet:text-[31px]
          text-base px-[10px]
          "
        >
          Explore Biggest Towns in Bulgaria
        </h2>
        <Link
          className="hidden space-x-2 items-start
        web:flex web:h-[19px]
        tablet:flex tablet:h-[19px]
      "
          href="/explore-biggest-cityes"
        >
          <span
            className="text-[#081120] text-base font-semibold  
          web:w-[74px] web:h-[19px] web:text-base
          tablet:w-[74px] tablet:h-[19px] tablet:text-base
          "
          >
            See More
          </span>
          <SeeMoreSvgHomePage
            className="hidden
          web:w-6 web:h-6 web:block
          tablet:w-6 tablet:h-6 tablet:block
          "
          />
        </Link>
      </div>
      <div
        className="flex items-center justify-evenly w-full 
    web:max-w-[1792px] web:gap-[25px]
    gap-[10px]
    "
      >
        {exploreBiggestCities.map((place, index) => (
          <div key={index} >
            <CardSphera
              thumbnailImageUrl={place.thumbnailImageUrl}
              destination={place.destination}
              onClick={() =>
                router.push(`/explore?page=1&search=${place.destination}`)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BgBiggestTowns;
