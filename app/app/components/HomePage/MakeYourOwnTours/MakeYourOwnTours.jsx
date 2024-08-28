import React from "react";
import VECTOR1 from "../../../public/Home/Vector 1.svg";
import VECTOR7 from "../../../public/Home/Vector 7.svg";
import VECTOR3 from "../../../public/Home/Vector 3.svg";
import VECTOR8 from "../../../public/Home/Vector 8.svg";
import VECTOR5 from "../../../public/Home/Vector 5.svg";
import CREATE from "../../../public/Home/Group 42.svg";
import PLAN from "../../../public/Home/Group 36.svg";
import DESCRIBE from "../../../public/Home/Group 39.svg";
import REVIEW from "../../../public/Home/Group 44.svg";
import Image from "next/image";
import Link from "next/link";
import SeeMoreSvgHomePage from "../../Svg/SeeMoreSvgHomePage";
function MakeYourOwnTours() {
  return (
    <div className="">
      
      <Link
        className="hidden space-x-2 items-start
          web:flex web:h-[19px]
          tablet:flex tablet:h-[19px]
          phone:
          smallPhone:
        "
        href="/explore"
      >
        <span
          className="text-[#081120] text-base font-semibold font-['Inter']
            web:w-[74px] web:h-[19px] web:text-base
            tablet:w-[74px] tablet:h-[19px] tablet:text-base
            phone:
            smallPhone:
            "
        >
          See More
        </span>
        <SeeMoreSvgHomePage
          className="hidden
            web:w-6 web:h-6 web:block
            tablet:w-6 tablet:h-6 tablet:block
            phone:
            smallPhone:
            "
        />
      </Link>
    </div>
  );
}

export default MakeYourOwnTours;
