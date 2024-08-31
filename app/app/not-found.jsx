
"use client";
import Image from "next/image";
import NotFound from "./public/images/not-found.png";
import Btn from "./components/Buttons/Btn";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  return (
    <section className="flex flex-col text-[#081120] absolute mt-[125px] pb-[138px] items-center mx-4
                        tablet:static tablet:pb-0 tablet:my-[108px] web:my-[136px]">
      <div className="mb-[87px] tablet:mb-[108px] tablet:mb-[136px] tablet:flex items-center">
        <div className="text-center mb-[71px]">
          <h1 className="text-[24px] font-medium mb-3 tablet:text-[61px] web:text-[120px]">404</h1>
          <p className="tablet:text-[20px] web:text-[31px]">Page Not Found</p>
        </div>
        <Image
          src={NotFound}
          alt="Page not found"
          priority={true}
          style={{ objectFit: "cover" }}
          className="w-[362px] h-[262px] tablet:w-[435px] tablet:h-[315px] web:w-[608px] web:h-[440px]"
        />
      </div>
      <Btn className="w-full tablet:w-[182px] web:w-[279px] h-[44px]" text="Go To Homepage" onClick={ () => router.push('/') }/>
    </section>
  );
}
