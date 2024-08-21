"use client";
import { axiosTour } from "@/api/axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonRound from "../components/Buttons/ButonRound";

export default function Explore() {
  const page = useSearchParams().get('page') || 1;
  const [tours, setTours] = useState([]);
  const [pageSize, setPageSize] = useState(8);
  const [searchTerm, setSearchTerm] = useState();
  const router = useRouter();

  useEffect(() => {

    axiosTour
      .get(`?pageSize=${pageSize}&pageNumber=${page}`)
      .then((data) => setTours([...data.data.result]))
      .catch((err) => console.log(err));
  }, [page]);

  const handlePrevPage = () => {
    if (page <= 1) {
      return;
    }
    router.push(`?page=${Number(page) - 1}`);
  };

  const handleNextPage = () => {
    router.push(`?page=${Number(page) + 1}`);
  };
  return (
    <div className="flex flex-col items-center mt-20 mb-20 tablet:mt-40 tablet:mb-0">
      <h1 className="mb-6 tablet:mb-16 text-xl tablet:text-3xl web:text-[39px] font-medium">
        Discover your next exciting trip
      </h1>
      <div className="mb-4 tablet:mb-[108px] web:mb-[136px]">
        <Search />
      </div>
      <h2 className="hidden web:inline-block self-start mb-9 text-[31px] font-medium">
        Explore Top Rated trips
      </h2>
      <div className="grid grid-cols-1 phone:grid-cols-2 web:grid-cols-3 webl:grid-cols-4 gap-x-[9px] tablet:gap-x-5 web:gap-x-6 gap-y-6 tablet:gap-y-16 mb-16 web:mb-[108px]">
        {tours.length > 0 &&
          tours.map((tour) => (
            <Card
              classes={"tablet:w-[383px] cursor-pointer"}
              key={tour.tourId}
              title={tour.title}
              imageSrc={tour.thumbnailImageUrl}
              description={tour.summary}
              location={tour.destination}
              price={`EUR ${tour.price}`}
              rating={4.5}
              onclick={() => router.push(`/tour/${tour.tourId}`)}
            />
          ))}
      </div>
      <div className="mb-[108px] tablet:mb-[236px] flex flex-row gap-x-16">
        <ButtonRound type="button" direction="left" onclick={handlePrevPage} />
        <ButtonRound type="button" direction="right" onclick={handleNextPage} />
      </div>
    </div>
  );
}
