import Image from "next/image";
import Walk from "../../../public/svg/walk.svg";
import Time from "../../../public/svg/time.svg";
import Location from "../../../public/svg/location-sharp.svg";
function IconsBar({ tourType, duration, location }) {
  return (
    <ul className="flex justify-between border-b pb-6  border-b-tourCard">
      <li className="flex justify-center items-center gap-3">
        <Image src={Walk} />
        <p>{tourType}</p>
      </li>
      <li className="flex justify-center items-center gap-3">
        <Image src={Time} />
        <p>Average of {duration} minutes</p>
      </li>
      <li className="flex justify-center items-center gap-3">
        <Image src={Location} />
        <p>{location}</p>
      </li>
    </ul>
  );
}

export default IconsBar;
