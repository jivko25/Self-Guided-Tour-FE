"use client";
import Link from "next/link";
import React from "react";
import imgFirst from "../../../public/images/HomePageImg1.png";
import imgSecond from "../../../public/images/HomePageImg2.jpeg";
import Image from "next/image";
import Btn from "../../Buttons/Btn";
function HowItWorks() {
  return (
    <div
      className="w-full flex items-center justify-center bg-[#13294b] h-full
    web:min-h-[922px] web:flex-row web:mt-[0px] web:justify-center
    tablet:min-h-[573px] tablet:flex-row tablet:mt-[0px] tablet:justify-center
    phone:min-h-[649px] phone:flex-col phone:mt-[30px] phone:justify-evenly
    smallPhone:min-h-[649px] smallPhone:flex-col smallPhone:mt-[30px] smallPhone:justify-center
    "
    >
      <div className="relative flex items-center justify-center w-full h-full 
            web:min-h-[922px]
            tablet:min-h-[573px]
            phone:min-h-[324px]
            smallPhone:min-h-[324px]
      ">
        <Image
          className="absolute rounded-[15px] z-10 object-cover w-full
          webl:max-w-[408px] webl:h-[440px] webl:top-[60px]   webl:left-[60px]
          web:max-w-[408px] web:h-[440px] web:top-[60px]   web:left-[60px]
          tablet:max-w-[156px] tablet:h-[169px] tablet:top-[60px]   tablet:left-[60px]
          phone:max-w-[156px] phone:h-[169px] phone:top-[30px]  phone:left-[60px]
          smallPhone:max-w-[114px] smallPhone:h-[123px] smallPhone:top-[30px]  smallPhone:left-[60px]
          
          "
          src={imgFirst}
          alt="Description of image 1"
        />
        <Image
          className="absolute  rounded-[15px]  object-cover w-full
          webl:max-w-[581px] webl:h-[700px] webl:top-[120px]  webl:right-[60px]
          web:max-w-[581px] web:h-[700px] web:top-[120px]  web:right-[60px]
          tablet:max-w-[223px] tablet:h-[269px] tablet:top-[120px]  tablet:right-[60px]
          phone:max-w-[223px] phone:h-[269px] phone:top-[60px]  phone:right-[60px]
          smallPhone:max-w-[162px] smallPhone:h-[195px] smallPhone:  smallPhone:right-[60px]
         
          "
          src={imgSecond}
          alt="Description of image 2"
        />
      </div>
      <div
        className="flex justify-center w-full items-start flex-col h-full
          web:gap-[30px] web:items-start web:min-h-[922px]
          tablet:gap-[7px] tablet:items-start tablet:min-h-[573px]
          phone:gap-[10px] phone:items-center phone:min-h-[324px]
          smallPhone:gap-[3px] smallPhone:items-center smallPhone:min-h-[324px]
      
      "
      >
        <h1
          className="flex justify-start items-center text-white font-medium font-['Inter'] leading-[58.50px]
        web:text-[39px] 
        tablet:text-[25px] 
        phone:text-xl 
        smallPhone:text-xl 
        "
        >
          How it Works
        </h1>
        <p
          className="flex justify-start items-center text-white font-normal font-['Inter'] 
        web:text-base web:max-w-[582px] web:w-full web:text-start
        tablet:text-base tablet:max-w-[484px] tablet:w-full tablet:text-start
        phone:text-[13px] phone:max-w-[363px] phone:w-[90%] phone:text-center
        smallPhone:text-[13px] smallPhone:w-[95%] smallPhone:text-center
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
        smallPhone:text-[13px] smallPhone:w-[95%] smallPhone:text-center
          "
        >
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor.
        </p>
        <div className="flex justify-start items-center gap-[10px] ">
          <Link
            className="text-[#081120] bg-neutral-50 rounded-[5px] justify-center items-center flex
            web:w-[278px] web:h-[43px] web:text-base
            tablet:w-[182px] tablet:h-[43px] tablet:text-base
            phone:w-[177px] phone:h-[43px] phone:text-base
            smallPhone:w-[140px] smallPhone:h-[43px] smallPhone:text-base
            "
            href="/explore"
          >
            Explore
          </Link>
          <Link
            className="flex justify-center items-center rounded-[5px] border-2 border-white text-center text-white font-semibold font-['Inter']
            web:w-[280px] web:h-[43px] web:text-base
            tablet:w-[182px] tablet:h-[43px] tablet:text-base
            phone:w-[177px] phone:h-[43px] phone:text-base
            smallPhone:w-[140px] smallPhone:h-[43px] smallPhone:text-base
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
