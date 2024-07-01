"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";

function MediaPreviewTablet({ inputs, isImage, isVideo }) {
  return (
    <>
      {/* IMAGES */}
      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`mb-4 ${index === 0 ? "tablet:col-span-2" : ""}`}
            >
              {isImage(file) && (
                <Image
                  src={URL.createObjectURL(file)}
                  width={index === 0 ? 858 : 279}
                  height={240}
                  className={`rounded-[5px] ${
                    index === 0 ? "tablet:w-full tablet:h-60" : "tablet:w-[279px] tablet:h-60"
                  }`}
                  alt="Uploaded Media"
                />
              )}
            </div>
          ))}
      </div>

      {/* VIDEO */}
      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full ">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div key={index}  className={` ${index === 0 ? "tablet:col-span-2" : ""}`}>
              {isVideo(file) && (
                <ReactPlayer
                  url={URL.createObjectURL(file)}
                  width={279}
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
