import Btn from "@/app/components/Buttons/Btn";
import GoogleMaps from "@/app/components/GoogleMaps/GoogleMaps";
import Link from "next/link";
import Image from "next/image";
import Pencil from "../../public/svg/pencil.svg";

export default function Preview() {
  return (
    <div className="w-[100%] h-full web:relative mt-24 tablet:mt-[151px] web:mt-[64px]">
      <section
        className="w-[100%] flex flex-col align-center text-[14px]
                          mb-[30px] web:mb-0 font-medium text-[#081120] text-[14px] web:text-[16px]
                          px-[8px] phone:px-[16px] tablet:px-[125px] web:px-[56px] 
                          web:h-[582px] web:w-1/2"
      >
        <div className="overflow-y-scroll web:pr-[40px] we:w-[100%] web:mr-[24px]">
          <header className="flex flex-row justify-between">
            <h2 className="text-[24px] font-medium">
              Tour locations
            </h2>
            <Link
              className="mt-[7px] tablet:mt-0 text-[#E8B600]"
              href={"/edit"}
            >
              <Image
                src={Pencil}
                width={24}
                height={24}
                alt="pencil"
              />
            </Link>
          </header>
          <p className="max-w-[296px] tablet:max-w-[425px] font-normal mt-[12px]">
            {/* TODO */}
          </p>
          <section
            className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[12px] mt-[24px] web:w-1/2 web:h-[582px] 
                            web:absolute web:right-[60px] web:top-0"
          >
            <GoogleMaps />
          </section>
          <section className="flex flex-wrap gap-6 mt-[36px] tablet:mt-[24px] web:mt-[36px]">
            {/* TODO */}
          </section>
        </div>
        {/* TODO */}
      </section>
      <div className="web:border-t border-[#E7EAED] mb-[130px] tablet:mb-0">
        <div className="web:w-1/2">
          <div
            className="mt-[64px] tablet:mt-[19px] tablet:mb-[38px] web:mt-[36px] web:mb-[59px] flex flex-row justify-center tablet:justify-between tablet:px-[130px] web:px-0
                      web:w-[100%] web:pr-[125px] font-bold"
          >
            <Btn
              className="text-[16px] w-[177px] tablet:w-[128px] h-[43px] self-center"
              variant="transparent"
              text="Prev"
            />
            <Btn
              className="smallPhone:w-[177px] text-[16px] border-b-2 border-b-[#E8B600] tablet:w-[128px] h-[43px] self-center"
              variant="transparent"
              text="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
