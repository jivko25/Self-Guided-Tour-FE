"use client"
import React from "react";

function DescriptionWeb() {
  return (
    <section
      className="hidden items-center justify-between w-full max-w-[581px] pt-[50px] pb-[30px]
          web:flex
          tablet:hidden
          phone:hidden"
    >
      <div>
        <h4 className="text-gray-900 text-2xl font-medium leading-9">
          Describe and shoot
        </h4>
        <p className="w-[425px] text-blue-950 text-base font-normal leading-normal">
          Add description, images and audio files for the location so that the
          other travelers know more about it.
        </p>
      </div>
      <p className="text-yellow-500 text-base font-medium leading-normal">
        Step 3 of 4
      </p>
    </section>
  );
}

export default DescriptionWeb;
