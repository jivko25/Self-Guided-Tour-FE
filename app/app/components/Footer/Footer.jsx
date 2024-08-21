"use client"
import { usePathname } from "next/navigation";
import CallOutline from "../Svg/CallOutline";
import Facebook from "../Svg/Facebook";
import HelpCircleOutline from "../Svg/HelpCircleOutline";
import Instagram from "../Svg/Instagram";
import Linkedin from "../Svg/Linkedin";
import MailOutline from "../Svg/MailOutline";
import MapOutline from "../Svg/MapOutline";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isTourPage = pathname.startsWith("/tour/");

  const footerColors =
  isTourPage
    ? "text-[#13294b] bg-white"
    : "text-white bg-[#13294b]";

  const iconColors =
  isTourPage
    ? "text-[#13294b]"
    : "text-white";

  return (
    <div className={`hidden web:flex web:py-[0%] tablet:flex tablet:py-[10%] flex-col items-center justify-center w-full min-h-[474px] web:px-[20%] tablet:px-[3%] ${footerColors}`}>
      <h1 className="flex w-full max-w-[1336px] text-center text-[31px] font-medium font-['Inter'] mb-[55px] mt-[35px]">
        LOGO
      </h1>
      <section className="flex w-full max-w-[1336px] web:gap-[100px] tablet:gap-[30px]">
        <ul className="flex flex-col flex-1 gap-[30px] web:mr-[10%] tablet:mr-[40px]">
          <li className="flex items-center justify-start gap-[10px]">
            <CallOutline  className={iconColors}/>
            <p className="text-base font-normal font-['Inter']">
              Call +359 899 999 999
            </p>
          </li>
          <li className="flex items-center justify-start gap-[10px]">
            <MailOutline  className={iconColors}/>
            <p className="text-base font-normal font-['Inter']">
              support@jauntster.com
            </p>
          </li>
          <li className="flex items-center justify-start gap-[10px]">
            <HelpCircleOutline  className={iconColors}/>
            <p className="text-base font-normal font-['Inter']">Help</p>
          </li>
          <li className="flex items-center justify-start gap-[10px]">
            <MapOutline  className={iconColors}/>
            <p className="text-base font-normal font-['Inter']">About Us</p>
          </li>
        </ul>
        <div className="flex flex-col flex-1">
          <Link
            href=""
            className="text-base font-normal font-['Inter'] mb-[30px]"
          >
            Explore
          </Link>
          <div className="flex flex-col gap-[10px]">
            <Link href="" className="text-base font-normal font-['Inter']">
              Sofia
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              Plovdiv
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              Veliko Tarnovo
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              Ruse
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              Burgas
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <Link
            href=""
            className="text-base font-normal font-['Inter'] mb-[30px]"
          >
            Menu
          </Link>
          <div className="flex flex-col gap-[10px]">
            <Link href="" className="text-base font-normal font-['Inter']">
              Search
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              Account
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              Create Tour
            </Link>
            <Link href="" className="text-base font-normal font-['Inter']">
              My Tours
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-base font-normal font-['Inter'] mb-[30px]">
            Stay in Touch
          </p>
          <div className="flex gap-[20px]">
            <a href="#">
              <Instagram  className={iconColors}/>
            </a>
            <a href="#">
              <Facebook  className={iconColors}/>
            </a>
            <a href="#">
              <Linkedin  className={iconColors}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
