import IconButton from "../../Buttons/IconButton";
import Image from "next/image";
import DownArrowIcon from "@/app/public/svg/chevron-down.svg";
import UpArrowIcon from "@/app/public/svg/chevron-up.svg";
import PencilIcon from "@/app/public/svg/pencil.svg";
import TrashIcon from "@/app/public/svg/trash.svg";
import TourDetails from "../TourDetails/TourDetails";
import TourSummary from "../TourDetails/TourSummary";
import TourStatus from "../../TourStatus/TourStatus";
import { useState } from "react";
import Btn from "../../Buttons/Btn";
function TableRow({ tour }) {
  const [showDetails, setShowDetails] = useState(null);
  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <tr key={tour.id} className="border-b-2 text-center ">
      <td className=" text-center max-w-32">
        <div className=" flex flex-col justify-center items-start ml-10 my-7 gap-9 max-w-[100%]">
          <div className="flex justify-center gap-9">
            <IconButton
              icon={showDetails ? UpArrowIcon : DownArrowIcon}
              onClick={handleShowDetails}
              className="hidden web:block"
            />
            {tour.title}
          </div>
          {showDetails && (
            <Image
              src={tour.thumbnailImageUrl}
              alt="thumnail-image"
              width={309}
              height={240}
              className="rounded-[5px] w-[309px] h-[240px] object-cover "
            />
          )}
        </div>
      </td>
      <td className="align-top text-center smallPhone:hidden  tablet:table-cell ">
        <div className="mt-7 gap-9 flex flex-col">
          <p>{tour.createdAt}</p>
          {showDetails && <TourDetails tour={tour} />}
        </div>
      </td>
      <td className="py-2 align-top max-w-32 text-left ">
        <div className="mt-7 flex flex-col gap-7 justify-center items-center">
          <p>Creator Name</p>
          {showDetails && <TourSummary tour={tour} />}
        </div>
      </td>
      <td className=" align-top smallPhone:hidden tablet:table-cell ">
        <div className="mt-7">
          <TourStatus status={tour.status} />
        </div>
      </td>

      <td className="align-top text-center ">
        <div className="flex content-center justify-center gap-6 mt-7">
          {!showDetails ? (
            <>
              <IconButton
                icon={PencilIcon}
                className="border-[3px] p-2 border-[#13294B] rounded-[5px]"
              />
              {tour.status !== "Under Review" && (
                <IconButton
                  icon={TrashIcon}
                  className="border-[3px] p-2 border-[#E80000] rounded-[5px]  "
                />
              )}
            </>
          ) : (
            <Btn
              text="Edit"
              variant="transparent-outlined"
              className="w-full max-w-32 boreder-[2px]
              "
            />
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
