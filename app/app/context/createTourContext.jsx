"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "savedTourFormData";

const CreateTourContext = createContext();

export const CreateTourProvider = ({ children }) => {
  const loadInitialState = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData
      ? JSON.parse(savedData)
      : {
          step1Data: {
            tour: "",
            destination: "",
            duration: "",
            price: "",
          },
          step2Data: [],
          step3Data: "",
          step4Data: {
            summary: "",
            thumbnailImage: null,
          },
        };
  };

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(loadInitialState());

  // Currently it saves everytime formData changes , but it's a better idea to save it with a Save Draft Button
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const userConfirmed = window.confirm(
        "Do you want to load the saved draft?"
      );
      if (userConfirmed) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  console.log(formData);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateStep2Data = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      step2Data: [...prevData.step2Data, newData],
    }));
  };

  return (
    <CreateTourContext.Provider
      value={{
        step,
        formData,
        nextStep,
        prevStep,
        goToStep,
        updateFormData,
        updateStep2Data,
      }}
    >
      {children}
    </CreateTourContext.Provider>
  );
};

export const useCreateTour = () => {
  return useContext(CreateTourContext);
};
