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
  classes
}) {
  return (
    <div className={classes}>
      <div className="flex justify-center items-center gap-1.5">
        {textLeft && (
          <Rating
            rating={rating}
            textColor={textColor}
            goldUnderline={goldUnderline}
            maxRating={maxRating}
          />
        )}
        {[...Array(starsCount)].map((_, index) => {
          return <Star key={index} />;
        })}
        {!textLeft && (
          <Rating
            rating={rating}
            textColor={textColor}
            goldUnderline={goldUnderline}
            maxRating={maxRating}
          />
        )}
      </div>
    </div>
  );
}

export default StarRating;

function Star() {
  return <Image src={StarIcon} alt="star" className="w-[16px] h-[16px] tablet:w-[24px] tablet:h-[24px]" />;
}
function Rating({ rating, maxRating, textColor, goldUnderline }) {
  return (
    <p
      style={{ color: `${textColor}`, borderColor: "E8B600" }}
      className={`${textColor} ${
        goldUnderline ? "border-b-2 border-yellow-400" : ""
      }`}
    >
      {rating}
      {maxRating ? `/${maxRating}` : ""}
    </p>
  );
}
