"use client";

import Image from "next/image";
import HollowStar from "../../public/svg/hollow-star.svg";
import Star from "../../public/svg/star-outline.svg";
import { useEffect, useState } from "react";
import Btn from "../Buttons/Btn";

export default function Review({title, handleReview }) {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const renderStar = (starValue) => {
    return (
      <>
        <Image
          key={starValue}
          src={starValue <= (hoverValue || rating) ? Star : HollowStar}
          className="cursor-pointer"
          width={24}
          height={24}
          alt={`Rate ${starValue} stars`}
          onClick={() => setRating(starValue)}
          onMouseEnter={() => setHoverValue(starValue)}
          onMouseLeave={() => setHoverValue(0)}
        />
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleReview) {
      handleReview(rating, comment);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-[502px] h-[518px] p-9">
      {title && <h2 className="font-medium text-[31px] mb-6">{title}</h2>}

      {/* Render 5 stars */}
      <div className="flex mb-9 gap-2">
        {[1, 2, 3, 4, 5].map((starValue) => renderStar(starValue))}
      </div>

      {/* Comment input */}
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment" className="font-medium mb-1">Tell us what you think</label>
          <textarea
            id="comment"
            className="w-full block h-[204px] mb-[37px] bg-[#FAFAFA] border border-[#CECECE]"
            value={comment}
            style={{resize: "none"}}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex gap-x-6">
            <Btn fullWidth text={"Cancel"} variant="outlined" type="button"/>
            <Btn fullWidth text={"Submit"} />
          </div>
        </form>
      </div>

      {/* Display feedback after submission */}
      {submitted && (
        <div>
          <h3>Thank you for your feedback!</h3>
          <p>Your rating: {rating}</p>
          <p>Your comment: {comment}</p>
        </div>
      )}
    </div>
  );
}
