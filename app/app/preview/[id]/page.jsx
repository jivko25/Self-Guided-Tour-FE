"use client";

import Btn from "@/app/components/Buttons/Btn";
import GoogleMaps from "@/app/components/GoogleMaps/GoogleMaps";
import Link from "next/link";
import Image from "next/image";
import Pencil from "../../public/svg/pencil.svg";
import { useCreateTour } from "@/app/context/createTourContext";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getOne } from "@/app/actions/tourActions";

export default function Preview() {
  const { id } = useParams();
  const { formData } = useCreateTour();
  const [previewData, setPreviewData] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    if (id == 0) {
      setPreviewData(formData.step2Data);
    } else {
      getOne(id).then((result) => {
        const { data, error } = result;

        if (data) {
          setPreviewData(data.landmarks);
        } else {
          setError(error);
        }
      });
    }
  }, [id, formData]);
  return (
    <div
      className="w-[100%] h-full web:relative mt-24 tablet:mt-[151px] web:mt-[64px] 
                px-[8px] phone:px-[16px] tablet:px-[125px] web:px-[56px] "
    >
      <section
        className="w-[100%] flex flex-col align-center text-[14px]
                          mb-[30px] web:mb-0 font-medium text-[#081120] text-[14px] web:text-[16px]
                          web:h-[582px] web:w-1/2"
      >
        <div className="overflow-y-scroll web:pr-[40px] we:w-[100%] web:mr-[24px]">
          <header className="flex flex-row justify-between">
            <h2 className="text-[24px] font-medium">Tour locations</h2>
            <Link
              className="mt-[7px] tablet:mt-0 text-[#E8B600]"
              href={"/edit"}
            >
              <Image src={Pencil} width={24} height={24} alt="pencil" />
            </Link>
          </header>
          <p className="max-w-[296px] tablet:max-w-[425px] font-normal mt-[12px]">
            {/* TODO */}
          </p>
          <section
            className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[12px] web:w-1/2 web:h-[582px] 
                            web:absolute web:right-[60px] web:top-0"
          >
            <GoogleMaps />
          </section>
          <section className="flex flex-wrap gap-6 mt-[36px] tablet:mt-[24px] web:mt-[36px]">
            {previewData.length > 0 && (
              <ul className="text-[16px] text-[#13294B]">
                {previewData.map((loc, i) => (
                  <li
                    key={i}
                    className="relative ml-5 before:absolute before:block before:content-[''] 
                                before:bg-[#617086] before:w-[0.5px] before:top-0 before:bottom-0
                                first:before:top-[15px]"
                  >
                    <div className="absolute -left-[7px] w-[15px] h-[15px] border-[0.5px] rounded-full border-[#617086]"></div>
                    <div className="ml-6">
                      <span className="font-light">Location {i + 1}</span>
                      <h3 className="font-medium text-[18px] text-[#081120]">
                        {loc.locationName}
                      </h3>
                      <div className="font-semibold text-[#4285F4] flex gap-x-11">
                        <span>Play Audio</span>
                        <span>Show directions</span>
                      </div>
                      <p className="text-[14px]">{loc.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </section>
      <div className="web:border-t border-[#E7EAED] mb-[130px] tablet:mb-0">
        <div className="web:w-1/2">
          <div
            className="web:w-[100%] mt-[64px] tablet:mt-[19px] tablet:mb-[38px] web:mt-[36px] web:mb-[59px] 
            flex flex-col tablet:flex-row gap-6 tablet:gap-5 web:gap-6 tablet:justify-center"
          >
            <Btn
              className="w-full tablet:w-[182px] web:w-[220px] webl:w-[278px] h-[44px] font-semibold"
              variant="outlined"
              text="About tour"
            />
            <Btn
              className="w-full tablet:w-[182px] web:w-[220px] webl:w-[278px] h-[44px] font-semibold"
              variant="filled"
              text="Buy now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
