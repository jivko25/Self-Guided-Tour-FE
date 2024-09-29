import Image from "next/image.js";
import ReviewIcon from "../../public/svg/under-review.svg";
import DeclinedIcon from "../../public/svg/declined.svg";
import ApprovedIcon from "../../public/svg/approved.svg";

const statusStyles = {
  "Under Review": {
    bgColor: "bg-[#ffdab8]",
    textColor: "text-[#cc6200]",
    icon: ReviewIcon,
  },
  Approved: {
    bgColor: "bg-[#d0ffcf]",
    textColor: "text-[#027e00]",
    icon: ApprovedIcon,
  },
  Declined: {
    bgColor: "bg-[#ffc0c0]",
    textColor: "text-[#aa0000]",
    icon: DeclinedIcon,
  },
};

export default function TourStatus({ status }) {
  const styles = statusStyles[status] || statusStyles["Under Review"];

  return (
    <div
      className={`h-[26px] px-1 py-[5px] rounded-[5px] inline-flex ${styles.bgColor}`}
    >
      <div
        className={`flex items-center gap-1 align-center text-[13px] font-medium font-['Open Sans'] leading-none ${styles.textColor}`}
      >
        {styles.icon && (
          <Image src={styles.icon} width={12} height={12} alt="status" />
        )}
        <p>{status}</p>
      </div>
    </div>
  );
}
