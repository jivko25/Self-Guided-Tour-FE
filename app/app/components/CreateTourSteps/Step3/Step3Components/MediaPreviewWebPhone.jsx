"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";

function MediaPreviewWebPhone({ inputs, isImage, isVideo }) {
  return (
    <>
      {/* IMAGES */}
      <div
        className="
      web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full web:pl-[0px] web:overflow-hidden web:mr-[0px]
      phone:flex phone:overflow-x-scroll phone:overflow-hidden phone:mr-[20px] phone:w-full phone:pl-[20px]
      "
      >
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "web:col-span-2" : ""
              } mb-1 phone:flex-shrink-0 phone:mr-[10px] web:mr-[0px] `}
            >
              {isImage(file) && (
                <Image
                  src={URL.createObjectURL(file)}
                  width={269}
                  height={240}
                  className={`${
                    index === 0
                      ? "web:w-full web:h-60"
                      : "web:w-[279px] web:h-60"
                  } phone:w-[269px] phone:h-60 rounded-[5px] object-cover`}
                  alt="Uploaded Media"
                />
              )}
            </div>
          ))}
      </div>

      {/* VIDEO */}
      <div
        className="
      web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full web:pl-[0px] web:overflow-hidden web:mr-[0px]
      phone:flex phone:overflow-x-scroll phone:overflow-hidden phone:mr-[20px] phone:w-full phone:pl-[20px]
      "
      >
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div key={index} className={` ${index === 0 ? "web:col-span-2" : ""} phone:mr-[10px]`}>
              {isVideo(file) && (
                <ReactPlayer
                  url={URL.createObjectURL(file)}
                  width={269}
                  height={240}
                  className="tablet:rounded-[5px] tablet:w-[279px] tablet:h-60  phone:w-[269px] phone:h-60 phone:rounded-[5px]"
                  controls={true}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default MediaPreviewWebPhone;
