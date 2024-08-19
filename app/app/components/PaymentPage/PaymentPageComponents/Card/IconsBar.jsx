import Image from "next/image";
import Walk from "../../../../public/svg/walk.svg";
import Time from "../../../../public/svg/time.svg";
import Location from "../../../../public/svg/location-sharp.svg";
function IconsBar({ tourType, duration, location, styles }) {
  return (
    <ul
      className={`flex justify-between border-b pb-6 border-b-[#D1D0D8] ${styles} gap-4 text-nowrap h-[64px] w-[534px]`}
    >
      <li className="flex justify-center items-center gap-1">
        <Image src={Walk} alt="Walk" />
        <p>{tourType} tour</p>
      </li>
      <li className="flex justify-center items-center gap-1">
        <Image src={Time} alt="Time" />
        <p>Average of {duration} min</p>
      </li>
      <li className="flex justify-center items-center gap-1">
        <Image src={Location} alt="Location" />
        <p>{location}</p>
      </li>
    </ul>
  );
}

export default IconsBar;
