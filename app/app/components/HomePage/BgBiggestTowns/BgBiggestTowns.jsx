"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SeeMoreSvgHomePage from "../../Svg/SeeMoreSvgHomePage";
import { axiosTour } from "@/api/axios";

function BgBiggestTowns() {

    const [bulgarianBiggestTowns, setBulgarianBiggestTowns] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resBiggestTowns = await axiosTour.get(
          "?searchTerm=sofia"
        );
        setBulgarianBiggestTowns(resBiggestTowns);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTours();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center gap-[30px] w-full h-full
        web:max-w-[1792px] web:min-h-[752px] web:gap-[30px]
        tablet:px-[10px] tablet:gap-[30px]
        phone:gap-[20px]
        smallPhone:gap-[20px]
        "
    >
      <div
        className="flex items-center w-full max-w-[1792px]
        web:justify-between
        tablet:justify-between
        phone:justify-center
        "
      >
        <h2
          className="text-[#081120] font-medium font-['Inter'] leading-[58.50px]
            web:text-[39px]
            tablet:text-[31px]
            phone:text-base 
            smallPhone:text-base smallPhone:px-[10px]
            "
        >
          Explore Biggest Towns in Bulgaria
        </h2>
        <Link
          className="hidden space-x-2 items-start
          web:flex web:h-[19px]
          tablet:flex tablet:h-[19px]
          phone:
          smallPhone:
        "
          href="/explore"
        >
          <span
            className="text-[#081120] text-base font-semibold font-['Inter']
            web:w-[74px] web:h-[19px] web:text-base
            tablet:w-[74px] tablet:h-[19px] tablet:text-base
            phone:
            smallPhone:
            "
          >
            See More
          </span>
          <SeeMoreSvgHomePage
            className="hidden
            web:w-6 web:h-6 web:block
            tablet:w-6 tablet:h-6 tablet:block
            phone:
            smallPhone:
            "
          />
        </Link>
      </div>

      <div>


      </div>
    </div>
  );
}

export default BgBiggestTowns;
