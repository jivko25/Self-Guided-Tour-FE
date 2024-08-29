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
    <div className="flex items-center justify-center h-full w-full min-h-[966px]">
      <div
        style={{
          WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
        }}
        className="h-full w-full px-[10px] flex items-center gap-[20px] overflow-x-auto overflow-y-hidden scrollbar-hide min-h-[250px] whitespace-nowrap"
      >
        {recommendedPlaces.length > 0 ? (
          recommendedPlaces.map((place) => (
            <div className="inline-block">
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
        <div className="w-[582px] px-[20px]">
          <h1 className="text-end text-[#081120] text-[61px] font-medium font-['Inter'] leading-[91.50px]">
            Testimonials Heading
          </h1>
          <div className="flex gap-[30px] text-end w-full justify-end">
            
              <SeeMoreSvgHomePage
                className="hidden rounded-full w-[5px] rotate-180 bg-[#e8b600]
                web:w-6 web:h-6 web:block
                tablet:w-6 tablet:h-6 tablet:block
                phone:
                smallPhone:
                "
              />
            <SeeMoreSvgHomePage
                className="hidden rounded-full w-[50px] h-[50px]  bg-[#e8b600]
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
  );
}

export default Testimonials;
