"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";
import CloseIcon from "../../../../public/svg/close-red.svg";

function MediaPreviewTablet({ inputs, isImage, isVideo ,onRemove }) {
  return (
    <>
      {/* IMAGES */}
      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`mb-4 relative ${
                isImage(file) && index === 0 ? "tablet:col-span-2" : ""
              }`}
            >
              <button
                className="absolute  w-6 h-6 flex justify-center items-center right-1  bg-black bg-opacity-30 rounded-full p-1 z-10 hover:bg-opacity-100"
                onClick={() => onRemove(index)} 
              >
                <Image src={CloseIcon} height={24} width={24} />
              </button>
              {isImage(file) && (
                <Image
                  src={URL.createObjectURL(file)}
                  width={index === 0 ? 858 : 279}
                  height={240}
                  className={`rounded-[5px] ${
                    index === 0
                      ? "tablet:w-full tablet:h-60"
                      : "tablet:w-[279px] tablet:h-60"
                  }`}
                  alt="Uploaded Media"
                />
              )}
              {isVideo(file) && (
                <ReactPlayer
                  url={URL.createObjectURL(file)}
                  width={279}
                  borderRadius={5}
                  height={240}
                  className="tablet:rounded-[5px] tablet:w-[279px] tablet:h-60"
                  controls={true}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default MediaPreviewTablet;
