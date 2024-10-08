"use client";
import Image from "next/image";
import StarRating from "../../../StarRating/StarRating";
import IconsBar from "../Card/IconsBar";
import { usePaymentContext } from "@/app/context/paymentContext";
import { useEffect } from "react";
import TourCardSkeleton from "../Skeletons/TourCardSkeleton";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import Btn from "../../../Buttons/Btn";

function TourCard() {
  const {
    getTourData,
    tour,
    isLoading,
    getTourId,
    handleSubmit,
    isStripeLoading,
  } = usePaymentContext();
  const stripe = useStripe();
  const elements = useElements();
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
          <StarRating rating={tour.averageRating} />
        </div>

        <IconsBar
          tourType={tour?.tourType}
          duration={tour?.estimatedDuration}
          location={tour?.destination}
          styles="mt-7"
        />

        <div className="flex justify-between mt-6 text-[24px] mb-16 font-medium  ">
          <p>Total</p>
          <h2>EUR {tour?.price}</h2>
        </div>
        <div className=" text-center">
          <Btn
            onClick={() => handleSubmit(stripe, elements)}
            variant="filled"
            text="Confirm and pay"
            className={`${isStripeLoading ? "animate-pulse" : ""} w-full`}
          />
        </div>
      </div>
    </section>
  );
}

export default TourCard;
