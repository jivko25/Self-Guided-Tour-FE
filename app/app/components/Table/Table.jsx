import PropTypes from "prop-types";
import TourStatus from "../TourStatus/TourStatus";
import ThrashIcon from "@/app/public/svg/trash.svg";
import Pencil from "../../public/svg/pencil.svg";
import EyeIcon from "@/app/public/svg/eye.svg";
import TableTabs from "./TableTabs";
import ActionButtons from "./ActionButtons";
import IconButton from "../Buttons/IconButton";

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
            tours.map((tour) => (
              <tr key={tour.id} className="border-b-2 text-center ">
                <td className=" text-center  ">{tour.title}</td>
                <td className="text-center  tablet:table-cell ">
                  {tour.createdAt}
                </td>
                <td className="text-center  web:table-cell ">
                  <TourStatus status={tour.status} />
                  {tour.creatorName}
                </td>
                <td className="smallPhone:hidden tablet:block text-center  ">
                  {activeTab === "My Tours" ? (
                    <IconButton
                      text=""
                      icon={Pencil}
                      className="border-[3px] p-2 border-[#13294B] rounded-[5px]  m-auto"
                    />
                  ) : (
                    <div className="m-auto border-red-500">
                      <TourStatus status={tour.status} />
                    </div>
                  )}
                </td>
                <td className="py-2  ">
                  {activeTab === "Bought Tours" ? (
                    <IconButton
                      text=""
                      icon={EyeIcon}
                      className="border-[3px] p-2 border-[#13294B] rounded-[5px] "
                    />
                  ) : (
                    ""
                  )}
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
