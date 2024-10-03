"use client";

import MyToursTable from "@/app/components/Table/MyLibraryTable";
import MyLibraryPagination from "@/app/components/Table/TableComponents/MyLibraryPagination";
import TableTabs from "@/app/components/Table/TableTabs";
import { useProfile } from "@/app/context/profileContext";
import { useEffect, useState } from "react";

const tableHeaders = {
  ["Bought Tours"]: [
    { label: "Tour Title", additionalClasses: "" },
    { label: "Date", additionalClasses: "smallPhone:hidden tablet:table-cell" },
    { label: "", additionalClasses: "smallPhone:hidden tablet:block" },
    {
      label: "Creator",
      additionalClasses: "smallPhone:hidden tablet:table-cell",
    },
    { label: "Action", additionalClasses: "" },
    { label: "", additionalClasses: "" },
  ],
  ["My Tours"]: [
    { label: "Tour Title", additionalClasses: "" },
    { label: "Date", additionalClasses: "smallPhone:hidden tablet:table-cell" },
    { label: "", additionalClasses: "smallPhone:hidden tablet:block" },
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
  const {
    getToursAsync,
    getBoughtToursAsync,
    totalPages,
    page,
    pageSize,
    totalResults,
    dispatch,
  } = useProfile();
  function handleTours(tours) {
    setTours([...tours, ...Array.from(10 - tours.length).fill("")]);
  }
  function handleNextPage() {
    dispatch({ type: "nextPage" });
  }
  function handlePrevPage() {
    console.log(page);
    dispatch({ type: "previousPage" });
  }
  // Reset page when tab changes
  useEffect(() => {
    dispatch({ type: "resetPage" });
  }, [activeTab]);
  useEffect(() => {
    async function fetchTours() {
      if (activeTab === "My Tours") {
        const response = await getToursAsync(page);
        handleTours(response);
      } else if (activeTab === "Bought Tours") {
        const response = await getBoughtToursAsync(page);
        handleTours(response);
      }
    }
    fetchTours();
  }, [getToursAsync, activeTab, page]);
  return (
    <div className="mt-16">
      <TableTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <MyToursTable
        tableHeaders={tableHeaders[activeTab]}
        tours={tours}
        activeTab={activeTab}
      />
      <MyLibraryPagination
        totalPages={totalPages}
        page={page}
        results={totalResults}
        resultsPerPage={tours.length}
        onNextPage={handleNextPage}
        onPrevtPage={handlePrevPage}
      />
    </div>
  );
}

export default Library;
