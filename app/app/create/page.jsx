"use client"
import {
  useCreateTour,
  CreateTourProvider,
} from "../context/createTourContext.jsx";
import Step1 from "../components/CreateTourSteps/Step1.jsx";
import Step2 from "../components/CreateTourSteps/Step2.jsx";
import Step3 from "../components/CreateTourSteps/Step3.jsx";

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
      default:
        return <Step1 />;
    }
  };

  return <div className="w-[100%] web:relative">{renderStep()}</div>;
};

export default function App() {
  return (
    <CreateTourProvider>
      <MultiStepForm />
    </CreateTourProvider>
  );
}
