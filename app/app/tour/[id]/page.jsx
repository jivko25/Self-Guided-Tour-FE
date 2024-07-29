"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

function TourDetails() {
  const param = useParams();
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-[1000px]">
        <div>
          <h1 className="text-[#081120] text-[39px] font-medium font-['Inter'] leading-[58.50px]">
            Sofia Theaters
          </h1>
          <img src="" alt="" />
          <span className="text-[#13294b] text-base font-normal font-['Inter'] leading-none">
            4.8
          </span>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-[894] h-full max-h-[520px]">
          <img
            className="col-span-2 row-span-2 object-cover w-[582px] h-[500px] rounded-tl-[15px] rounded-bl-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main Image"
          />
          <img
            className="object-cover w-[431px] h-[244px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
          />
          <img
            className="object-cover w-[431px] h-[244px] rounded-tr-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            className="object-cover w-[431px] h-[244px] "
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
          <img
            className="object-cover w-[431px] h-[244px] rounded-br-[15px]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full h-[200px]">
        <div>
          <img src="" alt="" />
          <div>
            <h4>Title</h4>
            <p>Lorem</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h4>Title</h4>
            <p>Lorem</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full h-[500px]">
        <div className="w-[733px]">
          <div className="">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.
            </p>
          </div>
          <div className="">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              atque tenetur quos in esse ipsam eos officiis, asperiores facilis
              ad alias sint quod mollitia doloribus ipsa facere quas sunt
              consequatur.
            </p>
          </div>
        </div>

        <div className="w-[430px]">
          <div>
            <h2>Title</h2>
            <h1>STARS</h1>
          </div>

          <div>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              magni consectetur cum repellendus, sapiente reiciendis dolor
              eveniet inventore tempore temporibus ullam. Rem vitae, sed omnis
              earum dicta beatae nihil expedita?
            </p>
            <button>Buy Tour</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[#081120] text-2xl font-medium font-['Inter'] leading-9">
          How Jauntster works
        </h1>
        <div className="flex gap-[30px]">
          <div className="flex items-center justify-evenly  w-[733px] h-[278px] bg-neutral-50 rounded-[5px] border border-[#d1d0d8]">
            <img src="" alt="" />
            <div className="mt-[30px]">
              <h1 className="mb-[20px] text-[#081120] text-xl font-medium font-['Inter'] leading-[30px]">
                How to get the most of the tour and its story
              </h1>
              <p className="w-[667px] h-[95px] text-[#13294b] text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                hic laudantium ex ut labore eius quas quidem, optio eos porro
                dolores officiis iure molestias! Tempore ut optio placeat fugit
                excepturi?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-evenly  w-[733px] h-[278px] bg-neutral-50 rounded-[5px] border border-[#d1d0d8]">
            <img src="" alt="" />
            <div className="mt-[30px]">
              <h1 className="mb-[20px] text-[#081120] text-xl font-medium font-['Inter'] leading-[30px]">
                How to get the most of the tour and its story
              </h1>
              <p className="w-[667px] h-[95px] text-[#13294b] text-base font-normal font-['Inter'] leading-normal">
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
