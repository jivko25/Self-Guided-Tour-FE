"use client";
import Link from "next/link";
import React from "react";

function HowItWorks() {
  return (
    <div className="flex bg-[#13294b]
    web:h-[922px]
    tablet:h-[873px]
    ">
      <div className="flex-1">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="flex-1 w-[278px] text-white text-[39px] font-medium font-['Inter'] leading-[58.50px]">
          How it Works
        </h1>
        <p className="flex-1">
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor. Cursus ante mauris suspendisse laoreet placerat
          porta amet blandit. Venenatis habitasse ligula imperdiet ac sed
          facilisi. Sodales eget dis nibh natoque dictum ante cursus varius.
          Penatibus lacinia etiam mattis mollis porttitor.
        </p>
        <p className="flex-1">
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
