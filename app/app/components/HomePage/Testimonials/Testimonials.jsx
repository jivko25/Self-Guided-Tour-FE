"use client";
import { axiosTour } from "@/api/axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../../Card/Card";
import SeeMoreSvgHomePage from "../../Svg/SeeMoreSvgHomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter, useSearchParams } from "next/navigation";

function Testimonials() {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const router = useRouter();

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      
    ],
 
  };

  return (
    <div
      className="hidden web:flex tablet:flex items-center justify-center h-full w-full max-w-[1792px]
      web:min-h-[966px]
      tablet:min-h-[650px]"
    >
      <div
        className="flex justify-center h-full w-full px-[10px] max-w-[1792px] gap-[20px] 
        web:flex-row"
      >
        <div className="w-full web:w-[80%] tablet:w-[90%]">
          {recommendedPlaces.length > 0 ? (
            <Slider {...settings}>
              {recommendedPlaces.map((place, index) => (
                <div key={index} className="px-2"> {/* Adjusting the gap between cards */}
                  <Card
                    testimonial={true}
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
              ))}
            </Slider>
          ) : (
            <h3 className="mb-6 tablet:mb-16 text-l tablet:text-2xl">
              Loading...
            </h3>
          )}
        </div>
        <div className="hidden web:flex flex-col items-end justify-center w-[240px]">
          <h1
            className="text-end text-[#081120] font-medium font-['Inter'] 
            web:text-[40px]
            tablet:text-[25px]"
          >
            Testimonials Heading
          </h1>
        
          <div className="flex gap-[30px] text-end w-full justify-end mt-[20px]">
            <div className="rounded-full bg-[#e8b600] p-[5px]">
              <SeeMoreSvgHomePage
                className="hidden w-[5px] rotate-180 web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6 tablet:block"
              />
            </div>
            <div className="rounded-full bg-[#e8b600] p-[5px]">
              <SeeMoreSvgHomePage
                className="hidden rounded-full web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6 tablet:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
