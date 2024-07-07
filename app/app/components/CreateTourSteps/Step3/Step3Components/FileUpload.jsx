"use client"
import React from "react";

function FileUpload({ handleChange }) {
  return (
    <>
      <div
        className="flex items-center flex-col mb-[30px] w-full 
            web:max-w-[581px]
            tablet:max-w-[581px]
            phone:max-w-[361px]
            smallPhone:max-w-[288px]
            "
      >
        <label
          className="flex justify-start w-full text-gray-900 text-base font-medium leading-normal"
          htmlFor="addInput"
        >
          Add Fields
        </label>
        <div
          className="flex justify-between w-full h-[60px] bg-neutral-50 rounded-[5px] border border-stone-300
               web:max-w-[581px]  
               tablet:max-w-[581px]
               phone:max-w-[361px]
               smallPhone:max-w-[288px]
              "
        >
          <input
            id="addInput"
            name="addFields"
            type="file"
            multiple
            className="hidden"
            onChange={handleChange}
          />
          <div className="hidden web:flex w-full max-w-[453px] h-full pl-[10px] items-center">
            <span className="text-gray-500">
              You can upload images and audio files up to 5MB
            </span>
          </div>
          <div className="hidden web:hidden phone:flex smallPhone:flex  w-full max-w-[281px] h-full pl-[10px] items-center">
            <span className="text-zinc-500 tablet:text-base font-normal leading-normal phone:text-base smallPhone:text-sm">
              Images and Audio files
            </span>
          </div>
          <label
            htmlFor="addInput"
            className="flex bg-blue-950 text-base text-white border-2 rounded-md border-transparent justify-center items-center text-center font-medium h-full w-full cursor-pointer
            web:max-w-[128px]
            tablet:max-w-[128px]
            phone:max-w-[79px] 
            smallPhone:max-w-[79px] 
            "
          >
            Upload
          </label>
        </div>
      </div>
    </>
  );
}

export default FileUpload;
