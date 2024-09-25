import Image from "next/image";
import React from "react";

function page() {
    const exploreBiggestCities = [
        {
            image: "/images/sofia.jpg",
            city: 'Sofia'
        },
        {
            image: "/images/plovdiv.jpg",
            city: 'Plovdiv'
        },
        {
            image: "/images/varna.jpg",
            city: 'Varna'
        },
        {
            image: "/images/burgas.jpg",
            city: 'Burgas'
        },
    ];
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-full">
      <h1 className="text-center text-[#081120] text-[39px] font-medium font-['Inter'] leading-[58.50px] my-[100px]">Discover your next exiting trip</h1>
      <div className="flex flex-col w-full h-full p-4 ">
        <h3 className="flex w-full justify-start items-start text-[#081120] text-[31px] font-medium font-['Inter']">
          Explore Biggest Towns in Bulgaria
        </h3>
        <div>

        </div>
      </div>
    </div>
  );
}

export default page;
