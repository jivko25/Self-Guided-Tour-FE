"use client";

export default function TableTabs({
  tabs = [],
  chidren,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="flex font-semibold font-['Inter'] leading-none">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`w-full h-[53px] pl-[13px] pr-[19px] pt-[19px] pb-[18px] cursor-pointer  border border-[#D1D0D8] ${
            activeTab === tab ? "bg-[#b6bdc7]" : "bg-white"
          } rounded-tl-[5px] rounded-tr-[5px] border-b border-neutral-50 justify-start items-center inline-flex web:w-[262px] `}
          onClick={() => setActiveTab(tab)}
        >
          <div className="text-[#081120]  mx-auto web:text-lg">{tab}</div>
          {chidren}
        </div>
      ))}
    </div>
  );
}
