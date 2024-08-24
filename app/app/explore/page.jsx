"use client";
import { axiosTour } from "@/api/axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonRound from "../components/Buttons/ButtonRound";
import { usePopup } from "@/app/context/popupContext.jsx";
import Sort from "../components/Sort/Sort";

import ArrowDown from "../public/svg/arrow-down.svg";
import ArrowUp from "../public/svg/arrow-up.svg";

const sortOprions = [
  // {label: "Sort By", value: "", icon: ""},
  { label: "Newest", value: "newest", sr: ""},
  { label: "Price Low", value: "minPrice", icon: ArrowDown },
  { label: "Price High", value: "maxPrice", icon: ArrowUp},
  { label: "Rating", value: "averageRating", icon: ""},
  { label: "Most Purchased", value: "mostBought", icon: ""},
];

export default function Explore() {
  const page = useSearchParams().get("page") || 1;
  const search = useSearchParams().get("search") || "";
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [tours, setTours] = useState([]);
  const router = useRouter();
  const popup = usePopup();

  useEffect(() => {
    if (search) {
      setQuery(`?pageSize=12&pageNumber=${page}&searchTerm=${search}`);
    } else {
      setQuery(`?pageSize=12&pageNumber=${page}`);
    }
  }, [page, search]);

  useEffect(() => {
    if (query) {
      axiosTour
        .get(query)
        .then((data) => {
          const dataResult = data.data.result;
          setTotalPages(dataResult.totalPages);
          setTours(dataResult.tours);
        })
        .catch((err) => {
          const errors = err.response.data.errors;
          for (const key in errors) {
            popup({
              type: "ERROR",
              message: errors[key],
            });
          }
        });
    }
  }, [query, setTours, setTotalPages]);

  const handlePrevPage = () => {
    if (page > 1) {
      handleURLParams(Number(page) - 1, search);
    }
  };

  const handleNextPage = () => {
    const nextPage = Number(page) + 1;
    if (nextPage <= totalPages) {
      handleURLParams(nextPage, search);
    }
  };

  const handleSearch = (input) => {
    handleURLParams(1, input);
  };

  const handleURLParams = (page, search) => {
    let params = `?page=${page}`;

    if (search) {
      params += `&search=${search}`;
    }

    router.push(params);
  };

  return (
    <div className="flex flex-col items-center mt-20 mb-20 tablet:mt-40 tablet:mb-0">
      <h1 className="mb-6 tablet:mb-16 text-xl tablet:text-3xl web:text-[39px] font-medium">
        Discover your next exciting trip
      </h1>
      <div className="mb-16 tablet:mb-[108px] web:mb-[136px] flex flex-col tablet:flex-row items-center gap-[21px] z-50">
        <Search onSearch={handleSearch} searchValue={search} placeholder={'Search trip by typing a destination'} />
        <Sort options={sortOprions} />
      </div>
      <h2 className="hidden web:inline-block self-start mb-9 text-[31px] font-medium">
        Explore Top Rated trips
      </h2>
      <div className="grid phone:grid-cols-2 web:grid-cols-4 webl:grid-cols-4 gap-x-[9px] tablet:gap-x-5 web:gap-x-6 gap-y-6 tablet:gap-y-16 mb-16 web:mb-[108px]">
        {tours.length > 0 ? (
          tours.map((tour) => (
            <Card
              key={tour.tourId}
              title={tour.title}
              imageSrc={tour.thumbnailImageUrl}
              description={tour.summary}
              location={tour.destination}
              price={`EUR ${tour.price}`}
              rating={4.5}
              onclick={() => router.push(`/tour/${tour.tourId}`)}
            />
          ))
        ) : (
          <h3 className="mb-6 tablet:mb-16 text-l tablet:text-2xl">
            "{search}" - No results found
          </h3>
        )}
      </div>
      <div className="mb-[108px] tablet:mb-[236px] flex flex-row gap-x-16">
        <ButtonRound type="button" direction="left" onclick={handlePrevPage} />
        <ButtonRound type="button" direction="right" onclick={handleNextPage} />
      </div>
    </div>
  );
}
