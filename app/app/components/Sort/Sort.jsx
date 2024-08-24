"use client";
import Image from "next/image";
import { useState } from "react";
import ChevronDownSemibold from "../../public/svg/chevron-down-semibold.svg";

export default function Sort({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="items-center gap-1 w-[170px] h-[36px] tablet:w-[181px] tablet:h-[60px] web:w-[200px] border border-[#D1D0D8] rounded-[5px] bg-[#FAFAFA]">
      <div className="flex flex-row items-center justify-between  w-[170px] h-[36px] px-[8px] tablet:px-[12px] web:px-[20px] tablet:w-[181px] tablet:h-[60px] web:w-[200px] text-[16px] text-[#081120] font-semibold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <div className="text-nowrap flex gap-1">
            <span>{selectedOption.label}</span>
            {selectedOption.icon && <Image src={selectedOption.icon} width={20} height={20} alt={selectedOption.label}/>}
          </div>
        ) : (
          <span>Sort By</span>
        )}
        <Image src={ChevronDownSemibold} alt="arrow down"/>
      </div>
      {isOpen && (
        <ul className="w-[170px] tablet:w-[181px] web:w-[200px] text-[#13294B] border border-[#D1D0D8] rounded-[5px] bg-[#FAFAFA] flex flex-col gap-[8px] p-5 tablet:p-6">
          {options.map((option) => (
            <li className="flex flex-row cursor-pointer hover:opacity-60 gap-1"
              key={option.value}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option.label} {option.icon && <Image src={option.icon} width={20} height={20} alt={option.label}/>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
