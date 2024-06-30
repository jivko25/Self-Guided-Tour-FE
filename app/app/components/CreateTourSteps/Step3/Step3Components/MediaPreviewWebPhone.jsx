"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";

function MediaPreviewWebPhone({ inputs, isImage, isVideo }) {
  return (
    <>
      {/* IMAGES */}
      <div className="
      web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full
      phone:flex phone:overflow-x-scroll phone:overflow-hidden phone:mr-[20px] phone:w-full phone:pl-[20px]
      ">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`${index === 0 ? "web:col-span-2" : ""} mb-4 phone:flex-shrink-0 phone:mr-[10px] web:mr-[0px] `}
            >
              {isImage(file) && (
                <Image
                  src={URL.createObjectURL(file)}
                  width={269}
                  height={240}
                  className={`${
                    index === 0 ? "web:w-full web:h-60" : "web:w-[279px] web:h-60"
                  } w-[269px] h-60 rounded-[5px] object-cover`}
                  alt="Uploaded Media"
                />
              )}
            </div>
          ))}
      </div>

      {/* VIDEO */}
      <div className="
      web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full web:mt-4
      phone:flex phone:mr-[20px] phone:w-full
      ">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div key={index} className="mb-4 phone:flex-shrink-0">
              {isVideo(file) && (
                <ReactPlayer
                  url={URL.createObjectURL(file)}
                  width={269}
                  height={240}
                  className="web:rounded-[5px] web:w-[269px] web:h-60"
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
