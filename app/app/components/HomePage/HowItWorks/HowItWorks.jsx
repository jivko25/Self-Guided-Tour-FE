"use client";
import Link from "next/link";
import React from "react";
import imgGroup from "../../../public/images/Group35.png";
import Image from "next/image";

function HowItWorks() {
  return (
    <div
      className="w-full flex items-center bg-[#13294b] p-[5%]
    web:flex-row web:mt-[0px] web:justify-center web:gap-[50px] web:h-[992px]
    tablet:flex-row tablet:mt-[0px] tablet:justify-center tablet:gap-[50px] tablet:h-[573px]
    phone:flex-col phone:mt-[30px] phone:justify-center phone:gap-[20px] phone:min-h-[395px]
    flex-col mt-[30px] justify-center gap-[30px] min-h-[638px] pb-14 tablet:pb-0
    "
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          className="object-cover 
          webl:w-[75%] 
          web:w-[85%] 
          tablet:w-[450px]
          phone:w-[350px]
          w-[280px]
          "
          src={imgGroup}
          alt="Description of image 1"
        />
        
      </div>
      <div
        className="flex justify-center items-start flex-col h-full w-full 
          web:gap-[30px] web:items-start web:min-h-[922px] 
          tablet:gap-[20px] tablet:items-start tablet:min-h-[573px] 
          phone:gap-[30px] phone:items-center phone:min-h-[324px] 
          gap-[10px] items-center min-h-[324px] 
      
      "
      >
        <h1
          className="flex justify-start items-center text-white font-medium font-['Inter'] leading-[58.50px]
        web:text-[39px] 
        tablet:text-[25px] 
        phone:text-xl 
        text-xl 
        "
        >
          How it Works
        </h1>
        <p
          className="flex justify-start items-center text-white font-normal font-['Inter'] 
        web:text-base web:max-w-[582px] web:w-full web:text-start
        tablet:text-base tablet:max-w-[484px] tablet:w-full tablet:text-start
        phone:text-[13px] phone:max-w-[363px] phone:w-[90%] phone:text-center
        text-[13px] w-[95%] text-center
          "
        >
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor.
        </p>
        <p
          className="flex justify-start items-center text-white font-normal font-['Inter'] w-full
        web:text-base web:max-w-[577px] web:w-full web:text-start
        tablet:text-base tablet:max-w-[484px] tablet:w-full tablet:text-start
        phone:text-[13px] phone:max-w-[363px] phone:w-[90%] phone:text-center
        text-[13px] w-[95%] text-center
          "
        >
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor.
        </p>
        <div className="flex flex-col phone:flex-row justify-start items-center gap-[10px] ">
          <Link
            className="text-[#081120] bg-neutral-50 rounded-[5px] justify-center items-center flex
            web:w-[278px] web:h-[43px] web:text-base
            tablet:w-[182px] tablet:h-[43px] tablet:text-base
            phone:w-[177px] phone:h-[43px] phone:text-base
            w-[140px] h-[43px] text-base
            hover:text-opacity-70
            "
            href="/explore?page=1"
          >
            Explore
          </Link>
          <Link
            className="flex justify-center items-center rounded-[5px] border-2 border-white text-center text-white font-semibold font-['Inter']
            web:w-[280px] web:h-[43px] web:text-base
            tablet:w-[182px] tablet:h-[43px] tablet:text-base
            phone:w-[177px] phone:h-[43px] phone:text-base
            w-[140px] h-[43px] text-base
            hover:opacity-70
            "
            href="/create"
          >
            Create Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
