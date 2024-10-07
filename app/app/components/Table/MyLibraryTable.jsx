import TableRow from "./TableComponents/MyLibraryTableRow";
import EmptyRow from "./TableComponents/EmptyRow";
function MyToursTable({ tours = [], tableHeaders, error, activeTab }) {
  return (
    <table className="w-full bg-white border max-h-[872px] relative ">
      <thead className="h-[75px] sticky top-0 overflow-hidden">
        <tr className="h-12 bg-[#b6bdc7]">
          {tableHeaders.map((header, index) => (
            <th
              key={index}
              className={`py-2 px-4 ${header.additionalClasses} `}
            >
              {header.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="p-4 ">
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
            <TableRow key={tour.tourId} tour={tour} activeTab={activeTab} />
          ))
        )}
        {Array.from({ length: 10 - (tours.length || 0) }).map((_, index) => (
          <EmptyRow key={index} height={83} />
        ))}
      </tbody>
    </table>
  );
}

export default MyToursTable;
