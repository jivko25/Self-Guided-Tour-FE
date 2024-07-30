"use client";
import Image from "next/image";
import StarIcon from "../../public/svg/star-outline.svg";

function StarRating({
  starsCount = 1,
  textColor = "#E8B600",
  rating = "",
  maxRating = "",
  textLeft = true,
  goldUnderline = false,
  textSizeInPx = 16,
}) {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-1.5">
        {textLeft && (
          <Rating
            rating={rating}
            textColor={textColor}
            textSizeInPx={textSizeInPx}
            goldUnderline={goldUnderline}
          />
        )}
        {[...Array(starsCount)].map((_, index) => {
          return <Star key={index} />;
        })}
        {!textLeft && (
          <Rating
            rating={rating}
            textColor={textColor}
            textSizeInPx={textSizeInPx}
            goldUnderline={goldUnderline}
          />
        )}
      </div>
    </div>
  );
}

export default StarRating;

function Star() {
  return <Image src={StarIcon} alt="star" width={24} height={24} />;
}
function Rating({ rating, maxRating, textColor, goldUnderline, textSizeInPx }) {
  return (
    <p
      style={{ color: `${textColor}`, borderColor: "E8B600" }}
      className={`text-[${textSizeInPx}px] ${textColor} ${
        goldUnderline ? "border-b-2 border-yellow-400" : ""
      }`}
    >
      {rating}
      {maxRating ? `/${maxRating}` : ""}
    </p>
  );
}
