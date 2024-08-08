"use client";
import Image from "next/image";
import StarRating from "../../StarRating/StarRating";
import IconsBar from "./Card/IconsBar";
import Button from "../../Buttons/Button";
import { usePaymentContext } from "@/app/context/paymentContext";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TourCardSkeleton from "./Card/TourCardSkeleton";
//Todo: Add this fields to the tour DTO
const tourAverageRating = 4.6;
const tourType = "Walking tour";

function TourCard() {
  const { getTourData, tour, isLoading, getTourId } = usePaymentContext();
  const tourId = getTourId();
  useEffect(
    () => async () => {
      const data = await getTourData(tourId);
    },
    []
  );

  if (isLoading || !tour) {
    return <TourCardSkeleton />;
  }

  return (
    <section
      className=" hidden web:flex flex-col  shrink-0 self-start
                w-[582] max-h-[524] rounded-[15px] 
                border border-[#D1D0D8] text-[#081120] "
    >
      <Image
        className=" rounded-b-[5px] rounded-t-[15px] max-h-[161px] object-center object-cover "
        src={tour?.thumbnailImageUrl}
        alt={tour?.title}
        width={582}
        height={161}
        priority={true}
        quality={100}
      />
      <div className=" m-5 mb-7 mt-4">
        <div className=" flex flex-row justify-between text-[24px] m-2 font-medium  ">
          <h1>{tour?.title}</h1>
          <StarRating rating={tourAverageRating} />
        </div>

        <IconsBar
          tourType={tourType}
          duration={tour?.estimatedDuration}
          location={tour?.destination}
          styles="mt-7"
        />

        <div className="flex justify-between mt-6 text-[24px] mb-16 font-medium  ">
          <p>Total</p>
          <h2>USD {tour?.price}</h2>
        </div>
        <div className=" text-center">
          <Button variant="primary-very-long" text="Confirm and pay" />
        </div>
      </div>
    </section>
  );
}

export default TourCard;
