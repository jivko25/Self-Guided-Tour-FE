"use client";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Card from "../../Card/Card";
import SeeMoreSvgHomePage from "../Svgs/SeeMoreSvgHomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { getReviewsByTourId } from "@/app/actions/reviewActions";
import { getTours } from "@/app/actions/tourActions";


function Testimonials() {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const router = useRouter();
  const sliderRef = useRef(null); // Reference for the slider

  useEffect(() => {
    getTours("?sortBy=averageRating&pageNumber=1&pageSize=4")
      .then((data) => {
        data.tours.forEach(async (tour) => {
          const response = await getReviewsByTourId(tour.tourId);
          const reviews = response.data.result;
          const sorted = reviews.sort((a, b) => b.rating - a.rating);

          setRecommendedPlaces((prev) => [
            ...prev,
            {
              tourId: tour.tourId,
              title: tour.title,
              thumbnailImageUrl: tour.thumbnailImageUrl,
              destination: tour.destination,
              price: tour.price,
              averageRating: tour.averageRating,
              comment: sorted[0].comment,
              userName: sorted[0].userName,
              userImg: sorted[0].userImg,
            },
          ]);
        });
      })
      .catch((errors) => {
        for (const key in errors) {
          console.error(errors[key]);
        }
      });
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
        breakpoint: 1660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
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
                    description={place.comment}
                    location={place.destination}
                    price={`EUR ${place.price}`}
                    rating={place.averageRating}
                    onclick={() => router.push(`/tour/${place.tourId}`)}
                    userName={place.userName}
                    userImg={place.userImg}
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
            <div className="w-full mt-[30px]">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="rounded-full bg-[#e8b600] web:p-[13px] tablet:p-[7px] mr-[20px] hover:opacity-60"
              >
                <SeeMoreSvgHomePage className="w-[30px] h-[30px] rounded-full rotate-180 web:w-6 web:h-6 web:block tablet:w-6 tablet:h-6" />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="rounded-full bg-[#e8b600] web:p-[13px] tablet:p-[7px] hover:opacity-60"
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
