"use client";
import React, { useEffect, useState } from "react";
import { axiosTour } from "@/api/axios";
import Card from "../../Card/Card";
import Link from "next/link";
import SeeMoreSvgHomePage from "../Svgs/SeeMoreSvgHomePage";
import Btn from "../../Buttons/Btn";
import { useRouter, useSearchParams } from "next/navigation";

function BgBestPlaces() {
  const [bulgarianBestPlaces, setBulgarianBestPlaces] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resBulgarian = await axiosTour.get(
          "?sortBy=mostBought&pageNumber=1&pageSize=4"
        );
        setBulgarianBestPlaces(resBulgarian.data.result.tours);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTours();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center gap-[30px] w-full h-full
    web:max-w-[1792px] web:min-h-[752px] web:gap-[30px] web:px-[0px]
    tablet:px-[10px] tablet:gap-[30px]
    phone:gap-[20px]
    smallPhone:gap-[20px]
    "
    >
      <div
        className="flex items-center w-full max-w-[1792px]
      web:justify-between web:mb-[50px]
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
          Explore Best Places in Bulgaria
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
      style={{
        "::WebkitScrollbar": { display: "none" },
        MsOverflowStyle: "none",
        ScrollbarWidth: "none",
      }}
        className="h-full w-full
        web:flex-nowrap web:flex web:items-center web:justify-evenly web:gap-[20px] web:min-h-[600px] web:overflow-y-hidden web:scrollbar-hide web:overflow-x-hidden
        tablet:flex tablet:items-center tablet:justify-start tablet:gap-[20px] tablet:min-h-[600px] tablet:overflow-x-scroll tablet:overflow-y-hidden tablet:scrollbar-hide
        phone:grid phone:grid-cols-2 phone:gap-4 phone:justify-items-center phone:items-center 
        smallPhone:flex-nowrap smallPhone:px-[10px] smallPhone:flex smallPhone:items-center smallPhone:justify-start smallPhone:gap-[20px] smallPhone:overflow-x-auto smallPhone:overflow-y-hidden smallPhone:scrollbar-hide smallPhone:min-h-[250px]
      "
      >
        {bulgarianBestPlaces.length > 0 ? (
          bulgarianBestPlaces.map((place, index) => (
            <div key={index}>
              <Card
              key={place.tourId}
              title={place.title}
              imageSrc={place.thumbnailImageUrl}
              description={place.summary}
              location={place.destination}
              price={`EUR ${place.price}`}
              rating={place.rating || 0}
              onclick={() => router.push(`/tour/${place.tourId}`)}
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

      <div
        className="hidden items-start justify-start w-full
        web:flex
        tablet:flex
        phone:
        smallPhone:
      "
      >
       
      </div>

      <div
        className="
          web:hidden
          tablet:hidden
          phone:block phone:w-[176px] phone:h-[43px] phone:mb-[50px] 
          smallPhone:block smallPhone:w-[140px] smallPhone:h-[43px] smallPhone:mb-[50px]
          "
      >
        <Btn
          type="link"
          link="/explore"
          variant="outlined"
          text="See more"
          fullWidth
        />
      </div>
    </div>
  );
}

export default BgBestPlaces;
