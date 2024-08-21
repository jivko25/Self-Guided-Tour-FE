"use client";
import Link from "next/link";
import pencil from "../../public/svg/pencil.svg";
import trashcan from "../../public/svg/trash.svg";
import Image from "next/image.js";
import { useEffect, useState } from "react";

export default function LocationComponent({
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

  console.log(location);

  useEffect(() => {
    setPath(`create?placeId=${location.placeId}`);
  }, [location.placeId]);

  const handleDelete = () => {
    if (handleDeleteLocation && location.placeId) {
      handleDeleteLocation(location.placeId);
    }
  };

  // Check if any of the specified fields are empty
  const hasMissingInfo =
    !location.locationCity ||
    !location.locationDescription ||
    (location.addFields && location.addFields.length === 0);

  return (
    
    <div
      className={`mt-[4px] border rounded-md cursor-move ${
        hasMissingInfo ? "border-red-800 border-2" : "border-color-[#CECECE]"
      }`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="flex flex-row items-center relative">
        <div
          className={`${
            hasMissingInfo ? "bg-red-800" : "bg-[#617086]"
          } text-center text-[#FFFFFF] w-[35px] h-[60px] content-center text-[16px]
                            border  border-color-[#CECECE] rounded-md tablet:w-[40px] tablet:h-[40px]
                            tablet:text-[20px]`}
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
            src={pencil}
            width={24}
            height={24}
            alt="pencil"
            onClick={handleAddInfo}
          />
        </Link>
        <div className="cursor-pointer absolute right-[8px]">
          <Image
            src={trashcan}
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
