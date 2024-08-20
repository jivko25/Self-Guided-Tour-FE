"use client";
import React from "react";
import Image from "next/image";
import Search from "@/app/components/Search/Search";
import Btn from "../Buttons/Btn";

import CARD from "../../public/Home/g10.svg"
import HUMAN from "../../public/Home/path16.svg"
import ARROW from "../../public/Home/Frame 14.svg"
import PICTURES from "../../public/Home/Group 35.svg"
import SOFIA from "../../public/Home/Ellipse 15.svg"
import PLOVDIV from "../../public/Home/Ellipse 16.svg"
import VELIKOTARNOVO from "../../public/Home/Ellipse 17.svg"
import RUSE from "../../public/Home/Ellipse 18.svg"

import VECTOR1 from "../../public/Home/Vector 1.svg"
import VECTOR7 from "../../public/Home/Vector 7.svg"
import VECTOR3 from "../../public/Home/Vector 3.svg"
import VECTOR8 from "../../public/Home/Vector 8.svg"
import VECTOR5 from "../../public/Home/Vector 5.svg"
import CREATE from "../../public/Home/Group 42.svg"
import PLAN from "../../public/Home/Group 36.svg"
import DESCRIBE from "../../public/Home/Group 39.svg"
import REVIEW from "../../public/Home/Group 44.svg"

import CARDTOUR from "../../public/Home/card-tours.svg"
import Card from "../Card/Card";
import headerImg from "../../public/images/headerImg.jpeg";

function HomePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div
        className="absolute brightness-75 top-0 left-0 w-full h-full bg-custom-image bg-cover bg-center z-[-5]
      smallPhone:h-[222px] smallPhone:phone:h-none 
      phone:h-[245px]  phone:tablet:h-none 
      tablet:h-[554px]
      web:w-full web:h-[655px] web:tablet:h-none"
      ></div>
      <section className="flex flex-col items-center smallPhone:relative phone:relative justify-center smallPhone:h-[222px] phone:h-[245px] tablet:py-[150px] tablet:h-[554px] web:h-[535px] w-full ">
        <h1
          className=" text-2xl font-bold text-center text-white font-['Inter Tight']
        web:text-[64px] web:mb-[45px]
        tablet:text-5xl tablet:mb-[50px]
        phone:text-2xl phone:mb-[10px]
        smallPhone:text-2xl smallPhone:mb-[15px]
        "
        >
          Heading
        </h1>
        <p
          className="text-base font-medium text-center text-white 
        web:text-[32px] web:mb-[65px]
        tablet:text-2xl tablet:mb-[70px]
        phone:text-base phone:mb-[40px]
        smallPhone:text-base smallPhone:mb-[40px]
        "
        >
          Subheading
        </p>
        <div
          className="web:mb-[70px] web:static web:phone:absolute-none tablet:static tablet:mb-[0px]
        phone:absolute phone:bottom-[-20px]
        smallPhone:absolute smallPhone:bottom-[-25px]"
        >
          <Search variant="default" />

        </div>
      </section>
      <div className="flex flex-row  space-x-5 justify-center mt-[100px] web:w-[1187px] w-[783px] h-[172px]">
        <div className="flex flex-row web:w-[582px] w-[383px] h-[172px] 
        justify-center items-center border-[1px] border-[#D1D0D8] rounded-[15px]" >
          <p className=" cursor-pointer pr-[15px]"
            onClick={() => console.log('Click')}>
            <Image src={HUMAN} width={74} height={124} alt="card icon" />
          </p>
          <div >
            <h2 className="font-medium text-[20px] text-[#081120]">Be Independent</h2>
            <div className=" web:mt-[1.5rem] mt-[1rem] web:w-[278px] w-[223px] h-[48px]">
              <p className="text-[16px]  text-[#13294B] font-normal">Feel free to enjoy your tour without groups, with your own pace.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row web:w-[582px] w-[383px] h-[172px]  justify-center items-center border-[1px] border-[#D1D0D8] rounded-[15px]" >
          <p className=" cursor-pointer pr-[15px]"
            onClick={() => console.log('Click')}>
            <Image src={CARD} width={107} height={124} alt="card icon" />
          </p>
          <div>
            <h2 className="font-medium text-[20px] text-[#081120]">Share with Others</h2>
            <div className=" mt-[1.5rem] web:w-[278px] w-[215px] h-[48px]">
              <p className="text-[16px] text-[#13294B] font-normal">Share your favorite places with fellow travelers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lorem ipsum odor amet */}
      <div className="flex flex-col gap-10 justify-center items-center mt-[150px]  ">
        <h1 className="web:text-[39px] tablet:text-[31px] text-[#081120] font-medium">Lorem ipsum odor amet</h1>
        <p className=" web:w-[1490px] web:h-[72px] tablet:w-[786px] tablet:h-[95px] 
        text-center font-normal web:text-[20px] tablet:text-[16px] text-[#13294B]">Cursus ante mauris suspendisse laoreet placerat porta amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis mollis porttitor. Cursus ante mauris suspendisse laoreet placerat porta amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis mollis porttitor.</p>
      </div>


      {/* Explore Best Places in Bulgaria */}
      <div className="relative flex flex-col gap-28 justify-center mt-[150px] web:w-[1792px] w-[835px] h-[752px]">
        <div className=" relative flex flex-row">
          <h1 className="absolute left-0  text-[39px] text-[#081120] font-medium">Explore Best Places in Bulgaria</h1>
          <div className="flex flex-row absolute right-0 top-[15px] w-[127px] h-[48px] ">
            <p className="text-[16px] font-semibold cursor-pointer">See More</p>
            <p className="cursor-pointer">
              <Image src={ARROW} alt="Arrow icon" />
            </p>
          </div >


        </div>
        <div className="flex flex-row justify-center space-x-4 w-[1792] h-[522]">

          <p className=" cursor-pointer web:w-[430px] web:h-[522px]"
            onClick={() => console.log('Click')}>
            <Image className="w-[100%]" src={CARDTOUR} alt="Ruse icon" />
          </p>
          <p className=" cursor-pointer web:w-[430px] web:h-[522px]"
            onClick={() => console.log('Click')}>
            <Image className="w-[100%]" src={CARDTOUR} alt="Ruse icon" />
          </p>
          <p className=" cursor-pointer web:w-[430px] web:h-[522px]"
            onClick={() => console.log('Click')}>
            <Image className="w-[100%]" src={CARDTOUR} alt="Ruse icon" />
          </p>
          <p className=" cursor-pointer web:w-[430px] web:h-[522px]"
            onClick={() => console.log('Click')}>
            <Image className="w-[100%]" src={CARDTOUR} alt="Ruse icon" />
          </p>

        </div>
        <Btn
          className="absolute left-0 bottom-[-100px]  font-semibold text-[16px] border-b-2 border-b-[#E8B600]  w-[128px]  h-[43px] "
          variant="transparent"
          text="Explore Sofia"
        // onClick={}
        />
      </div>

      {/* Explore Biggest Towns in Bulgaria */}
      <div className="flex flex-col gap-3 justify-center mt-[250px] web:w-[1792px] w-[835px] h-[581px]">
        <div className=" relative flex flex-row">
          <h1 className="absolute left-0  web:text-[39px] text-[31px] text-[#081120] font-medium">Explore Biggest Towns in Bulgaria</h1>
          <div className="flex flex-row absolute right-0 top-[15px] w-[127px] h-[48px] ">
            <p className="text-[16px] font-semibold cursor-pointer">See More</p>
            <p className="cursor-pointer">
              <Image src={ARROW} alt="Arrow icon" />
            </p>
          </div >
        </div>
        <div className="flex flex-row justify-center web:space-x-28 space-x-10 mt-[5.5rem] items-center">
          <div className="flex flex-col gap-10 justify-center items-center ">
            <figure className=" cursor-pointer  web:w-[300px] web:h-[300px] w-[160px] h-[160px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%]" src={SOFIA} alt="Sofia icon" />
            </figure>
            <h2 className="text-[25px] text-[#081120] font-medium">Sofia</h2>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <p className=" cursor-pointer  web:w-[300px] web:h-[300px] w-[160px] h-[160px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%]" src={PLOVDIV} alt="Plovdiv icon" />
            </p>
            <h2 className="text-[25px] text-[#081120] font-medium">Plovdiv</h2>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <p className=" cursor-pointer  web:w-[300px] web:h-[300px] w-[160px] h-[160px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%]" src={VELIKOTARNOVO} alt="Veliko Tarnovo icon" />
            </p>
            <h2 className="w-[185px] text-[25px] text-[#081120] font-medium">Veliko Tarnovo</h2>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <p className=" cursor-pointer web:w-[300px] web:h-[300px] w-[160px] h-[160px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%]" src={RUSE} alt="Ruse icon" />
            </p>
            <h2 className="text-[25px] text-[#081120] font-medium">Ruse</h2>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="flex flex-row gap-3 justify-center items-center web:w-full  web:h-[922px] tablet:w-[835px] tablet:h-[873px] bg-[#13294B] mt-[200px] ">
        <div className="web:w-[50%] tablet:w-[30%] flex flex-col gap-3 justify-end items-end">
          <p className="cursor-pointer web:mt-[50px] web:mb-[50px] tablet:mt-[-150px]">
            <Image src={PICTURES} alt="Arrow icon" />
          </p>
        </div >
        <div className="web:w-[50%] flex flex-col web:gap-20 tablet:gap-11 justify-center items-center tablet:mt-10">
          <h1 className="web:w-[582px] tablet:w-[484px] web:text-[39px] text-[25px] text-[#FFFFFF] font-medium text-start">How it Works</h1>
          <p className="web:w-[582px] web:h-[133px] tablet:w-[482px] tablet:h-[152px] text-[16px] text-[#FFFFFF]">Cursus ante mauris suspendisse laoreet placerat porta amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis mollis porttitor. Cursus ante mauris suspendisse laoreet placerat porta amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis mollis porttitor.</p>
          <p className="web:w-[582px] web:h-[133px] tablet:w-[482px] tablet:h-[152px] text-[16px] text-[#FFFFFF]">Cursus ante mauris suspendisse laoreet placerat porta amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis mollis porttitor. Cursus ante mauris suspendisse laoreet placerat porta amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis mollis porttitor.</p>
          <p className="web:w-[582px] tablet:w-[484px] tablet:mb-20 tablet:mt-20">
            <Btn
              className="w-[282px] h-[43px] bg-[#FAFAFA] rounded-[5px] text-[#081120] text-[16px]  font-semibold "
              variant="outlined"
              text="Create Account"
            // onClick={}
            />
          </p>
        </div>
      </div>

      {/* Make Your Own Tours */}
      <div className="relative flex flex-col gap-10 justify-center items-center web:w-[1655px] tablet:w-[835px] h-[608px] mt-[105px]">
        <h1 className="web:text-[39px] tablet:text-[31px] text-[#081120] font-medium">Make Your Own Tours</h1>
        <div className="flex flex-row">

          {/* Create Tour */}
          <p className=" web:mt-[100px] web:w-[79px] web:h-[38px] tablet:mt-[50px] tablet:w-[36px] tablet:h-[18.31px]">
            <Image className="w-[100%] h-[100%]" src={VECTOR1} alt="Vector1 icon" />
          </p>
          <div className="flex flex-col gap-10 justify-center items-center">
            <p className=" cursor-pointer web:w-[200px] web:h-[200px] tablet:w-[94.39px] tablet:h-[95.92px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%] h-[100%]" src={CREATE} alt="Create icon" />
            </p>
            <h2 className="web:text-[25px] tablet:text-[16px] text-[#081120] font-medium">Create Tour</h2>
          </div>

          {/* Plan the route */}
          <p className=" web:mt-[40px] web:w-[235px] web:h-[152px]  tablet:mt-[20px] tablet:mr-[5px] tablet:w-[111px] tablet:h-[72.24px]">
            <Image className="w-[100%] h-[100%]" src={VECTOR7} alt="Vector7 icon" />
          </p>
          <div className="flex flex-col gap-10 justify-center items-center ml-[-25px]">
            <p className=" cursor-pointer web:w-[200px] web:h-[200px] tablet:w-[94.39px] tablet:h-[95.92px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%] h-[100%]" src={PLAN} alt="Plan icon" />
            </p>
            <h2 className="web:text-[25px] tablet:text-[16px] text-[#081120] font-medium ">Plan the route</h2>
          </div>

          {/* Describe and shoot */}
          <p className=" web:mt-[70px] web:ml-[1px] web:w-[205px] web:h-[104px] tablet:mt-[25px] tablet:ml-[-5px] tablet:w-[97.14px] tablet:h-[49.58px]">
            <Image className="w-[100%] h-[100%]" src={VECTOR3} alt="Vector3 icon" />
          </p>
          <div className="flex flex-col gap-10 justify-center items-center web:ml-[-50px] tablet:ml-[-30px]">
            <p className=" cursor-pointer  web:w-[200px] web:h-[200px] tablet:w-[94.39px] tablet:h-[95.92px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%] h-[100%]" src={DESCRIBE} alt="Describe icon" />
            </p>
            <h2 className="web:text-[25px] tablet:text-[16px] text-[#081120] font-medium">Describe and shoot</h2>
          </div>

          {/* Review and publish */}
          <p className=" web:mt-[50px] web:ml-[-20px] web:w-[213px] web:h-[125px] tablet:mt-[10px] tablet:ml-[-25px] tablet:w-[110px] tablet:h-[70px]">
            <Image className="w-[100%] h-[100%]" src={VECTOR8} alt="Vector8 icon" />
          </p>
          <div className="flex flex-col gap-10 justify-center items-center web:ml-[-20px] tablet:ml-[-25px]">
            <p className=" cursor-pointer  web:w-[200px] web:h-[200px]  tablet:w-[94.39px] tablet:h-[95.92px]"
              onClick={() => console.log('Click')}>
              <Image className="w-[100%] h-[100%]" src={REVIEW} alt="Review icon" />
            </p>
            <h2 className="web:text-[25px] tablet:text-[16px] text-[#081120] font-medium">Review and publish</h2>
          </div>
          <p className=" web:mt-[70px] web:ml-[-25px] web:w-[79px] web:h-[38px] tablet:mt-[30px] tablet:ml-[-30px] tablet:w-[37px] tablet:h-[17.3px]">
            <Image className="w-[100%] h-[100%]" src={VECTOR5} alt="Vector5 icon" />
          </p>
    
        </div>
        <div className="flex flex-row absolute web:right-[150px] tablet:right-[50px] bottom-[-100px] ">
          <p className="text-[16px] font-semibold cursor-pointer">Learn More</p>
          <p className="cursor-pointer">
            <Image src={ARROW} alt="Arrow icon" />
          </p>
        </div>
      </div>

      {/* Testimonials Heading */}

export default HomePage;
