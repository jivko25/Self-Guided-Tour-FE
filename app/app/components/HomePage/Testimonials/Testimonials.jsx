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
    responsive: [
      {
        breakpoint: 1336,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div
      className="hidden web:flex tablet:flex items-center justify-center h-full w-full overflow-hidden max-w-[1792px]
      web:min-h-[966px]
      tablet:min-h-[650px]"
    >
      <div
        className="flex justify-center h-full w-full px-[10px] gap-[20px] 
        web:flex-row"
      >
        <div className="web:w-[80%] tablet:w-[90%] web:ml-[-10%] tablet:ml-[-20%]">
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
        <div className="flex items-center web:justify-center web:w-[30%] tablet:justify-end tablet:w-[20%]">
          <div className="flex flex-col h-[75%] text-end">
            <h1
              className=" text-[#081120] font-medium font-['Inter'] web:w-[370px] tablet:w-[200px]
            web:text-[61px]
            tablet:text-[31px]"
            >
              Testimonials Heading
            </h1>

            <div className="w-full mt-[30px] ">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="rounded-full bg-[#e8b600] web:p-[13px] tablet:p-[7px] mr-[20px]"
              >
                <SeeMoreSvgHomePage className="w-[30px] h-[30px] rounded-full rotate-180 web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6" />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="rounded-full bg-[#e8b600] web:p-[13px] tablet:p-[7px] "
              >
                <SeeMoreSvgHomePage className="w-[30px] h-[30px] rounded-full web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
