"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext.jsx";
import { axiosTour } from "../../../api/axios";
import TourTitle from "@/app/components/TourDetails/Parts/TourTitle";
import TourInfo from "@/app/components/TourDetails/Parts/TourInfo";
import TourPurchase from "@/app/components/TourDetails/Parts/TourPurchase";
import TourSummary from "@/app/components/TourDetails/Parts/TourSummary";
import HowJauntsterWorks from "@/app/components/TourDetails/Parts/HowJauntsterWorks";
import TourImagesPhone from "@/app/components/TourDetails/Parts/TourImagesPhone";
import TourImagesWebTablet from "@/app/components/TourDetails/Parts/TourImagesWebTablet";
import Review from "@/app/components/Review/Review";
import { getOne } from "@/app/actions/tourActions";

function TourDetails() {
  const { id } = useParams();
  const { session } = useAuth();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    getOne(id)
      .then((res) => {
        const { data, error } = res;
        if (data) {
          setTour(data);
        } else if (error) {
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleEditClick = () => {
    sessionStorage.setItem("tourToEdit", JSON.stringify(tour));
    router.push(`/create?edit=${tour.tourId}`);
  };

  // console.log(tour);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tour) return <p>No tour data found</p>;

  const {
    title,
    price,
    destination,
    estimatedDuration,
    thumbnailImageUrl,
    landmarks,
    status,
    summary,
  } = tour;

  const handleReview = (rating, comment) => {
    console.log(rating, comment);
  };

  return (
    <div className="flex flex-col w-full px-[10px] tablet:items-center tablet:px-0">
      <div
        className="flex flex-col justify-center items-center 
      web:w-[80%] web:mt-[30px]
      tablet:mt-[100px]
      phone:mt-[50px] phone:p-[20px]
      mt-[50px] p-[20px]
      "
      >
        <TourTitle
          title={title}
          userId={session?.userId}
          tourId={tour.creatorId}
          handleEditClick={handleEditClick}
        />

        <TourImagesPhone
          thumbnailImageUrl={thumbnailImageUrl}
          landmarks={landmarks}
        />
        <TourImagesWebTablet
          title={title}
          thumbnailImageUrl={thumbnailImageUrl}
          landmarks={landmarks}
        />
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <TourInfo
        estimatedDuration={estimatedDuration}
        destination={destination}
      />

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <div
        className="flex justify-between flex-start border-b-2 border-[#d1d0d8]
      web:w-[80%] web:mt-[100px] web:pb-[100px] web:flex-row web:items-start web:pt-[0px]
      tablet:flex-col-reverse tablet:w-[95%] tablet:pt-[70px] tablet:pb-[70px] tablet:gap-[100px] tablet:items-center
      phone:flex-col-reverse phone:w-[95%] phone:pt-[20px] phone:pb-[20px] phone:gap-[50px] phone:items-center
      flex-col-reverse w-[95%] pt-[20px] pb-[20px] gap-[50px] items-center
      "
      >
        <TourSummary summary={summary} />

        <div className="hidden web:hidden phone:block tablet:block border-b-2 border-[#d1d0d8] w-full tablet:my-4 my-[0px]"></div>

        <TourPurchase
          destination={destination}
          price={price}
          id={id}
          router={router}
        />

        {/* <Review title={title} handleReview={handleReview}/> */}
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <HowJauntsterWorks />
    </div>
  );
}
export default TourDetails;
