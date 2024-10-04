import Image from "next/image.js";
import TourSuccessImage from "../../app/public/svg/tour-submission-success.svg";
import Btn from "../components/Buttons/Btn.jsx";

export default function TourSuccess() {
  return (
    <main className="flex flex-col items-center align-middle justify-center w-full  my-auto tablet:my-20 web:my-0  ">
      <h1 className="text-[#081120] w-[300px]    text-center text-xl font-medium font-['Inter'] leading-[46.50px]  tablet:mb-2 tablet:w-[540px]  tablet:text-[31px] web:w-full">
        Congrats! We received your tour submission
      </h1>
      <p className=" text-center w-[300px]  text-[#13294b] text-base font-normal font-['Inter'] leading-[30px] tablet:w-[500px]  tablet:text-xl">
        After a quick review we will notify for your tour status. You can check
        it in My tours section
      </p>
      <Image
        className="mt-6 w-[393px]  tablet:w-fit "
        src={TourSuccessImage}
        alt="TourSubmissionSuccess"
        height={0}
        width={0}
      />
      <section className="flex w-full h-40 flex-col gap-4  tablet:h-fit tablet:flex-row items-center justify-center">
        <div className="w-[90%] tablet:w-[183px] tablet:order-2 web:w-[278px]">
          <Btn fullWidth link="/my-tours" variant="filled" text="My Tours" />
        </div>
        <div className="w-[90%] tablet:w-[183px] web:w-[278px]">
          <Btn fullWidth link="/" variant="outlined" text="Home" />
        </div>
      </section>
    </main>
  );
}
