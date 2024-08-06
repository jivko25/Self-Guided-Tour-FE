"use client";
import ArrowRedoOutline from "@/app/components/Svg/ArrowRedoOutline";
import ArrowUndoOutline from "@/app/components/Svg/ArrowUndoOutline";
import LocationSharp from "@/app/components/Svg/LocationSharp";
import Star from "@/app/components/Svg/Star";
import Walk from "@/app/components/Svg/walk";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

function TourDetails() {
  const param = useParams();
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col  justify-center items-center
      web:w-[80%] web:mt-[30px]
      ">
        <div className="flex justify-start items-center w-full gap-[30px]">
          <h1 className="text-[#081120] text-[39px] font-medium font-['Inter'] leading-[58.50px]">
            Sofia Theaters
          </h1>
          <div className="flex gap-[10px]">
            <Star />
            <span className="text-[#13294b] text-base font-normal font-['Inter'] leading-none">
              4.8
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-2  gap-4 w-full  h-full max-h-[520px] items-center justify-center">
          <img
            className="col-span-2 row-span-2 object-cover rounded-tl-[15px] rounded-bl-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main Image"
          />
          <img
            className="object-cover "
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
          />
          <img
            className="object-cover rounded-tr-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            className="object-cover  "
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
          <img
            className="object-cover rounded-br-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
        </div>
      </div>

      <div className="flex items-center justify-around  border-b-2  border-[#d1d0d8]
      web:w-[80%] web:h-[250px]
      ">
        <div className="flex">
          <Walk />
          <div>
            <h2 className="text-[#081120] text-xl font-medium font-['Inter']">
              This is a 2.5km walking tour
            </h2>
            <p className="text-[#13294b] text-base font-normal font-['Inter']">
              To complete it you will need average of 90min.
            </p>
          </div>
        </div>
        <div className="flex">
          <LocationSharp />
          <div>
            <h2 className="text-[#081120] text-xl font-medium font-['Inter']">
              This tour is located in Sofia
            </h2>
            <p className="text-[#13294b] text-base font-normal font-['Inter']">
              Sofia is the capital of Bulgaria
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-start border-b-2 border-[#d1d0d8] 
      web:w-[80%] web: mt-[100px]
      ">
        <div className="flex flex-col  h-full 
        web:gap-[50px] web:w-[733px]
        ">
          <div className="">
            <h3 className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9  
            web:mb-[20px]
            ">
              About the tour
            </h3>
            <p className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem atque tenetur quos in esse ipsam eos officiis,
              asperiores facilis ad alias sint quod mollitia doloribus ipsa
              facere quas sunt consequatur.
            </p>
          </div>
          <div className="web:w-[430px] web:h-[315px]">
            <h3 className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9 web:mb-[20px]">
              Directions to starting point
            </h3>
            <p className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.
            </p>
          </div>
        </div>

        <div className="flex flex-col  h-full items-start justify-center web:gap-[30px] web:w-[430px]">
          <div>
            <h2 className="text-[#081120] text-[31px] font-medium font-['Inter']  mb-[20px]">
              Sofia Theaters Tour
            </h2>
            <div className="flex gap-[10px]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div>
            <h2 className="text-[#081120] text-2xl font-medium font-['Inter'] web:mb-[10px]">
              USD 9.99
            </h2>
            <p className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal web:mb-[30px] web:w-[430px]">
              Explore the beautiful buildings and green parks of Sofia’s biggest
              theaters. Take a walk trough a beautiful sightseeing in the
              historical center of the city.
            </p>
            <button className="rounded-[5px] px-4 py-3 bg-[#13294b]  text-center text-white text-base font-semibold font-['Inter'] 
            web:w-[430px] web:h-11
            ">
              Buy Tour
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center relative
      web:mt-[100px] web:gap-[50px] web:h-[500px]
      ">
        <h1 className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9">
          How Jauntster works
        </h1>
        <div className="flex 
        web:gap-[30px]
        ">
          <div className="flex items-center justify-evenly  bg-neutral-50 rounded-[5px] border border-[#d1d0d8] 
          web:w-[733px] web:h-[278px]
          ">
            <div className="absolute flex bg-[#E7EAED] rounded-full 
            web:top-[40px] web:px-[15px] web:py-[30px]
            ">
              <ArrowUndoOutline />
              <ArrowRedoOutline />
            </div>
            <div className="web:mt-[30px]">
              <h1 className=" text-[#081120] text-xl font-medium font-['Inter'] leading-[30px]
              web:mb-[20px]
              ">
                How to get the most of the tour and its story
              </h1>
              <p className="text-[#13294b] text-base font-normal font-['Inter'] leading-normal
              web:w-[667px] web:h-[95px]
              ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                hic laudantium ex ut labore eius quas quidem, optio eos porro
                dolores officiis iure molestias! Tempore ut optio placeat fugit
                excepturi?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-evenly bg-neutral-50 rounded-[5px] border border-[#d1d0d8]  
          web:w-[733px] web:h-[278px]
          ">
            <div className="absolute flex bg-[#E7EAED] rounded-full 
            web:top-[40px] web:px-[15px] web:py-[30px]
            ">
              <ArrowUndoOutline />
              <ArrowRedoOutline />
            </div>
            <div className="web:mt-[30px]">
              <h1 className=" text-[#081120] text-xl font-medium font-['Inter'] leading-[30px]
              web:mb-[20px]
              ">
                How to get the most of the tour and its story
              </h1>
              <p className="text-[#13294b] text-base font-normal font-['Inter'] leading-normal
              web:w-[667px] web:h-[95px]
              ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                hic laudantium ex ut labore eius quas quidem, optio eos porro
                dolores officiis iure molestias! Tempore ut optio placeat fugit
                excepturi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
