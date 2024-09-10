"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";
import CloseIcon from "../../../../public/svg/close-red.svg";

function MediaPreviewWebPhone({ inputs, isImage, isVideo, onRemove, isFile }) {
  return (
    <>
      {/* IMAGES */}
      <div
        className="
      web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full web:pl-[0px] web:overflow-hidden web:mr-[0px]
      phone:flex  phone:mr-[20px] phone:w-full phone:pl-[20px] phone:overflow-x-auto
      smallPhone:flex  smallPhone:mr-[20px] smallPhone:w-full smallPhone:pl-[20px] smallPhone:overflow-x-auto
      "
      >
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`relative ${
                isImage(file) && index === 0 ? "web:col-span-2" : ""
              } mb-1 phone:flex-shrink-0 phone:mr-[10px] smallPhone:flex-shrink-0 smallPhone:mr-[10px] web:mr-[0px] `}
            >
              <button
                className="absolute  w-6 h-6 flex justify-center items-center right-1  bg-black bg-opacity-30 rounded-full p-1 z-10 hover:bg-opacity-100"
                onClick={() => onRemove(index)}
              >
                <Image
                  alt="remove-image"
                  src={CloseIcon}
                  height={24}
                  width={24}
                />
              </button>
              {isImage(file) && (
                <Image
                  src={
                    isFile(file)
                      ? URL.createObjectURL(file) // Newly uploaded file
                      : file.url // URL from the server
                  }
                  width={269}
                  height={240}
                  className={`${
                    index === 0
                      ? "web:w-full web:h-60"
                      : "web:w-[279px] web:h-60"
                  } phone:w-[269px] phone:h-60 smallPhone:w-[269px] smallPhone:h-[150px] rounded-[5px] object-cover`}
                  alt="Uploaded Media"
                />
              )}
              {isVideo(file) && (
                <ReactPlayer
                  url={
                    isFile(file)
                      ? URL.createObjectURL(file) // Newly uploaded file
                      : file.url // URL from the server
                  }
                  width={269}
                  height={240}
                  borderRadius={5}
                  className="web:rounded-[5px] web:w-[279px] web:h-60 phone:w-[269px] phone:h-60 phone:rounded-[5px] smallPhone:w-[269px] smallPhone:h-[150px] smallPhone:rounded-[5px]"
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
