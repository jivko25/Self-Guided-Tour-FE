"use client";
import MobilePagination from "@/app/components/Admin/Pagination/MobilePagination";
import WebPagination from "@/app/components/Admin/Pagination/WebPagination";
import MyToursTable from "@/app/components/Table/MyToursTable";
import Table from "@/app/components/Table/Table";
import TableTabs from "@/app/components/Table/TableTabs";
import { useProfile } from "@/app/context/profileContext";
import { func } from "prop-types";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const tableHeaders = {
  ["Mys Tours"]: [
    { label: "Tour Title", additionalClasses: "" },
    { label: "Date", additionalClasses: "smallPhone:hidden tablet:table-cell" },
    {
      label: "Status",
      additionalClasses: "smallPhone:hidden tablet:table-cell",
    },
    { label: "Action", additionalClasses: "" },
    { label: "", additionalClasses: "" },
  ],
  ["My Tours"]: [
    { label: "Tour Title", additionalClasses: "" },
    { label: "Date", additionalClasses: "smallPhone:hidden tablet:table-cell" },
    {
      label: "Creator",
      additionalClasses: "smallPhone:hidden tablet:table-cell",
    },
    {
      label: "Status",
      additionalClasses: "smallPhone:hidden tablet:table-cell",
    },
    { label: "Action", additionalClasses: "rounded-tr-[5px] " },
  ],
};

const tabs = ["My Tours", "Bought Tours"];

function Library() {
  const [tours, setTours] = useState(Array.from(10).fill(null));
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { getToursAsync, getBoughtToursAsync } = useProfile();
  function handleTours(tours) {
    setTours([...tours, ...Array.from(10 - tours.length).fill("")]);
  }
  useEffect(() => {
    async function fetchTours() {
      if (activeTab === "My Tours") {
        const response = await getToursAsync();
        handleTours(response);
      } else if (activeTab === "Bought Tours") {
        const response = await getBoughtToursAsync();
        handleTours(response);
      }
    }
    fetchTours();
  }, [getToursAsync, activeTab]);
  return (
    <div>
      <TableTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <MyToursTable tableHeaders={tableHeaders["My Tours"]} tours={tours} />
      <WebPagination toursLength={tours.length} />
      <MobilePagination toursLength={tours.length} />
    </div>
  );
}

export default Library;
