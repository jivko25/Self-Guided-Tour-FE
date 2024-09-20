import React from "react";
import makeYourOwnToursImg from "../../../public/images/makeYourOwnToursImg.png";
import Image from "next/image";
import Link from "next/link";
import SeeMoreSvgHomePage from "../Svgs/SeeMoreSvgHomePage";
function MakeYourOwnTours() {
  return (
    <div className="hidden  items-center justify-center w-[95%] h-full 
    web:flex web:min-h-[608px] web:max-w-[1792px]
    tablet:flex tablet:min-h-[500px]
    ">

      <div className="flex flex-col items-center justify-center gap-[50px]">
        <h1 className="text-[#081120] font-medium font-['Inter'] leading-[58.50px]
        web:text-[39px] 
        tablet:text-[31px]

        ">Make Your Own Tours</h1>
        <div className="w-full max-w-[1792px]">
          <Image className="w-full" src={makeYourOwnToursImg} alt="Description of image 1" />
        </div>
        <Link
          className="hidden space-x-2 justify-end w-full
          web:flex web:h-[19px]
          tablet:flex tablet:h-[19px]
        "
          href="/explore"
        >
          <span
            className="text-[#081120] text-base font-semibold font-['Inter']
            web:text-base
            tablet:text-base
            phone:
            smallPhone:
            "
          >
            Learn More
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
    </div>
  );
}

export default MakeYourOwnTours;
