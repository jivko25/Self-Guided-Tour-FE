import Image from "next/image.js";

import PrevPageIcon from "../../../public/svg/chevron-left.svg";
import NextPageIcon from "../../../public/svg/chevron-right.svg";
import DownIcon from "../../../public/svg/chevron-down.svg";

export default function WebPagination({ toursLength }) {
  return (
    <div className="w-full h-[60px] flex justify-between items-center px-10 py-4 bg-[#b6bdc7] text-[#081120]  text-base font-normal rounded-tl-[5px] rounded-tr-[5px] smallPhone:hidden tablet:flex ">
      <section className="ml-10">
        <p>
          {toursLength} of {toursLength} results
        </p>
      </section>
      <section className="flex gap-4 align-baseline  ">
        <p className="my-auto">You are on page</p>
        <div className="w-16 h-9 flex justify-between p-2 items-center bg-neutral-50 rounded-[5px]">
          <span className="text-[25px] ">1</span>
          <div className="w-5 h-5 relative">
            <Image src={DownIcon} width={40} height={36} />
          </div>
        </div>
        <div className="flex gap-4">
          <button>
            {" "}
            <Image src={PrevPageIcon} width={40} height={36} />
          </button>
          <button>
            {" "}
            <Image src={NextPageIcon} width={40} height={36} />
          </button>
        </div>
      </section>
    </div>
  );
}
