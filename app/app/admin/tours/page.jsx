"use client";

import { useState, useEffect } from "react";
import Image from "next/image.js";

import AdminPanelTabs from "@/app/components/Admin/AdminPanelTabs/AdminPanelTabs.jsx";

import CheckmarkIcon from "../../public/svg/checkmark.svg";
import CloseIcon from "../../public/svg/close-red.svg";
import MobilePagination from "@/app/components/Admin/Pagination/MobilePagination.jsx";
import WebPagination from "@/app/components/Admin/Pagination/WebPagination.jsx";
import TourStatus from "@/app/components/TourStatus/TourStatus.jsx";

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

  const tableHeaders = [
    { label: "Tour Title", additionalClasses: "" },
    { label: "Date", additionalClasses: "smallPhone:hidden tablet:table-cell" },
    {
      label: "Creator",
      additionalClasses: "smallPhone:hidden web:table-cell",
    },
    {
      label: "Status",
      additionalClasses: "smallPhone:hidden tablet:table-cell",
    },
    { label: "Action", additionalClasses: "rounded-tr-[5px]" },
  ];

  return (
    <div className="container max-w-[1349px] mt-20 mx-auto p-4  text-base font-normal  leading-none font-['Inter']">
      <AdminPanelTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="h-12 bg-[#b6bdc7]">
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className={`py-2 px-4 ${header.additionalClasses}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="p-4">
          {tours.map((tour) => (
            <tr key={tour.id} className="border-b-2 ">
              <td className=" text-center  ">{tour.name}</td>
              <td className="text-center smallPhone:hidden tablet:table-cell ">
                01.01.2024
              </td>
              <td className="text-center smallPhone:hidden web:table-cell ">
                Ivan Ivanov
              </td>
              <td className="text-center smallPhone:hidden tablet:table-cell ">
                <TourStatus status="Under Review" />
              </td>
              <td className="py-2   text-center  ">
                <button
                  className="w-[38px] h-[30px] rounded-[5px] border-2 border-[#027e00] mr-6 tablet:h-10 tablet:w-[48px]"
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
                  className="w-[38px] h-[30px] rounded-[5px] border-2 border-[#e80000] tablet:h-10 tablet:w-[48px]"
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
      <MobilePagination />
      <WebPagination />
    </div>
  );
};

export default PendingTours;
