"use client";
// TODOS
// 1. Redirect the admin to details page when a tour row or name is clicked
// 2. Add loading state while fetching
// 3. Show Error messages with better design
// 4. Implement Pagination functionality
// 5. Show success or error popup message when the admin approves or declines a tour
// 6. Must be discussed how Approved and Declined tours should look like in the table and their functionality
// 7. Admin should have menu in navigation to access the admin page

import { useState, useEffect } from "react";
import Image from "next/image.js";

import AdminPanelTabs from "@/app/components/Admin/AdminPanelTabs/AdminPanelTabs.jsx";

import {
  getAllToursByStatus,
  approveTourById,
  declineTourById,
} from "@/app/actions/adminActions.js";

import CheckmarkIcon from "../../public/svg/checkmark.svg";
import CloseIcon from "../../public/svg/close-red.svg";
import MobilePagination from "@/app/components/Admin/Pagination/MobilePagination.jsx";
import WebPagination from "@/app/components/Admin/Pagination/WebPagination.jsx";
import TourStatus from "@/app/components/TourStatus/TourStatus.jsx";

const PendingTours = () => {
  const [tours, setTours] = useState([]);
  const [activeTab, setActiveTab] = useState("Under Review");
  const [error, setError] = useState("");

  const fetchTours = async (status) => {
    const { data, error } = await getAllToursByStatus(status);
    if (data) {
      setTours(data);
      // clear the previous error if there was any
      setError("");
    } else {
      setError(error);
    }
  };

  // Fetch tours depending on active tab
  useEffect(() => {
    let status;
    switch (activeTab) {
      case "Approved":
        status = 1;
        break;
      case "Declined":
        status = 2;
        break;
      default:
        status = 0; // Under Review
    }
    fetchTours(status);
  }, [activeTab]);

  const handleAccept = async (tourId) => {
    const { data, error } = await approveTourById(tourId);
    if (data) {
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== tourId));
    } else {
      setError(error);
    }
  };

  const handleDecline = async (tourId) => {
    const { data, error } = await declineTourById(tourId);
    if (data) {
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== tourId));
    } else {
      setError(error);
    }
  };

  // Mapping table headers , using DRY method
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
    <div className="container max-w-[1349px] mt-20 mx-auto p-4  text-base font-normal  leading-none  ">
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
          {error ? (
            <tr>
              <td
                colSpan={tableHeaders.length}
                className="text-center py-4 font-bold text-red-700"
              >
                {error}
              </td>
            </tr>
          ) : (
            tours.map((tour) => (
              <tr key={tour.id} className="border-b-2 ">
                <td className=" text-center  ">{tour.title}</td>
                <td className="text-center smallPhone:hidden tablet:table-cell ">
                  {tour.createdAt}
                </td>
                <td className="text-center smallPhone:hidden web:table-cell ">
                  {tour.creatorName}
                </td>
                <td className="text-center smallPhone:hidden tablet:table-cell ">
                  <TourStatus status={tour.status} />
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
                      alt="Accept"
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
                      alt="Decline"
                    />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <MobilePagination />
      <WebPagination toursLength={tours.length} />
    </div>
  );
};

export default PendingTours;
