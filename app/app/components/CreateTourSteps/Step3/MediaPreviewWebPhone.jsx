"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import React from "react";

function MediaPreviewWebPhone({ inputs, isImage, isVideo }) {
  return (
    <>
      {/* IMAGES */}
      <div className="web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div
              key={index}
              className={`mb-4 ${index === 0 ? 'web:col-span-2' : ''}`}
            >
              {isImage(file) && (
                <Image
                  src={URL.createObjectURL(file)}
                  width={index === 0 ? 858 : 279}
                  height={240}
                  className={`rounded-[5px] ${
                    index === 0 ? 'web:w-full web:h-60' : 'web:w-[279px] web:h-60'
                  }`}
                  alt="Uploaded Media"
                />
              )}
            </div>
          ))}
      </div>

      {/* VIDEO */}
      <div className="web:grid web:grid-cols-2 web:gap-4 web:w-full web:h-full web:mt-4">
        {inputs.addFields.length > 0 &&
          inputs.addFields.map((file, index) => (
            <div key={index} className="mb-4">
              {isVideo(file) && (
                <ReactPlayer
                  url={URL.createObjectURL(file)}
                  width={279}
                  height={240}
                  className="rounded-[5px] web:w-[279px] web:h-60"
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
