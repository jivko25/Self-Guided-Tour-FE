import { createContext, useContext, useState } from "react";

const CreateTourContext = createContext();


export const CreateTourProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    step1Data:{
      tour:'',
      destination:'',
      price:''
    },
    step2Data: [],
    step3Data: '',
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <CreateTourContext.Provider
      value={{ step, formData, nextStep, prevStep, goToStep, updateFormData }}
    >
      {children}
    </CreateTourContext.Provider>
  );
};

export const useCreateTour = () => {
  return useContext(CreateTourContext);
};
