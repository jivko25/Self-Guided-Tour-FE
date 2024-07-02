import { createContext, useContext, useState } from "react";

const CreateTourContext = createContext();

export const CreateTourProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    step1Data: {
      tour: "",
      destination: "",
      duration: "",
      price: ""
    },
    step2Data: [],
    step3Data: "",
    step4Data: "",
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateStep2Data = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      step2Data: [...prevData.step2Data, newData]
    }));
  }

  return (
    <CreateTourContext.Provider
      value={{ step, formData, nextStep, prevStep, goToStep, updateFormData, updateStep2Data }}
    >
      {children}
    </CreateTourContext.Provider>
  );
};

export const useCreateTour = () => {
  return useContext(CreateTourContext);
};
