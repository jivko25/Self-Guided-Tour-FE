"use client";
import ArrowRedoOutline from "@/app/components/Svg/ArrowRedoOutline";
import ArrowUndoOutline from "@/app/components/Svg/ArrowUndoOutline";
import LocationSharp from "@/app/components/Svg/LocationSharp";
import Star from "@/app/components/Svg/Star";
import Walk from "@/app/components/Svg/Walk";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import Btn from "../../components/Buttons/Btn";
import { axiosTour } from "../../../api/axios";
import "./tour.scss";
import TourTitle from "@/app/components/TourDetails/TourTitle";
import TourImages from "@/app/components/TourDetails/TourImages";
import TourInfo from "@/app/components/TourDetails/TourInfo";
import TourPurchase from "@/app/components/TourDetails/TourPurchase";
import TourSummary from "@/app/components/TourDetails/TourSummary";
import HowJauntsterWorks from "@/app/components/TourDetails/HowJauntsterWorks";

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const res = await axiosTour.get(`/${id}`);
        setTour(res.data.result);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTourDetails();
  }, [id]);

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


  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex flex-col justify-center items-center
      web:w-[80%] web:mt-[30px]
      tablet:mt-[100px]
      phone:mt-[50px] phone:p-[20px]
      smallPhone:mt-[50px] smallPhone:p-[20px]
      "
      >
        <TourTitle title={title} />

        <TourImages thumbnailImageUrl={thumbnailImageUrl} landmarks={landmarks} />
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <TourInfo estimatedDuration={estimatedDuration} destination={destination} />

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <div
        className="flex justify-between flex-start border-b-2 border-[#d1d0d8]
      web:w-[80%] web:mt-[100px] web:pb-[100px] web:flex-row web:items-start web:pt-[0px]
      tablet:flex-col-reverse tablet:w-[95%] tablet:pt-[70px] tablet:pb-[70px] tablet:gap-[100px] tablet:items-center
      phone:flex-col-reverse phone:w-[95%] phone:pt-[20px] phone:pb-[20px] phone:gap-[50px] phone:items-center
      smallPhone:flex-col-reverse smallPhone:w-[95%] smallPhone:pt-[20px] smallPhone:pb-[20px] smallPhone:gap-[50px] smallPhone:items-center
      "
      >
        <TourSummary summary={summary}/>

        <div className="hidden web:hidden phone:block tablet:block border-b-2 border-[#d1d0d8] w-full tablet:my-4 phone:my-[0px] smallPhone:my-[0px]"></div>

        <TourPurchase destination={destination} price={price} id={id} router={router} />

      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <HowJauntsterWorks />
    </div>
  );
}

function TourDetailsWrapper() {
  return (
    <Suspense fallback={<p>Loading Tour Details...</p>}>
      <TourDetails />
    </Suspense>
  );
}
export default TourDetailsWrapper;
