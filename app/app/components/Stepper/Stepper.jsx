import Image from "next/image";
import { useCreateTour } from "../../context/createTourContext.jsx";
import Create from "../../public/svg/create-stepper.svg";
import Location from "../../public/svg/location-stepper.svg";
import Visualize from "../../public/svg/image-stepper.svg";
import Overview from "../../public/svg/checkbox-stepper.svg";
import { usePopup } from "@/app/context/popupContext.jsx";

const steps = [
  { src: Create, alt: "Create your tour", text: "Create your tour" },
  { src: Location, alt: "Plan the route", text: "Plan the route" },
  { src: Visualize, alt: "Describe and shoot", text: "Describe and shoot" },
  { src: Overview, alt: "Review and publish", text: "Review and publish" },
];

export default function Stepper() {
  const { step, goToStep, previousStep, formData } = useCreateTour();
  const popup = usePopup();
  const handleStepClick = (index) => {
    // First, check if Step 1 data is filled before proceeding to any further steps
    const isStep1Filled =
      formData.step1Data.tour &&
      formData.step1Data.destination &&
      formData.step1Data.duration &&
      formData.step1Data.tourType &&
      formData.step1Data.price;

    if (!isStep1Filled && index > 0) {
      popup({
        type: "ERROR",
        message:
          "Please fill in all required fields in Step 1 before proceeding to other steps.",
      });
      return;
    }
    if (index === 2 && previousStep !== 1) {
      popup({
        type: "ERROR",
        message: "You can only access Step 3 from Step 2's edit button.",
      });

      return;
    }
    goToStep(index);
  };

  return (
    <nav
      className="w-full h-[140px] flex justify-center mb-2 mt-8 bg-neutral-50 rounded-tl-[5px] rounded-tr-[5px] border-b border-gray-200 tablet:mt-24 web:mt-8"
      aria-label="Progress"
    >
      <ul
        className={`flex justify-between items-center w-5/6 tablet:justify-center tablet:gap-12 ${
          step === 1 || step === 2 ? "web:justify-start" : ""
        }`}
      >
        {steps.map((stepData, index) => (
          <li
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleStepClick(index)}
          >
            <span
              className={`w-10 h-10 ${
                index <= step ? "bg-yellow-500" : "bg-neutral-50"
              } rounded-full flex items-center justify-center ${
                index <= step ? "" : "border border-yellow-500"
              } tablet:w-[60px] tablet:h-[60px]`}
            >
              <Image
                src={stepData.src}
                alt={stepData.alt}
                className="w-6 h-6"
              />
            </span>
            <p className="hidden mt-2 text-blue-950 text-sm font-normal leading-none tablet:block">
              {stepData.text}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
