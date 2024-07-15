'use client'
import Link from "next/link";
import pencil from "../../public/svg/pencil.svg";
import trashcan from "../../public/svg/trash.svg";
import Image from "next/image.js";
import { useEffect, useState } from "react";

export default function LocationComponent({ count, text , draggable, onDragStart, onDragEnter, onDragEnd, onDragOver, handleAddInfo, handleDeleteLocation, placeId }) {
    const [path, setPath]= useState('create');

    useEffect(() => {
        setPath(`create?placeId=${placeId}`);
    }, [placeId]);

    const handleDelete = () => {
        if (handleDeleteLocation && placeId) {
            handleDeleteLocation(placeId);
        }
    }

    return (
        <div className="mt-[4px] border border-[0.5px] borcer-color-[#CECECE] rounded-md cursor-move" draggable={draggable} onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd={onDragEnd} onDragOver={onDragOver}>
            <div className="flex flex-row items-center relative">
                <div
                    className="bg-[#617086] text-center text-[#FFFFFF] w-[35px] h-[60px] content-center text-[16px]
                            border border-[0.5px] borcer-color-[#CECECE] rounded-md tablet:w-[40px] tablet:h-[40px]
                            tablet:text-[20px]"
                >
                    {count && <span>{count}</span>}
                </div>
                {text && <p className="text-left pl-[10px] w-[70%] font-normal">
                    {text}
                </p>}
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