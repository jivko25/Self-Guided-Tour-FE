"use client";

import { useState, useEffect } from "react";
import Image from "next/image.js";

import AdminPanelTabs from "@/app/components/Admin/AdminPanelTabs/AdminPanelTabs.jsx";

import CheckmarkIcon from "../../public/svg/checkmark.svg";
import CloseIcon from "../../public/svg/close-red.svg";

const PendingTours = () => {
  const [tours, setTours] = useState([]);
  const [activeTab, setActiveTab] = useState("Under Review");

  useEffect(() => {
    // Dummy data for pending tours
    const dummyTours = [
      { id: 1, name: "Tour A" },
      { id: 2, name: "Tour B" },
      { id: 3, name: "Tour C" },
    ];
    setTours(dummyTours);
  }, []);

  const handleAccept = (tourId) => {
    // Implement the accept logic here
    console.log("Accepted tour with ID:", tourId);
  };

  const handleDecline = (tourId) => {
    // Implement the decline logic here
    console.log("Declined tour with ID:", tourId);
  };

  return (
    <div className="container max-w-[1349px] my-16 mx-auto p-4 font-['Inter']">
      <AdminPanelTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="h-12 bg-[#b6bdc7]">
            <th className="py-2 px-4 border-b text-[#081120] text-[13px] font-semibold  leading-none ">
              Tour Name
            </th>
            <th className="py-2 px-4 border-b text-[#081120] text-[13px] font-semibold  leading-none rounded-tr-[5px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td className="py-2 px-4 border-b text-center ">{tour.name}</td>
              <td className="py-2 px-10 border-b text-right">
                <button
                  className="w-[38px] h-[30px] rounded-[5px] border-2 border-[#027e00] mr-6"
                  onClick={() => handleAccept(tour.id)}
                >
                  <Image
                    src={CheckmarkIcon}
                    className="mx-auto"
                    width={24}
                    height={24}
                  />
                </button>
                <button
                  className="w-[38px] h-[30px] rounded-[5px] border-2 border-[#e80000]"
                  onClick={() => handleDecline(tour.id)}
                >
                  <Image
                    src={CloseIcon}
                    className="mx-auto"
                    width={24}
                    height={24}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTours;
