"use client";
import ArrowRedoOutline from "@/app/components/Svg/ArrowRedoOutline";
import ArrowUndoOutline from "@/app/components/Svg/ArrowUndoOutline";
import LocationSharp from "@/app/components/Svg/LocationSharp";
import Star from "@/app/components/Svg/Star";
import Walk from "@/app/components/Svg/walk";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import Btn from "../../components/Buttons/Btn";

function TourDetails() {
  const param = useParams();
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex flex-col justify-center items-center
      web:w-[80%] web:mt-[30px]
      tablet:mt-[100px]
      "
      >
        <div
          className="flex justify-start items-center w-full 
        web:gap-[30px]
        tablet:gap-[30px] tablet: mb-[30px]
        "
        >
          <h1
            className="text-[#081120] font-['Inter']
          web:text-[39px] web:font-medium web:leading-[58.50px]
          tablet:text-[32px] tablet:leading-[48px]
          "
          >
            Sofia Theaters
          </h1>
          <div className="flex gap-[10px]">
            <Star />
            <span className="text-[#13294b] text-base font-normal font-['Inter'] leading-none">
              4.8
            </span>
          </div>
        </div>

        <div
          className="grid 
        web:grid-cols-4 web:grid-rows-2 web:gap-4 web:w-full web:h-full web:max-h-[520px] web:items-center web:justify-center
        tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full tablet:items-center tablet:justify-center 
        "
        >
          <img
            className="web:w-full web:h-full web:max-h-[500px] web:col-span-2 web:row-span-2 web:object-cover web:rounded-tl-[15px] web:rounded-bl-[15px] web:tablet:rounded-tr-[0px]
            tablet:col-span-2 tablet:w-full tablet:h-[260px] tablet:rounded-tl-[15px] tablet:rounded-tr-[15px]
            
            "
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main Image"
          />
          <img
            className="object-cover web:w-full web:h-full tablet:h-[180px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
          />
          <img
            className="object-cover web:w-full web:h-full web:rounded-tr-[15px] tablet:h-[180px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            className="object-cover web:w-full web:h-full web:rounded-bl-[0px] tablet:h-[180px] tablet:rounded-bl-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
          <img
            className="object-cover web:w-full web:h-full  web: tablet:h-[180px] tablet:rounded-br-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
        </div>
      </div>

      <div
        className="flex items-center justify-around  border-b-2  border-[#d1d0d8] 
        web:h-[250px] web:w-[80%]
        tablet:flex-row-reverse tablet:h-[250px] tablet:w-[95%] tablet:justify-center tablet:gap-[20px]
        "
      >
        <div className="flex">
          <Walk />
          <div>
            <h2
              className="text-[#081120] font-medium font-['Inter'] 
            web:text-xl 
            tablet:text-lg
            "
            >
              This is a 2.5km walking tour
            </h2>
            <p
              className="text-[#13294b] font-normal font-['Inter']
            web:text-base
            tablet:text-sm
            "
            >
              To complete it you will need average of 90min.
            </p>
          </div>
        </div>
        <div className="flex">
          <LocationSharp />
          <div>
            <h2
              className="text-[#081120] font-medium font-['Inter'] 
            web:text-xl 
            tablet:text-lg
            "
            >
              This tour is located in Sofia
            </h2>
            <p
              className="text-[#13294b]font-normal font-['Inter']
            web:text-base
            tablet:text-sm
            "
            >
              Sofia is the capital of Bulgaria
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between flex-start border-b-2 border-[#d1d0d8]
      web:w-[80%] web:mt-[100px] web:pb-[100px] web:flex-row web:items-start web:pt-[0px]
      tablet:flex-col-reverse tablet:w-[95%]  tablet:pt-[70px] tablet:pb-[70px] tablet:gap-[100px] tablet:items-center
      "
      >
        <div
          className="flex flex-col h-full flex-wrap 
        web:gap-[50px] web:w-full web:max-w-[733px]
        tablet:w-[584px]
        "
        >
          <div className="tablet:mb-[40px] h-full">
            <h3
              className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9  
            web:mb-[20px]
            tablet:mb-[20px]
            "
            >
              About the tour
            </h3>
            <p className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal 
            web:w-full 
            web:max-w-[733px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem atque tenetur quos in esse ipsam eos officiis,
              asperiores facilis ad alias sint quod mollitia doloribus ipsa
              facere quas sunt consequatur.
            </p>
          </div>
          

          <div className="tablet:h-full tablet:mb-[20px]">
            <h3 className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9 
            web:mb-[20px] 
            tablet:mb-[20px]">
              Directions to starting point
            </h3>
            <p className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal 
            web:w-full 
            web:max-w-[733px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.
            </p>
          </div>

        </div>

        <div className="hidden web:hidden tablet:block border-b-2 border-[#d1d0d8] w-full my-4"></div>

        <div className="flex flex-col h-full flex-wrap items-start justify-center  
        web:gap-[30px] web:w-[430px] 
        tablet:w-[584px]">
          <div
            className="flex 
          web:items-start web:flex-col 
          tablet:flex-row tablet:gap-[20px] tablet:justify-center"
          >
            <h2
              className="text-[#081120] font-medium font-['Inter']  
            web:text-[31px] web:mb-[20px]
            tablet:text-2xl tablet:mb-[20px]
            "
            >
              Sofia Theaters Tour
            </h2>
            <div className="flex gap-[10px] tablet:mt-[5px]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div className="flex web:flex-col tablet:flex-col-reverse ">
            <p className="flex gap-[10px] text-[#081120] font-medium font-['Inter'] 
            web:mb-[10px] web:flex-row web:text-2xl 
            tablet:text-xl target:flex-row-reverse tablet:mb-[20px]
            ">
              <span>USD</span><span>9.99</span>
            </p>
            <p className=" text-[#13294b] text-base font-normal font-['Inter'] leading-normal web:mb-[30px] web:w-[430px] tablet:mb-[20px] tablet:w-[430px]">
              Explore the beautiful buildings and green parks of Sofia’s biggest
              theaters. Take a walk trough a beautiful sightseeing in the
              historical center of the city.
            </p>
          </div>
          {/* <button
            className="rounded-[5px] px-4 py-3 bg-[#13294b]  text-center text-white text-base font-semibold font-['Inter'] 
            web:w-[430px] web:h-11
            "
          >
            Buy Tour
          </button> */}

          <div className="web:w-[430px] tablet:w-[282px]">
          <Btn type="submit" variant="filled" text="Buy Tour" fullWidth />
            </div>
        </div>

      </div>

      <div
        className="flex flex-col items-center 
      web:mt-[100px] web:gap-[50px] web:h-[500px]
      
      "
      >
        <h1 className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9">
          How Jauntster works
        </h1>
        <div
          className="flex flex-wrap justify-center
        web:gap-[30px] web:flex-row
        tablet:flex-col
        "
        >
          <div
            className="flex items-center justify-evenly  bg-neutral-50 rounded-[5px] border border-[#d1d0d8] relative
          web:w-[733px] web:h-[278px]
          "
          >
            <div
              className="absolute flex bg-[#E7EAED] rounded-full 
            web:top-[-50px] web:px-[15px] web:py-[30px]
            "
            >
              <ArrowUndoOutline />
              <ArrowRedoOutline />
            </div>
            <div className="web:mt-[30px]">
              <h1
                className=" text-[#081120] text-xl font-medium font-['Inter'] leading-[30px]
              web:mb-[20px]
              "
              >
                How to get the most of the tour and its story
              </h1>
              <p
                className="text-[#13294b] text-base font-normal font-['Inter'] leading-normal
              web:w-[667px] web:h-[95px]
              "
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                hic laudantium ex ut labore eius quas quidem, optio eos porro
                dolores officiis iure molestias! Tempore ut optio placeat fugit
                excepturi?
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-evenly bg-neutral-50 rounded-[5px] border border-[#d1d0d8] relative
          web:w-[733px] web:h-[278px]
          "
          >
            <div
              className="absolute flex bg-[#E7EAED] rounded-full 
            web:top-[-50px] web:px-[15px] web:py-[30px]
            "
            >
              <ArrowUndoOutline />
              <ArrowRedoOutline />
            </div>

            <div className="web:mt-[30px]">
              <h1
                className=" text-[#081120] text-xl font-medium font-['Inter'] leading-[30px]
              web:mb-[20px]
              "
              >
                How to get the most of the tour and its story
              </h1>
              <p
                className="text-[#13294b] text-base font-normal font-['Inter'] leading-normal
              web:w-[667px] web:h-[95px]
              "
              >
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
