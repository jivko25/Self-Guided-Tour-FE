"use client";
import Image from "next/image";
import imgSrc from "../../public/images/BoughtTour.png";
import Btn from "@/app/components/Buttons/Btn";
import { useRouter } from "next/navigation";
function Success() {
  const router = useRouter();

  return (
    <section className="flex flex-col justify-center items-center  text-[#081120] web:mt-9 tablet:mt-36 smallPhone:mt-24 ">
      <h1 className=" tablet:text-3xl smallPhone:text-xl font-medium text-center smallPhone:w-3/5">
        You just bought a tour! Happy walking!
      </h1>
      <p className=" tablet:text-xl text-base  text-center mt-6 phone:w-3/5">
        You will receive an email with more information about the trip and you
        can find your purchased tour in My tour section.
      </p>
      <Image
        quality={100}
        src={imgSrc}
        width={568}
        height={435}
        priority={true}
        alt="Tour Bought Succesffully"
        className="mt-9 web:w-[700px] web:h-[466px]
                        smallPhone:w-[393px] smallPhone:h-[286px]"
      />
      <div className="flex gap-7 mt-16 mb-48 tablet:flex-row smallPhone:flex-col ">
        <Btn
          variant="transparent-outlined"
          text="Home"
          className="web:w-[280px]
                    tablet:w-[182px]
                    smallPhone:w-[360px] smallPhone:order-2"
          onClick={() => router.push("/")}
        />
        <Btn
          variant="filled"
          text="My Tours"
          className="web:w-[280px]
                     tablet:w-[182px] tablet:order-2
                     smallPhone:w-[360px] "
          onClick={() => router.push("/profile/my-library")}
        />
      </div>
    </section>
  );
}

export default Success;
