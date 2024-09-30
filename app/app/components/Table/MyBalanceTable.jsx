import MyBalanceTableRow from "./TableComponents/MyBalanceTableRow";
import MyBalancePagination from "./TableComponents/MyBalancePagination";
import EmptyRow from "./TableComponents/EmptyRow";

function MyBalanceTable({ tableHeaders, error, transactions = [] }) {
  return (
    <table
      className="flex justify-start table-fixed flex-col 
                                                web:w-[1490px]
                                                tablet:w-[800px]  tablet:mt-28
                                                phone:w-[500px]
                                                smallPhone:w-[300px] smallPhone:mt-16"
    >
      <thead className="border border-[#D1D0D8] h-[74px] mb-4 ">
        <tr className="h-16 ">
          {tableHeaders.map((header, index) => (
            <th
              key={index}
              className={` ${header.additionalClasses} w-[240px]`}
            >
              <p className="">{header.label}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col justify-start gap-7">
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
          transactions.map((transaction, index) => (
            <MyBalanceTableRow key={index} transaction={transaction} />
          ))
        )}
        {Array.from({ length: 10 - transactions.length }).map((_, index) => (
          <EmptyRow key={index} height={60} />
        ))}
      </tbody>
    </table>
  );
}

export default MyBalanceTable;
