import { createContext, useContext, useState } from 'react';

const CreateTourContext = createContext();

const initialStep2Data = {
  location: '',
  latitude: '',
  longitude: '',
}

export const CreateTourProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: initialStep2Data,
    step3Data: '',
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <CreateTourContext.Provider
      value={{ step, formData, nextStep, prevStep, updateFormData }}
    >
      {children}
    </CreateTourContext.Provider>
  );
};

export const useCreateTour = () => {
  return useContext(CreateTourContext);
};
