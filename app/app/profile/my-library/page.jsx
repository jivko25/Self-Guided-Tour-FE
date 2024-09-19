"use client";
import Table from "@/app/components/Table/Table";
import { useProfile } from "@/app/context/profileContext";
import { useEffect, useState } from "react";
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
const tabs = ["My Tours", "Bought Tours"];
function Library() {
  const [tours, setTours] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { getToursAsync, getBoughtToursAsync } = useProfile();

  useEffect(() => {
    async function fetchTours() {
      if (activeTab === "My Tours") {
        const response = await getToursAsync();
        setTours(response);
      } else if (activeTab === "Bought Tours") {
        const response = await getBoughtToursAsync();
        setTours(response);
      }
    }
    fetchTours();
  }, [getToursAsync, activeTab]);
  return (
    <div>
      <Table
        tableHeaders={tableHeaders}
        tours={tours}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default Library;
