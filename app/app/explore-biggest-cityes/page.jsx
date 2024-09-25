"use client";
import React from "react";
import CardSphera from "../components/HomePage/CardSphera/CardSphera";
import { useRouter } from "next/navigation";
import sofia from "../public/images/sofia.png";
import burgas from "../public/images/burgas.png";
import varna from "../public/images/varna.png";
import plovdiv from "../public/images/plovdiv.png";

function page() {
  const router = useRouter();

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
      thumbnailImageUrl: varna,
      destination: "Varna",
    },
    {
      thumbnailImageUrl: burgas,
      destination: "Burgas",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-full">
      <h1 className="text-center text-[#081120] text-[39px] font-medium font-['Inter'] leading-[58.50px] my-[100px]">
        Discover your next exiting trip
      </h1>
      <div className="flex flex-col w-full h-full p-4 ">
        <h3 className="flex w-full justify-start items-start text-[#081120] text-[31px] font-medium font-['Inter'] mb-[50px]">
          Explore Biggest Towns in Bulgaria
        </h3>
        <div className="flex w-full items-center justify-center gap-12  flex-wrap">
          {exploreBiggestCities.map((place, index) => (
            <CardSphera
              key={index}
              thumbnailImageUrl={place.thumbnailImageUrl}
              destination={place.destination}
              onClick={() =>
                router.push(`/explore?search=${place.destination}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
