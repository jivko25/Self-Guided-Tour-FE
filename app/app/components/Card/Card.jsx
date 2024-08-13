import Image from "next/image";
import Star from "@/app/public/svg/star-outline.svg";

export default function Card({
  testimonial = false,
  imageSrc,
  location,
  name,
  description,
  price,
  rating,
}) {
  return (
    <>
      {testimonial ? (
        <div>
          <div>
            <Image
              src={imageSrc}
              alt="Card image"
              className="rounded-t-[15px] rounded-b-[5px] w-[176px] h-[224px] web:w-[430px] web:h-[256px]"
            />
          </div>
        </div>
      ) : (
        <div className=" w-[176px] h-[224px] tablet:w-[282px] tablet:h-[492px] web:w-[430px] web:h-[522px] bg-[#FAFAFA] border border-[#D1D0D8] rounded-[5px] tablet:rounded-[15px]">
          <div className="mb-[6px] tablet:mb-[8.5px] w-full h-[116px] tablet:h-[262px] web:h-[256px]">
            <Image
              src={imageSrc}
              alt="Card image"
              className="rounded-t-[5px] tablet:rounded-t-[15px] rounded-b-[5px] w-full h-[116px] tablet:h-[262px] web:h-[256px]"
              style={{objectFit:'cover'}}
            />
          </div>
          <div className="flex flex-col pl-[8px] tablet:pl-[24px] pb-[12px] web:pb-[24px] pt-[6px] tablet:pr-[12px] web:pr-[8px] text-[#13294B]">
            <div className="flex justify-between text-[13px] tablet:text-[16px] mb-[6px] web:mb-[18px] pr-[6px] tablet:pr-[16px]">
              <span className="w-[151px]">{location}</span>
              <div className="w-[143px] flex justify-end">
                <span className="text-[#E8B600]">{rating}</span>
                <Image
                  src={Star}
                  alt="Stars"
                  className="ml-[4px] tablet:ml-[8px] tablet:ml-[9.5px] w-[16px] h-[16px] tablet:w-[24px] tablet:h-[24px]"
                />
              </div>
            </div>
            <span className="text-[#081120] text-[16px] tablet:text-[25px] tablet:font-semibold">
              {name}
            </span>
            <div className="hidden tablet:block tablet:h-[90px] web:h-[108px]">
              <p className="hidden tablet:line-clamp-4">
                {description}
              </p>
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
