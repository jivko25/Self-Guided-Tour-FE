"use client"
import React from "react";

function LocationInput({ inputs, handleChange }) {
  return (
    <>
      <div
        className="flex items-center justify-start flex-col mb-[20px] w-full
            web:max-w-[581px] 
            tablet:max-w-[581px] 
            phone:max-w-[361px]
            smallPhone:max-w-[288px]"
      >
        <label
          className="flex justify-start w-full text-gray-900 font-medium leading-normal web:text-base tablet:text-base phone:text-sm
          smallPhone:text-sm"
          htmlFor="locationName"
        >
          Location Name
        </label>
        <input
          id="locationName"
          name="locationName"
          type="text"
          value={inputs.locationName}
          onChange={handleChange}
          className="bg-neutral-50 rounded border border-stone-300 w-full h-[60px] pl-[10px]
                web:max-w-[581px]
                tablet:max-w-[581px] 
                phone:max-w-[361px]
                smallPhone:max-w-[288px]"
          required
        />
      </div>

      <div
        className="flex items-center justify-start flex-col mb-[20px] w-full 
            web:max-w-[581px] 
            tablet:max-w-[581px] 
            phone:max-w-[361px]
            smallPhone:max-w-[288px]"
      >
        <label
          className="flex justify-start w-full text-gray-900 font-medium leading-normal web:text-base tablet:text-base phone:text-sm
          smallPhone:text-sm"
          htmlFor="locationCity"
        >
          Location City
        </label>
        <input
          id="locationCity"
          name="locationCity"
          type="text"
          value={inputs.locationCity}
          onChange={handleChange}
          className="bg-neutral-50 rounded border border-stone-300 w-full h-[60px] max-w-[288px] pl-[10px]
                web:max-w-[581px]
                tablet:max-w-[581px] 
                phone:max-w-[361px]
                smallPhone:max-w-[288px]"
          required
        />
      </div>

      <div
        className="flex items-center flex-col w-full mb-[20px] 
            web:max-w-[581px] 
            tablet:max-w-[581px] 
            phone:max-w-[361px]
            smallPhone:max-w-[288px]"
      >
        <label
          className="flex justify-start w-full text-gray-900 font-medium leading-normal web:text-base tablet:text-base phone:text-sm
          smallPhone:text-sm"
          htmlFor="locationDescription"
        >
          Location Description
        </label>
        <textarea
          id="locationDescription"
          name="locationDescription"
          value={inputs.locationDescription}
          onChange={handleChange}
          className="bg-neutral-50 rounded border border-stone-300 w-full pl-[10px]
                web:max-w-[581px] web:h-[200px] 
                tablet:max-w-[581px] tablet:h-[200px] 
                phone:max-w-[361px] phone:h-[178px]
                smallPhone:max-w-[288px] smallPhone:h-[120px]"
          required
        />
      </div>
    </>
  );
}

export default LocationInput;
