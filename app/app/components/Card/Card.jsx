import Image from "next/image";
import Star from "@/app/public/svg/star-outline.svg"

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
              width={430}
              height={256}
              className="rounded-t-[15px] rounded-b-[5px] w-[430px] h-[256px]"
            />
          </div>
        </div>
      ) : (
        <div className="w-[430px] h-[522px] bg-[#FAFAFA] border border-[#D1D0D8] rounded-[15px]">
          <div className=" mb-[8.5px] w-[430px] h-[256px]">
            <Image
              src={imageSrc}
              alt="Card image"
              width={430}
              height={256}
              className="rounded-t-[15px] rounded-b-[5px] w-[430px] h-[256px]"
            />
          </div>
          <div className="pl-[24px] pb-[24px] pt-[6px] text-[#13294B]">
            <div className="flex justify-between mb-[18px] pr-[24px]">
              <span className="w-[151px]">{location}</span>
              <div className="w-[143px] flex justify-end">
                <span className="text-[#E8B600]">{rating}</span>
                <Image src={Star} width={24} height={24} alt="Stars" className="ml-[9.5px]"/>
              </div>
            </div>
            <span className="text-[#081120] text-[25px] font-semibold">{name}</span>
            <div className="h-[108px]">
                <p className="line-clamp-4">{description}</p>
            </div>
            <span className="text-[#081120] text-[20px] font-medium mt-[12px]">{price}</span>
          </div>
        </div>
      )}
    </>
  );
}
