"use client";
import Link from "next/link";
import React from "react";
import imgFirst from "../../../public/images/HomePageImg1.png";
import imgSecond from "../../../public/images/HomePageImg2.jpeg";
import Image from "next/image";

function HowItWorks() {
  return (
    <div
      className="w-full flex items-center justify-evenly bg-[#13294b]
    web:h-[922px]
    tablet:h-[873px]
    "
    >
      <div className="relative w-[50%] h-full">
        <Image
          className="absolute w-[408px] h-[440px] rounded-[15px] z-10 left-[150px] top-[50px] object-cover"
          src={imgFirst}
          alt="Description of image 1"
     
        />
        <Image
          className="absolute w-[581px] h-[700px] rounded-[15px] top-[150px] left-[230px] object-cover"
          src={imgSecond}
          alt="Description of image 2"
   
        />
      </div>
      <div className="flex flex-col w-[50%] h-full">
        <h1 className="flex-1 w-[278px] text-white text-[39px] font-medium font-['Inter'] leading-[58.50px]">
          How it Works
        </h1>
        <p className="flex-1 w-[582px] text-white text-base font-normal font-['Inter']">
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor. Cursus ante mauris suspendisse laoreet placerat
          porta amet blandit. Venenatis habitasse ligula imperdiet ac sed
          facilisi. Sodales eget dis nibh natoque dictum ante cursus varius.
          Penatibus lacinia etiam mattis mollis porttitor.
        </p>
        <p className="flex-1 w-[577px] text-white text-base font-normal font-['Inter']">
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor. Cursus ante mauris suspendisse laoreet placerat
          porta amet blandit. Venenatis habitasse ligula imperdiet ac sed
          facilisi. Sodales eget dis nibh natoque dictum ante cursus varius.
          Penatibus lacinia etiam mattis mollis porttitor.
        </p>
        <div className="flex flex-1">
          <Link
            className="text-[#081120] w-[278px] h-[43px] px-4 py-3 bg-neutral-50 rounded-[5px] justify-center items-center flex"
            href="/explore"
          >
            Explore
          </Link>
          <Link
            className="flex justify-center items-center w-[280px] h-[43px] px-4 py-3 rounded-[5px] border-2 border-white text-center text-white text-base font-semibold font-['Inter']"
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
