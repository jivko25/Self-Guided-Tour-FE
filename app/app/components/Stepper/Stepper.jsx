import Image from "next/image";
<<<<<<< HEAD
import { useCreateTour } from "../../context/createTourContext.jsx";
=======
>>>>>>> 31312e9 (Create Stepper Component)
import Create from "../../public/svg/create-stepper.svg";
import Location from "../../public/svg/location-stepper.svg";
import Visualize from "../../public/svg/image-stepper.svg";
import Overview from "../../public/svg/checkbox-stepper.svg";

export default function Stepper() {
  return (
    <nav
      className="w-full h-[88px] flex justify-center my-6 gap-2 bg-neutral-50 rounded-tl-[5px] rounded-tr-[5px] border-b border-gray-200"
      aria-label="Progress"
    >
      <ul className="flex justify-between gap-8 items-center w-5/6">
        <li className="w-10 h-10 flex justify-center items-center">
          <span className="w-10 h-10 bg-neutral-50 rounded-full border border-yellow-500 flex items-center justify-center">
            <Image src={Create} alt="Create" className="w-6 h-6" />
          </span>
        </li>
        <li className="w-10 h-10 flex justify-center items-center">
          <span className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <Image src={Location} alt="Location" className="w-6 h-6" />
          </span>
        </li>
        <li className="w-10 h-10 flex justify-center items-center">
          <span className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <Image src={Visualize} alt="Visualize" className="w-6 h-6" />
          </span>
        </li>
        <li className="w-10 h-10 flex justify-center items-center">
          <span className="w-10 h-10 bg-neutral-50 rounded-full border border-yellow-500 flex items-center justify-center">
            <Image src={Overview} alt="Overview" className="w-6 h-6" />
          </span>
        </li>
      </ul>
    </nav>
  );
}
