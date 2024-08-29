function PaymentElementSkeleton() {
  return (
    //<div className="tablet:w-[583.11px] h-[606px] phone:w-[361px] "></div>
    <div className="flex flex-col gap-16 m-16 items-center">
      <div className="mt-2 w-[366px] tablet:w-[590px]  h-[59px] bg-[#FFFF] flex items-center justify-center">
        <div className="animate-pulse bg-gray-300 h-1/2 m-3 w-1/2 rounded-md"></div>
      </div>
      <div className="flex gap-5  items-center">
        <div className="mt-2 w-[177px] tablet:w-[285px]  h-[59px] bg-[#FFFF] flex items-center justify-center  gap-8">
          <div className="animate-pulse bg-gray-300 h-1/2 m-3 w-1/2 rounded-md"></div>
        </div>
        <div className="mt-2 w-[177px] tablet:w-[285px]  h-[59px] bg-[#FFFF] flex items-center justify-center  gap-8">
          <div className="animate-pulse bg-gray-300 h-1/2 m-3 w-1/2 rounded-md"></div>
        </div>
      </div>
      <div className="mt-2 phone:w-[366px] tablet:w-[590px]  h-[59px] bg-[#FFFF] flex items-center justify-center  gap-8">
        <div className="animate-pulse bg-gray-300 h-1/2 m-3 w-1/2 rounded-md"></div>
      </div>
      <div className="flex gap-5 flex-col tablet:flex-row items-center">
        <div className="mt-2 phone:w-[366px] tablet:w-[285px]  h-[59px] bg-[#FFFF] flex items-center justify-center  gap-8">
          <div className="animate-pulse bg-gray-300 h-1/2 m-3 w-1/2 rounded-md"></div>
        </div>
        <div className="mt-2 phone:w-[366px] tablet:w-[285px]  h-[59px] bg-[#FFFF] flex items-center justify-center  gap-8">
          <div className="animate-pulse bg-gray-300 h-1/2 m-3 w-1/2 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default PaymentElementSkeleton;
