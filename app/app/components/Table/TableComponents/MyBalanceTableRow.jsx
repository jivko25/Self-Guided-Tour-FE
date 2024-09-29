function MyBalanceTableRow({ transaction }) {
  return (
    <tr
      key={transaction.id}
      className="border-b-2 border-[#D1D0D8] text-center w-full h-[74px] "
    >
      <td className=" text-center w-[240px]">{transaction.tourTitle}</td>
      <td className=" text-center smallPhone:hidden  tablet:table-cell w-[240px] ">
        {transaction.date}
      </td>
      <td className="py-2  min-w-[240px]">USD{transaction.price}</td>
    </tr>
  );
}

export default MyBalanceTableRow;
