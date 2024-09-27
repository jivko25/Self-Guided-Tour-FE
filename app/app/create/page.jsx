"use client";
import {
  CreateTourProvider,
  useCreateTour,
} from "../context/createTourContext.jsx";

import { Suspense } from "react";
import Step1 from "../components/CreateTourSteps/Step1/Step1.jsx";
import Step2 from "../components/CreateTourSteps/Step2.jsx";
import Step3 from "../components/CreateTourSteps/Step3/Step3.jsx";
import Step4 from "../components/CreateTourSteps/Step4.jsx";
import Stepper from "../components/Stepper/Stepper.jsx";

const MultiStepForm = () => {
  const { step } = useCreateTour();

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <>
      <div
        className={`${
          step === 0
            ? "flex flex-col justify-center items-center"
            : "w-[100%] h-full web:relative"
        }`}
      >
        {renderStep()}
      </div>
    </>
  );
};

export default function App() {
  return (
    //TODO: Add Skeleton to fallback
    <Suspense fallback={<div>Loading...</div>}>
      <CreateTourProvider>
        <Stepper />
        <MultiStepForm />
      </CreateTourProvider>
    </Suspense>
  );
}
