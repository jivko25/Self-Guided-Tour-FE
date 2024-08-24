"use client";
import Image from "next/image";
import { useState } from "react";
import ChevronDownSemibold from "../../public/svg/chevron-down-semibold.svg";

export default function Sort({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="items-center gap-1 w-[103px] h-[36px] tablet:w-[181px] tablet:h-[60px] web:w-[200px] border border-[#D1D0D8] rounded-[5px] bg-[#FAFAFA]">
      <div className="w-[103px] h-[36px] px-[8px] tablet:px-[26px] web:px-[36px] tablet:w-[181px] tablet:h-[60px] web:w-[200px] text-[16px] text-[#081120] font-semibold flex flex-row justify-around items-center relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <div className="overflow-x-hidden text-nowrap flex">
            <span>{selectedOption.label}</span>
            {selectedOption.icon && <Image src={selectedOption.icon} width={20} height={20} alt={selectedOption.label}/>}
          </div>
        ) : (
          <span>Sort By</span>
        )}
        <Image className="relative right-0 w-[14px] h-[20px] tablet:w-[16px]" src={ChevronDownSemibold} alt="arrow down"/>
      </div>
      {isOpen && (
        <ul className="w-[170px] tablet:w-[181px] web:w-[200px] text-[#13294B] border border-[#D1D0D8] rounded-[5px] bg-[#FAFAFA] flex flex-col gap-[8px] p-5 tablet:p-6 relative -left-[34px] tablet:static">
          {options.map((option) => (
            <li className="flex flex-row relative cursor-pointer hover:opacity-60"
              key={option.value}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option.label} {option.icon && <Image className="absolute right-[26px] tablet:right-[36px] web:right-[56px]" src={option.icon} width={20} height={20} alt={option.label}/>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
