import Image from "next/image.js";
import PrevPageIcon from "../../../public/svg/chevron-left.svg";
import NextPageIcon from "../../../public/svg/chevron-right.svg";

export default function MobilePagination() {
  return (
    <div className="flex mt-6 justify-center gap-4 tablet:hidden">
      <button>
        {" "}
        <Image src={PrevPageIcon} width={40} height={36} alt="prev" />
      </button>
      <button>
        {" "}
        <Image src={NextPageIcon} width={40} height={36} alt="next" />
      </button>
    </div>
  );
}
