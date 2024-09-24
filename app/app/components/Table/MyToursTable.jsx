import IconButton from "../Buttons/IconButton";
import TourStatus from "../TourStatus/TourStatus";
import PencilIcon from "../../public/svg/pencil.svg";
import TrashIcon from "../../public/svg/trash.svg";
import DownArrowIcon from "../../public/svg/chevron-down.svg";
import TourDetails from "./TourDetails/TourDetails";
import Image from "next/image";
import TourSummary from "./TourDetails/TourSummary";
import { useState } from "react";
import TableRow from "./TableComponents/TableRow";
function MyToursTable({ tours = [], tableHeaders, error }) {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <table className="min-w-full bg-white border">
      <thead>
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
          tours.map((tour) => <TableRow tour={tour} />)
        )}
      </tbody>
    </table>
  );
}

export default MyToursTable;
