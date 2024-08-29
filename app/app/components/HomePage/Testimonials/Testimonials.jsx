"use client";
import { axiosTour } from "@/api/axios";
import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";
import SeeMoreSvgHomePage from "../../Svg/SeeMoreSvgHomePage";

function Testimonials() {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resBulgarian = await axiosTour.get(
          "?sortBy=mostBought&pageNumber=1&pageSize=4"
        );
        setRecommendedPlaces(resBulgarian.data.result.tours);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTours();
  }, []);

  return (
    <div
      className="hidden  items-center justify-center h-full w-full 
    web:flex web:min-h-[966px]
    tablet:flex tablet:min-h-[650px]
    "
    >
      <div
        style={{
          WebkitOverflowScrolling: "touch",
        }}
        className="h-full w-full px-[10px] flex items-center gap-[20px] overflow-x-auto overflow-y-hidden scrollbar-hide min-h-[250px] whitespace-nowrap"
      >
        {recommendedPlaces.length > 0 ? (
          recommendedPlaces.map((place) => (
            <div className="">
              <Card
                testimonial={true}
                key={place.tourId}
                title={place.title}
                imageSrc={place.thumbnailImageUrl}
                description={place.summary}
                location={place.destination}
                price={`EUR ${place.price}`}
                rating={place.rating || 0}
                onclick={() => {}}
              />
            </div>
          ))
        ) : (
          <h3 className="mb-6 tablet:mb-16 text-l tablet:text-2xl">
            Loading...
          </h3>
        )}
        <div className="flex flex-col items-end justify-center w-[582px] pl-[30px]">
          <h1
            className="text-end text-[#081120] font-medium font-['Inter'] leading-[91.50px]
          web:text-[61px]
          tablet:text-[31px]
          "
          >
            Testimonials
          </h1>
          <h1
            className="text-end text-[#081120] font-medium font-['Inter'] leading-[91.50px]
          web:text-[61px]
          tablet:text-[31px]
          "
          >
            Heading
          </h1>
          <div className="flex gap-[30px] text-end w-full justify-end mt-[20px]">
            <div className="rounded-full  bg-[#e8b600] p-[5px]">
              <SeeMoreSvgHomePage
                className="hidden w-[5px] rotate-180 
                web:w-6 web:h-6 web:block
                tablet:w-6 tablet:h-6 tablet:block
                phone:
                smallPhone:
                "
              />
            </div>
            <div className="rounded-full  bg-[#e8b600] p-[5px]">
              <SeeMoreSvgHomePage
                className="hidden rounded-full 
                web:w-6 web:h-6 web:block
                tablet:w-6 tablet:h-6 tablet:block
                phone:
                smallPhone:
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
