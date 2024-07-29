"use client";
import Image from "next/image";
import StarRating from "../../StarRating/StarRating";
import IconsBar from "./IconsBar";
import Button from "../../Buttons/Button";

const tour = {
  title: "Sofia theaters",
  description: "Sofia theaters",
  location: "Sofia, Bulgaria",
  duration: 90,
  price: 9.99,
  type: "Walking tour",
};
function TourCard() {
  return (
    <section className="flex flex-col gap-5 rounded-xl border border-tourCard">
      <Image
        className="rounded-t-xl"
        src="https://selfguidedstorage.blob.core.windows.net/landmark-resources/ec1c648c-d033-41f4-a73e-abe0046a15f2.jpg"
        alt={tour.title}
        width={582}
        height={161}
      />
      <div className="m-5">
        <div className=" flex flex-row justify-between">
          <h1>{tour.title}</h1>
          <StarRating maxRating={1} />
        </div>
        <div>
          <IconsBar
            tourType={tour.type}
            duration={tour.duration}
            location={tour.location}
          />
        </div>
        <div className="flex justify-between m-6">
          <p>Total</p>
          <h2>USD {tour.price}</h2>
        </div>
        <div className=" text-center">
          <Button text="Confirm and pay" />
        </div>
      </div>
    </section>
  );
}

export default TourCard;
