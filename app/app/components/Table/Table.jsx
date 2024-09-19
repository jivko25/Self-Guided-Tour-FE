import PropTypes from "prop-types";
import TourStatus from "../TourStatus/TourStatus";
import CheckmarkIcon from "../../public/svg/checkmark.svg";
import CloseIcon from "../../public/svg/close-red.svg";
import Image from "next/image";
import TableTabs from "./TableTabs";

function Table({
  tableHeaders,
  error = "",
  tours = Array.from(10),
  tabs = [],
  activeTab,
  setActiveTab,
}) {
  return (
    <div>
      <TableTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
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
    </div>
  );
}

Table.propTypes = {
  tableHeaders: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // label is a required string
      additionalClasses: PropTypes.string, // additionalClasses is an optional string
    })
  ).isRequired,
  error: PropTypes.string,
  tours: PropTypes.array,
};

export default Table;
