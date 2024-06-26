import Image from "next/image";
import { useCreateTour } from "../../context/createTourContext.jsx";
import Create from "../../public/svg/create-stepper.svg";
import Location from "../../public/svg/location-stepper.svg";
import Visualize from "../../public/svg/image-stepper.svg";
import Overview from "../../public/svg/checkbox-stepper.svg";

const steps = [
  { src: Create, alt: "Create" },
  { src: Location, alt: "Location" },
  { src: Visualize, alt: "Visualize" },
  { src: Overview, alt: "Overview" },
];

export default function Stepper() {
  const { step, goToStep } = useCreateTour();

  return (
    <nav
      className="w-full h-[88px] flex justify-center mb-2 gap-2 bg-neutral-50 rounded-tl-[5px] rounded-tr-[5px] border-b border-gray-200"
      aria-label="Progress"
    >
      <ul className="flex justify-center gap-8 items-center w-5/6">
        {steps.map((stepData, index) => (
          <li
            key={index}
            className="w-10 h-10 flex justify-center items-center cursor-pointer"
            onClick={() => goToStep(index)}
          >
            <span
              className={`w-10 h-10 ${
                index <= step ? "bg-yellow-500" : "bg-neutral-50"
              } rounded-full flex items-center justify-center ${
                index <= step ? "" : "border border-yellow-500"
              }`}
            >
              <Image
                src={stepData.src}
                alt={stepData.alt}
                className="w-6 h-6"
              />
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
