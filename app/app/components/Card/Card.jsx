"use client";
import Image from "next/image";
import StarRating from "../StarRating/StarRating";
import { useEffect, useState } from "react";

export default function Card({
  testimonial = false,
  imageSrc,
  location = '',
  title = '',
  description,
  price,
  rating,
  classes,
  creatorName = '',
  creatorImg,
  onclick,
}) {
  const [isWeb, setIsWeb] = useState(false);

  useEffect(() => {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    if ((typeof window !== 'undefined')) {
      if (window.innerWidth >= 1280) {
        setIsWeb(true);
      } else {
        setIsWeb(false);
      }
    }
  };
  return (
    <>
      {testimonial ? (
        <div
          className={`w-[176px] h-[224px] tablet:w-[282px] tablet:h-[503px] web:w-[325px] webl:w-[430px] web:h-[738px] bg-[#FAFAFA] border border-[#D1D0D8] rounded-[5px] tablet:rounded-[15px] ${classes}`}
          onClick={onclick}
        >
          <div className="mb-[6px] rounded-t-[5px] tablet:rounded-t-[15px] rounded-b-[5px] tablet:mb-[24px] w-full h-[110px] tablet:h-[257px] web:h-[450px] relative">
            <Image
              src={imageSrc}
              alt="Card image"
              fill={true}
              sizes="(max-width: 1280px) 50vw, 33vw"
              className="rounded-t-[5px] tablet:rounded-t-[15px] rounded-b-[5px]"
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col ml-[8px] justify-center tablet:ml-[24px] mb-[12px] tablet:mb-[36px] tablet:mr-[17px] pr-[8px] tablet:mr-[24px] text-[#13294B]">
            <div className="flex justify-between items-center text-[13px] tablet:text-[16px] mb-[36px] tablet:mb-[18px] pr-[6px] tablet:pr-[16px]">
              <div className="flex flex-row items-center w-[151px]">
                {creatorImg ? (
                  <div className="hidden tablet:block rounded-full tablet:mr-[8px] tablet:w-[40px] tablet:h-[40px] web:w-[60px] web:h-[60px] relative">
                    <Image
                      src={creatorImg}
                      alt="User image"
                      fill={true}
                      sizes="(max-width: 1280px) 20vw, 10vw"
                      className="rounded-full"
                      priority={true}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <div className="hidden tablet:flex justify-center items-center tablet:mr-[8px] web-[12px] rounded-full tablet:w-[40px] tablet:h-[40px] web:w-[60px] web:h-[60px] bg-[#617086] text-[#FFFFFF] text-[20px]">
                    {creatorName && `${creatorName?.toUpperCase()[0]}`}
                  </div>
                )}
                <span className="web:text-[20px] tablet font-medium">
                  {creatorName}
                </span>
              </div>
              {rating && (
                <div className="w-[143px] flex justify-end">
                  <StarRating
                    starsCount={isWeb ? Math.floor(Number(rating)) : 1}
                    rating={rating}
                    maxRating={isWeb ? 5 : ''}
                    textLeft={false}
                    textColor="#13294B"
                    classes={'text-[13px] tablet:text-[16px]'}
                  />
                </div>
              )}
            </div>
            <div className="hidden tablet:block tablet:h-[90px] web:h-[125px] tablet:mb-[12px]">
              <p className="hidden tablet:line-clamp-3 web:line-clamp-5">
                {description}
              </p>
            </div>
            <span className="self-center inline-block w-full border-b-[1px] border-b-[#D1D0D8]"></span>
            <p className="mt-[6px] web:ml-[12px]">{title && title.toUpperCase()}</p>
          </div>
        </div>
      ) : (
        <div
          className={`w-[176px] h-[224px] tablet:w-[282px] tablet:h-[492px] web:w-[325px] webl:w-[430px] web:h-[522px] bg-[#FAFAFA] hover:duration-500 hover:-translate-y-[10px] border border-[#D1D0D8] rounded-[5px] tablet:rounded-[15px] cursor-pointer ${classes}`}
          onClick={onclick}
        >
          <div className="mb-[6px] tablet:mb-[8.5px] w-full h-[110px] tablet:h-[262px] web:h-[256px] relative">
            <Image
              src={imageSrc}
              alt="Card image"
              fill={true}
              sizes="(max-width: 1280px) 50vw, 33vw"
              className="rounded-t-[5px] tablet:rounded-t-[15px] rounded-b-[5px]"
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col pl-[8px] tablet:pl-[24px] pb-[12px] web:pb-[24px] tablet:pr-[12px] web:pr-[8px] text-[#13294B]">
            <div className="flex justify-between text-[13px] tablet:text-[16px] mb-[6px] web:mb-[18px] pr-[6px] tablet:pr-[16px]">
              <span className="inline-block overflow-x-hidden text-nowrap">
                {location && location.toUpperCase()}
              </span>
              {rating && (
                <div className="w-[60px] flex justify-end">
                  <StarRating
                    rating={rating}
                    classes={'text-[13px] tablet:text-[16px]'}
                  />
                </div>
              )}
            </div>
            <span className="mb-[12px] tablet:mb-[6px] text-[#081120] text-[16px] tablet:text-[25px] tablet:font-semibold">
              {title}
            </span>
            <div className="hidden tablet:block tablet:h-[90px] web:h-[108px]">
              <p className="hidden tablet:line-clamp-4 break-words">{description}</p>
            </div>
            <span className="text-[#081120] text-[16px] tablet:text-[20px] font-medium mt-[12px]">
              {price}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
