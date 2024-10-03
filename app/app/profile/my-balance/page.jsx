"use client";
import MyBalanceTable from "@/app/components/Table/MyBalanceTable";
import MyBalancePagination from "../../components/Table/TableComponents/MyBalancePagination";
import { useProfile } from "@/app/context/profileContext";
import { useEffect, useState } from "react";
const headers = [
  { label: "Tour Title", additionalClasses: "" },
  { label: "Date", additionalClasses: "smallPhone:hidden tablet:table-cell" },
  {
    label: "Price",
    additionalClasses: "",
  },
];
function Balance() {
  const [transactions, setTransactions] = useState(Array.from(10).fill(null));
  const [pageReset, setPageReset] = useState(false);
  const { getTransactionsAsync, page, dispatch, totalPages, totalResults } =
    useProfile();
  useEffect(() => {
    dispatch({ type: "resetPage" });
    setPageReset(true);
  }, [pageReset]);
  useEffect(() => {
    if (!pageReset) return;
    async function fetchTransactions() {
      const response = await getTransactionsAsync(page);
      setTransactions(response);
    }
    fetchTransactions();
  }, [getTransactionsAsync, page, pageReset]);
  return (
    <div>
      <MyBalanceTable tableHeaders={headers} transactions={transactions} />
      <MyBalancePagination
        totalPages={totalPages}
        page={page}
        results={totalResults}
        resultsPerPage={transactions.length}
        onNextPage={() => dispatch({ type: "nextPage" })}
        onPrevtPage={() => dispatch({ type: "previousPage" })}
      />
    </div>
  );
}

export default Balance;
