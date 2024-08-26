export default function CardSkeleton() {
  return (
    <div
      className={`w-[176px] h-[224px] tablet:w-[282px] tablet:h-[492px] web:w-[330px] webl:w-[430px] web:h-[522px] bg-[#FAFAFA] border border-[#D1D0D8] rounded-[5px] tablet:rounded-[15px]`}
    >
      <div className="mb-[6px] tablet:mb-[8.5px] w-full h-[110px] tablet:h-[262px] web:h-[256px] rounded-[5px] tablet:rounded-t-[15px] bg-[#e2e2e2] animate-pulse"></div>
      <div className="flex flex-col pl-[8px] tablet:pl-[24px] pb-[12px] web:pb-[24px] tablet:pr-[12px] web:pr-[8px]">
        <div className="flex justify-between mb-[6px] web:mb-[18px] pr-[6px] tablet:pr-[16px]">
          <span className="w-[100px] tablet:w-[120px] web:w-[151px] h-[20px] bg-[#e2e2e2] animate-pulse rounded-[5px]"></span>
          <div className="w-[60px] flex justify-end ">
            <span className="w-[50px] tablet:w-full h-[20px] bg-[#e2e2e2] animate-pulse rounded-[5px]"></span>
          </div>
        </div>
        <span className="inline-block mb-[12px] tablet:mb-[6px] w-[70%] h-[28px] bg-[#e2e2e2] animate-pulse rounded-[5px]"></span>
        <div className="hidden tablet:block tablet:h-[90px] web:h-[108px] bg-[#e2e2e2] animate-pulse rounded-[5px]">
        </div>
        <span className="inline-block w-[25%] h-[20px] tablet:h-[32px] mt-[12px] bg-[#e2e2e2] animate-pulse rounded-[5px]"></span>
      </div>
    </div>
  );
}
