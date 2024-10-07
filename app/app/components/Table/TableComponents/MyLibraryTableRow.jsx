import IconButton from "../../Buttons/IconButton";
import Image from "next/image";
import DownArrowIcon from "@/app/public/svg/chevron-down.svg";
import UpArrowIcon from "@/app/public/svg/chevron-up.svg";
import PencilIcon from "@/app/public/svg/pencil.svg";
import TrashIcon from "@/app/public/svg/trash.svg";
import TourDetails from "../TourDetails/TourDetails";
import TourSummary from "../TourDetails/TourSummary";
import TourStatus from "../../TourStatus/TourStatus";
import EyeIcon from "@/app/public/svg/view.svg";
import { useState } from "react";
import Btn from "../../Buttons/Btn";
import ImageSkeleton from "../../Skeletons/ImageSkeleton";
import StatusDot from "./StatusDot";
import { useRouter } from "next/navigation";
function TableRow({ tour, activeTab }) {
  const [showDetails, setShowDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useRouter();
  function handleEdit(tourId) {
    navigate.push(`/create?edit=${tourId}`);
  }
  function handlePreview(tourId) {
    navigate.push(`/tour/${tourId}`);
  }
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
            <div className="flex justify-center items-center gap-3">
              <p>{tour.title}</p>
              {activeTab === "My Tours" && <StatusDot status={tour.status} />}
            </div>
          </div>
          {showDetails && (
            <>
              <ImageSkeleton isLoading={isLoading} />
              <Image
                src={tour.thumbnailImageUrl}
                alt="thumnail-image"
                width={309}
                height={240}
                className={`rounded-[5px] w-[309px] h-[240px] object-cover hidden web:block ${
                  isLoading ? "hidden" : ""
                } `}
                priority={true}
                onLoad={() => setIsLoading(false)}
              />
            </>
          )}
        </div>
      </td>
      <td className="align-top text-center smallPhone:hidden  tablet:table-cell ">
        <div className="mt-7 gap-9 flex flex-col">
          <p>{tour.createdAt}</p>
          {showDetails && <TourDetails tour={tour} />}
        </div>
      </td>
      <td className=" align-top max-w-32 text-left smallPhone:hidden  tablet:table-cell flex justify-center ">
        <div className="mt-7 flex flex-col gap-7 justify-center items-center">
          {showDetails && <TourSummary tour={tour} />}
        </div>
      </td>
      <td className=" align-top smallPhone:hidden tablet:table-cell ">
        <div className="mt-7">
          {activeTab === "My Tours" ? (
            <TourStatus status={tour.status} />
          ) : (
            <p>{tour.creatorName}</p>
          )}
        </div>
      </td>

      <td className="align-top text-center ">
        <div className="flex content-center justify-center gap-6 mt-5">
          {!showDetails ? (
            activeTab === "My Tours" ? (
              <div className="flex gap-6 justify-start w-[115px]">
                <IconButton
                  icon={PencilIcon}
                  className="border-[3px] p-2 border-[#13294B] rounded-[5px]"
                  onClick={() => handleEdit(tour.tourId)}
                />
                {tour.status !== "Under Review" && (
                  <IconButton
                    icon={TrashIcon}
                    className="border-[3px] p-2 border-[#E80000] rounded-[5px]  "
                  />
                )}
              </div>
            ) : (
              <IconButton
                icon={EyeIcon}
                className="border-[3px] p-2 border-[#13294B] rounded-[5px]"
                onClick={() => handlePreview(tour.tourId)}
              />
            )
          ) : (
            <Btn
              text={activeTab === "My Tours" ? "Edit" : "View"}
              variant="transparent-outlined"
              className="w-full max-w-32 boreder-[2px]
              "
              onClick={() =>
                activeTab === "My Tours"
                  ? handleEdit(tour.tourId)
                  : handlePreview(tour.tourId)
              }
            />
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
