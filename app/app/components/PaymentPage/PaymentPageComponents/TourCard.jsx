"use client";
import Image from "next/image";
import StarRating from "../../StarRating/StarRating";
import IconsBar from "./IconsBar";
import Button from "../../Buttons/Button";

const tour = {
  title: "Sofia Theaters",
  description: "Sofia Theaters",
  location: "Sofia, Bulgaria",
  duration: 90,
  price: 9.99,
  type: "Walking tour",
};
function TourCard() {
  return (
    <section
      className=" hidden web:flex flex-col justify-between 
                w-[582] h-[524] rounded-xl 
                border border-[#D1D0D8] text-[#081120] "
    >
      <Image
        className="rounded-xl  h-[161px] object-center object-cover "
        src="https://selfguidedstorage.blob.core.windows.net/landmark-resources/ec1c648c-d033-41f4-a73e-abe0046a15f2.jpg"
        alt={tour.title}
        width={582}
        height={161}
      />
      <div className=" m-5 mb-7 mt-4">
        <div className=" flex flex-row justify-between text-[24px] m-2 font-medium">
          <h1>{tour.title}</h1>
          <StarRating rating={4.6} />
        </div>

        <IconsBar
          tourType={tour.type}
          duration={tour.duration}
          location={tour.location}
          styles="mt-7 "
        />

        <div className="flex justify-between pt-6 text-[24px] pb-16 font-medium ">
          <p>Total</p>
          <h2>USD {tour.price}</h2>
        </div>
        <div className=" text-center">
          <Button variant="primary-very-long" text="Confirm and pay" />
        </div>
      </div>
    </section>
  );
}

export default TourCard;
