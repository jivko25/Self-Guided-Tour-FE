"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SeeMoreSvgHomePage from "../../Svg/SeeMoreSvgHomePage";
import { axiosTour } from "@/api/axios";
import CardSphera from "../CardSphera/CardSphera";

function BgBiggestTowns() {
  const [bulgarianBiggestTowns, setBulgarianBiggestTowns] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        // Create an array of cities to fetch
        const cities = ["sofia", "plovdiv", "veliko tarnovo", "ruse"];

        // Use Promise.all to fetch data for all cities concurrently
        const results = await Promise.all(
          cities.map((city) =>
            axiosTour.get(
              `?searchTerm=${city}&sortBy=mostBought&pageNumber=1&pageSize=1`
            )
          )
        );

        // Extract the first tour object from each result (if available) and update state
        const townsData = results
          .map((res) => res.data.result.tours[0] || null)
          .filter(Boolean);


        setBulgarianBiggestTowns(townsData);
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
        tablet:px-[10px] tablet:gap-[30px] tablet:min-h-[450px]
        phone:gap-[20px] phone:mb-[50px]
        smallPhone:gap-[20px] smallPhone:mb-[50px]
        "
    >
      <div
        className="flex items-center w-full max-w-[1792px]
        web:justify-between web:mb-[50px]
        tablet:justify-between tablet:mb-[30px]
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
      <div
        className="flex items-center justify-evenly w-full 
      web:max-w-[1792px] web:gap-[50px]
      
      "
      >
        {bulgarianBiggestTowns.length > 0 ? (
          bulgarianBiggestTowns.map((town, index) => (
            <div className="" key={index}>
              <CardSphera
                key={town.tourId}
                thumbnailImageUrl={town.thumbnailImageUrl}
                destination={town.destination}
              />
            </div>
          ))
        ) : (
          <h3
            className="mb-6 tablet:mb-16 text-l tablet:text-2xl
          web:
          tablet:
          phone:
          smallPhone:
          "
          >
            Loading...
          </h3>
        )}
      </div>
    </div>
  );
}

export default BgBiggestTowns;
