"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext.jsx";
import TourTitle from "@/app/components/TourDetails/Parts/TourTitle";
import TourInfo from "@/app/components/TourDetails/Parts/TourInfo";
import TourPurchase from "@/app/components/TourDetails/Parts/TourPurchase";
import TourSummary from "@/app/components/TourDetails/Parts/TourSummary";
import HowJauntsterWorks from "@/app/components/TourDetails/Parts/HowJauntsterWorks";
import TourImagesPhone from "@/app/components/TourDetails/Parts/TourImagesPhone";
import TourImagesWebTablet from "@/app/components/TourDetails/Parts/TourImagesWebTablet";
import Review from "@/app/components/Review/Review";
import { getOne } from "@/app/actions/tourActions";
import { createReview, getReviewsByTourId } from "@/app/actions/reviewActions";
import { usePopup } from "@/app/context/popupContext";
import { getBoughtTours } from "@/app/actions/profileActions";

function TourDetails() {
  const { id } = useParams();
  const { session } = useAuth();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");
  const [isBought, setIsBought] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const router = useRouter();
  const popup = usePopup();

  useEffect(() => {
    if (session) {
      setUserId(session.userId);
    } else {
      setUserId("");
    }
  }, [session]);

  useEffect(() => {
    getOne(id)
      .then((res) => {
        const { data, error } = res;
        if (data) {
          setTour(data);
        } else if (error) {
          popup({
            type: "ERROR",
            message: error.message,
          });
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    if (userId) {
      getReviewsByTourId(id)
        .then((data) => {
          const result = data.data.result.filter(
            (tour) => tour.userId == userId
          );

          if (result.length > 0) {
            setIsReviewed(true);
          }
        })
        .catch((err) => {
          if (err.errors) {
            setError(err.errors.Rating);
          } else if (err.errorMessages) {
            setError(err.errorMessages.join("\r\n"));
          } else {
            setError(err.statusText);
          }
        });
    }
  }, [id, userId, isReviewed]);

  useEffect(() => {
    if (userId) {
      getBoughtTours()
        .then((data) => {
          const result = data.data.filter((tour) => tour.tourId == id);

          if (result.length > 0) {
            setIsBought(true);
          }
        })
        .catch((err) => console.log(err));
    }

  }, [id, userId]);

  useEffect(() => {
    if (error) {
      popup({
        type: "ERROR",
        message: error,
      });
    }
  }, [error]);

  const handleEditClick = () => {
    sessionStorage.setItem("tourToEdit", JSON.stringify(tour));
    router.push(`/create?edit=${tour.tourId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (!tour) return notFound();

  const {
    title,
    price,
    destination,
    estimatedDuration,
    thumbnailImageUrl,
    landmarks,
    averageRating,
    summary,
  } = tour;

  const handleReviewing = () => {
    setIsReviewing(true);
  };

  const handleCancel = () => {
    setIsReviewing(false);
  };

  const handleReview = async ({ rating, comment }) => {
    try {
      await createReview(id, rating, comment);
      setIsReviewed(true);
      setIsReviewing(false);
    } catch (err) {
      if (err.errors) {
        setError(err.errors.Rating);
      } else if (err.errorMessages) {
        setError(err.errorMessages.join("\r\n"));
      } else if (err.statusText) {
        setError(err.statusText);
      } else {
        setError("Something went wrong!");
      }
    }
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
          userId={userId}
          tourId={tour.creatorId}
          handleEditClick={handleEditClick}
          rating={averageRating}
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

        {isReviewing ? (
          <Review
            title={title}
            handleReview={handleReview}
            handleCancel={handleCancel}
          />
        ) : (
          <TourPurchase
            destination={destination}
            price={`EUR ${price}`}
            id={id}
            router={router}
            isBought={isBought}
            isReviewed={isReviewed}
            handleReviewing={handleReviewing}
            averageRating={averageRating}
            sessionId={userId}
            creatorId={tour.creatorId}
          />
        )}
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <HowJauntsterWorks />
    </div>
  );
}
export default TourDetails;
