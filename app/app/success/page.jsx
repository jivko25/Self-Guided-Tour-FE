import Image from "next/image.js";
import TourSuccessImage from "../../app/public/svg/tour-submission-success.svg";
import Btn from "../components/Buttons/Btn.jsx";

export default function TourSuccess() {
  return (
    <main className="flex flex-col items-center align-middle justify-center w-full my-auto tablet:my-32 web:my-0 px-[16px] tablet:mb-64 web:mb-48">
      <h1 className="text-[#081120] max-w-[361px] tablet:max-w-[584px] text-center text-xl font-medium mb-6 tablet:text-[31px] tablet:leading-[46.5px] web:max-w-full">
        Congrats! We received your tour submission
      </h1>
      <p className=" text-center max-w-[361px] tablet:max-w-[584px] text-[#13294b] text-base font-normal leading-[30px] tablet:text-xl">
        After a quick review we will notify for your tour status. You can check
        it in My tours section
      </p>
      <Image
        className="mt-6 w-[393px] tablet:w-fit"
        src={TourSuccessImage}
        alt="TourSubmissionSuccess"
        style={{height: 'auto'}}
      />
      <section className="flex w-full h-40 flex-col gap-4 tablet:h-fit tablet:flex-row items-center justify-center">
        <div className="w-full tablet:w-[181px] tablet:order-2 web:w-[279px]">
          <Btn fullWidth link="/my-tours" variant="filled" text="My Tours" />
        </div>
        <div className="w-full tablet:w-[181px] web:w-[279px]">
          <Btn fullWidth link="/" variant="outlined" text="Home" />
        </div>
      </section>
    </main>
  );
}
