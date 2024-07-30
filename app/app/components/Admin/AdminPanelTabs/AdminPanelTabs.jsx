export default function AdminPanelTabs({ activeTab, setActiveTab }) {
  const adminTabs = ["Under Review", "Approved", "Declined"];

  return (
    <div className="flex">
      {adminTabs.map((tab, index) => (
        <div
          key={index}
          className={`w-[120px] h-[53px] pl-[13px] pr-[19px] pt-[19px] pb-[18px] cursor-pointer   border-t border-r border-[#dbd8d8]  ${
            activeTab === tab ? "bg-[#b6bdc7]" : "bg-white"
          } rounded-tl-[5px] rounded-tr-[5px] border-b border-neutral-50 justify-start items-center inline-flex`}
          onClick={() => setActiveTab(tab)}
        >
          <div className="text-[#081120] text-[13px] mx-auto font-semibold font-['Inter'] leading-none">
            {tab}
          </div>
        </div>
      ))}
    </div>
  );
}
