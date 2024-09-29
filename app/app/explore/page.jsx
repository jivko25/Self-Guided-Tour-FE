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
import { useWindowWidth } from "../utils/hooks";
import Btn from "../components/Buttons/Btn";
import { getTours } from "../actions/tourActions";

const sortOprions = [
  { label: "Newest", value: "newest", icon: "" },
  { label: "Price Low", value: "minPrice", icon: ArrowDown },
  { label: "Price High", value: "maxPrice", icon: ArrowUp },
  { label: "Rating", value: "averageRating", icon: "" },
  { label: "Most Purchased", value: "mostBought", icon: "" },
];

export default function Explore() {
  let page = useSearchParams().get("page") || 1;
  let search = useSearchParams().get("search") || "";
  let sort = useSearchParams().get("sort") || "";
  const [query, setQuery] = useState("");
  const [tours, setTours] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsloading] = useState(true);
  const [isPlaceholder, setisPlaceHolder] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const [pageSize, setPageSize] = useState(12);
  const router = useRouter();
  const popup = usePopup();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (search && sort) {
      setQuery(
        `?pageSize=${pageSize}&pageNumber=${page}&searchTerm=${search}&sortBy=${sort}`
      );
      setSelectedSort(sort);
    } else if (sort) {
      setQuery(`?pageSize=12&pageNumber=${page}&sortBy=${sort}`);
      setSelectedSort(sort);
    } else if (search) {
      setQuery(`?pageSize=12&pageNumber=${page}&searchTerm=${search}`);
    } else {
      setQuery(`?pageSize=12&pageNumber=${page}`);
    }
  }, [page, search, sort]);

  useEffect(() => {
    if (query) {
      setIsloading(true);

      getTours(query)
        .then((data) => {
          setTotalPages(data.totalPages);
          setTours(data.tours);
        })
        .catch((errors) => {
          for (const key in errors) {
            popup({
              type: "ERROR",
              message: errors[key],
            });
          }
        })
        .finally(() => {
          setIsloading(false);
        });
    }
  }, [query]);

  useEffect(() => {
    if (selectedSort !== null) {
      handleURLParams(1, search, selectedSort);
    }

    return () => setSelectedSort(null);
  }, [selectedSort]);

  useEffect(() => {
    if (windowWidth > 768) {
      setisPlaceHolder(true);
    } else {
      setisPlaceHolder(false);
    }
  }, [windowWidth]);

  const handlePrevPage = () => {
    if (page > 1) {
      handleURLParams(Number(page) - 1, search, sort);
    }
  };

  const handleNextPage = () => {
    const nextPage = Number(page) + 1;
    if (nextPage <= totalPages) {
      handleURLParams(nextPage, search, sort);
    }
  };

  const handleSearch = (input) => {
    handleURLParams(1, input, sort);
  };

  const handleSelect = (selected) => {
    setSelectedSort(selected?.value);
  };

  const handleURLParams = (page, search, sort) => {
    let params = `?page=${page}`;

    if (search) {
      params += `&search=${search}`;
    }

    if (sort) {
      params += `&sort=${sort}`;
    }

    router.push(params);
  };

  return (
    <div className="flex flex-col items-center mt-20 mb-20 tablet:mt-40 tablet:mb-0">
      <h1 className="mb-6 tablet:mb-16 text-xl tablet:text-3xl web:text-[39px] font-medium">
        Discover your next exciting trip
      </h1>
      <div className="mb-16 tablet:mb-[108px] web:mb-[136px] flex flex-col tablet:flex-row items-center gap-[21px] z-30">
        <div className="tablet:max-w-[484px] web:max-w-full">
          <Search
            onSearch={handleSearch}
            searchValue={search}
            placeholder={
              isPlaceholder
                ? "Search trip by typing a destination or title"
                : ""
            }
          />
        </div>
        <Sort
          options={sortOprions}
          handleSelect={handleSelect}
          selected={sort}
        />
      </div>
      <h2 className="hidden web:inline-block self-start mb-9 text-[31px] font-medium">
        Explore Top Rated trips
      </h2>
      <div className="grid phone:grid-cols-2 web:grid-cols-4 webl:grid-cols-4 gap-x-[9px] tablet:gap-x-5 web:gap-x-6 gap-y-6 tablet:gap-y-16 mb-16 web:mb-[108px]">
        {tours.length > 0 &&
          !isLoading &&
          tours.map((tour) => (
            <Card
              key={tour.tourId}
              title={tour.title}
              imageSrc={tour.thumbnailImageUrl}
              description={tour.summary}
              location={tour.destination}
              price={`EUR ${tour.price}`}
              rating={tour.averageRating}
              onclick={() => router.push(`/tour/${tour.tourId}`)}
            />
          ))}

        {search && tours.length == 0 && !isLoading && (
          <h3 className="mb-6 tablet:mb-16 text-l tablet:text-2xl">
            "{search}" - No results found
          </h3>
        )}

        {!search && tours.length == 0 && !isLoading && (
          <div className="mb-6 tablet:mb-16 phone:col-end-1 web:col-start-2 web:col-end-4">
            <h3 className="text-l tablet:text-2xl mb-4">
              There are no tours at the moment.
            </h3>
            <p className="text-[14px] tablet:text-[16px]">
              Want to be the first to create one?
            </p>
            <Btn text={"Learn More"} />
          </div>
        )}
      </div>
      <div className="mb-[108px] tablet:mb-[236px] flex flex-row gap-x-16">
        <ButtonRound
          classes={"w-[60px] h-[60px]"}
          type="button"
          direction="left"
          onclick={handlePrevPage}
        />
        <ButtonRound
          classes={"w-[60px] h-[60px]"}
          type="button"
          direction="right"
          onclick={handleNextPage}
        />
      </div>
    </div>
  );
}
