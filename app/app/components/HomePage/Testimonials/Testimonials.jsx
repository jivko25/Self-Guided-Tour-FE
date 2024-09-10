"use client";
import { axiosTour } from "@/api/axios";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Card from "../../Card/Card";
import SeeMoreSvgHomePage from "../Svgs/SeeMoreSvgHomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

function Testimonials() {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const router = useRouter();
  const sliderRef = useRef(null); // Reference for the slider

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <div
      className="hidden web:flex tablet:flex items-center justify-center h-full w-full overflow-hidden 
      web:min-h-[966px]
      tablet:min-h-[650px]"
    >
      <div
        className="flex justify-center h-full w-full px-[10px] gap-[20px] 
        web:flex-row"
      >
        <div className="w-3/4 ">
          {recommendedPlaces.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {recommendedPlaces.map((place, index) => (
                <div key={index} className="px-2">
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
        <div className="flex items-center justify-center w-1/4">
          <div className="flex flex-col text-end">
            <h1
              className=" text-[#081120] font-medium font-['Inter'] w-[240px]
            web:text-[40px]
            tablet:text-[25px]"
            >
              Testimonials Heading
            </h1>

            <div className="w-full mt-[20px] ">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="rounded-full bg-[#e8b600] p-[5px] mr-[20px]"
              >
                <SeeMoreSvgHomePage className="w-[5px] rotate-180 web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6 tablet:block" />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="rounded-full bg-[#e8b600] p-[5px]"
              >
                <SeeMoreSvgHomePage className=" rounded-full web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6 tablet:block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
