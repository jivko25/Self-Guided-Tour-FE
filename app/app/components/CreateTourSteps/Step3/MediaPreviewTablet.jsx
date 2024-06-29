"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";
function MediaPreviewTablet({ inputs, isImage, isVideo }) {
  return (
    <>
      {/* IMAGES */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-row flex-wrap justify-between">
          {inputs.addFields.length > 0 &&
            inputs.addFields.map((file, index) => (
              <div key={index} className="flex flex-row  mb-4">
                {isImage(file) && (
                  <Image
                    src={URL.createObjectURL(file)}
                    width={150}
                    height={100}
                    background-position="center"
                    object-fit="cover"
                    background-size="contain"
                    alt="Uploaded Media"
                  />
                )}
              </div>
            ))}
        </div>
      </div>

      {/* VIDEO  */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex  flex-row flex-wrap justify-between">
          {inputs.addFields.length > 0 &&
            inputs.addFields.map((file, index) => (
              <div key={index} className="flex flex-row  mb-4">
                {isVideo(file) && (
                  <ReactPlayer
                    url={URL.createObjectURL(file)}
                    width={150}
                    height={100}
                    background-position="center"
                    object-fit="cover"
                    background-size="contain"
                    controls={true}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MediaPreviewTablet;
