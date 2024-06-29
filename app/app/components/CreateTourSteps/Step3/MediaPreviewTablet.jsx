"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";

function MediaPreviewTablet({ inputs, isImage, isVideo }) {
  return (
    <>
      {/* IMAGES */}
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`mb-4 ${index === 0 ? "col-span-2" : ""}`}
            >
              {isImage(file) && (
                <Image
                  src={URL.createObjectURL(file)}
                  width={index === 0 ? 858 : 279}
                  height={240}
                  className={`rounded-[5px] ${
                    index === 0 ? "w-full h-60" : "w-[279px] h-60"
                  }`}
                  alt="Uploaded Media"
                />
              )}
            </div>
          ))}
      </div>

      {/* VIDEO */}
      <div className="grid grid-cols-2 gap-4 w-full h-full mt-4">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div key={index} className="mb-4">
              {isVideo(file) && (
                <ReactPlayer
                  url={URL.createObjectURL(file)}
                  width={279}
                  height={240}
                  className="rounded-[5px] w-[279px] h-60"
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
