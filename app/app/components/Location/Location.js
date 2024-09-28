"use client";
import Link from "next/link";
import Pencil from "../../public/svg/pencil.svg";
import Trashcan from "../../public/svg/trash.svg";
import Image from "next/image.js";
import { useSearchParams } from "next/navigation.js";
import { useEffect, useState } from "react";

export default function Location({
  count,
  draggable,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver,
  handleAddInfo,
  handleDeleteLocation,
  location,
}) {
  const [path, setPath] = useState("create");

  const searchParams = useSearchParams();

  // Set placeId query to url without removing the edit query
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("placeId", location.placeId);

    setPath(`create?${currentParams.toString()}`);
  }, [location.placeId, searchParams]);

  const handleDelete = () => {
    if (handleDeleteLocation && location.placeId) {
      handleDeleteLocation(location.placeId);
    }
  };

  return (
    <div
      className="mt-[4px] w-[90%] border rounded-md cursor-move border-color-[#CECECE]"
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="flex flex-row items-center relative">
        <div
          className="bg-[#617086]
           text-center text-[#FFFFFF] w-[35px] h-[60px] content-center text-[16px]
                            border  border-color-[#CECECE] rounded-md tablet:w-[40px] tablet:h-[40px]
                            tablet:text-[20px]"
        >
          {count && <span>{count}</span>}
        </div>
        {location.location && (
          <p className="text-left pl-[10px] w-[70%] font-normal">
            {location.location}
          </p>
        )}
        <Link href={path} className="right-[42px] cursor-pointer absolute">
          <Image
            src={Pencil}
            width={24}
            height={24}
            alt="pencil"
            onClick={handleAddInfo}
          />
        </Link>
        <div className="cursor-pointer absolute right-[8px]">
          <Image
            src={Trashcan}
            width={24}
            height={24}
            alt="trashcan"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
