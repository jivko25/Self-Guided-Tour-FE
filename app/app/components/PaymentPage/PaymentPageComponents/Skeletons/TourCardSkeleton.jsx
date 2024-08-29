function TourCardSkeleton() {
  return (
    <section
      className=" hidden web:flex flex-col  shrink-0 self-start
                    w-[582] max-h-[524] rounded-[15px] 
                    border border-[#D1D0D8] text-[#081120] "
    >
      <div className="animate-pulse bg-gray-300 rounded-t-[15px] h-[161px] w-[582px] rounded-b-[5px] mb-3 "></div>

      <div className=" m-5 mb-7 mt-4">
        <div className=" flex flex-row justify-between text-[24px] m-2 font-medium pb-6 ">
          <h1 className="animate-pulse bg-gray-300 h-6 w-1/2 rounded-md"></h1>
          <div className="animate-pulse bg-gray-300 h-6 w-1/12 rounded-md"></div>
        </div>
        <div className="border-b-gray-300 pb-6">
          <div className="animate-pulse bg-gray-300 h-6 w-full mt-7 rounded-md "></div>
        </div>

        <div className="flex justify-between mt-6 text-[24px] mb-16 font-medium  ">
          <p className="animate-pulse bg-gray-300 h-6 w-1/4 rounded-md"></p>
          <div className="animate-pulse bg-gray-300 h-6 w-1/4 rounded-md"></div>
        </div>
        <div className=" text-center">
          <div className="animate-pulse bg-gray-300 h-12 w-full rounded-md"></div>
        </div>
      </div>
    </section>
  );
}

export default TourCardSkeleton;
