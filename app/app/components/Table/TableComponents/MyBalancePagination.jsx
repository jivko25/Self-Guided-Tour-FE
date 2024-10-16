import Image from "next/image.js";
import PrevPageIcon from "../../../public/svg/chevron-back.svg";
import NextPageIcon from "../../../public/svg/chevron-next.svg";
import DownIcon from "../../../public/svg/chevron-down.svg";

export default function MyBalancePagination({
  totalPages,
  page,
  results,
  resultsPerPage,
  onNextPage,
  onPrevtPage,
}) {
  return (
    <>
      <div
        className=" justify-between items-center px-10 
     py-4 border-b border-[#D1D0D8] h-[74px] text-[#081120]
     text-base font-normal rounded-tl-[5px] rounded-tr-[5px]
            web:w-[1000px]
            tablet:w-[700px] 
            phone:w-[500px]
           hidden tablet:flex "
      >
        <section className="ml-10">
          <p>
            {resultsPerPage} of {results} results
          </p>
        </section>
        <section className="flex gap-4 align-baseline  ">
          <p className="my-auto">You are on page</p>
          <div className="w-16 h-9 flex justify-between p-2 items-center">
            <span className="text-[25px] ">{page}</span>
            <div className="w-5 h-5 relative">
              <Image src={DownIcon} width={40} height={36} alt="down icon" />
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={onPrevtPage}>
              {" "}
              <Image src={PrevPageIcon} width={40} height={36} alt="prev" />
            </button>
            <button onClick={onNextPage}>
              {" "}
              <Image src={NextPageIcon} width={40} height={36} alt="nex" />
            </button>
          </div>
        </section>
      </div>
      <div className="flex mt-6 justify-center gap-4 tablet:hidden">
        <button onClick={onPrevtPage}>
          {" "}
          <Image src={PrevPageIcon} width={40} height={36} alt="prev" />
        </button>
        <button onClick={onNextPage}>
          {" "}
          <Image src={NextPageIcon} width={40} height={36} alt="next" />
        </button>
      </div>
    </>
  );
}
