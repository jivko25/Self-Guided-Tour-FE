"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";

const LOCAL_STORAGE_KEY = "savedTourFormData";

const CreateTourContext = createContext();

export const CreateTourProvider = ({ children }) => {
  const emptyFormData = {
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

  const loadInitialState = () => {
    if (typeof window !== "undefined") {
      // Check if the code is running in the browser
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : emptyFormData;
    }
    return emptyFormData; // Return empty form data during SSR
  };

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(loadInitialState());
  const hasPrompted = useRef(false); // Use a ref to ensure the prompt only happens once

  // Currently it saves everytime formData changes , but it's a better idea to save it with a Save Draft Button
  useEffect(() => {
    if (hasPrompted.current) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  useEffect(() => {
    if (!hasPrompted.current) {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedData) {
        const userConfirmed = window.confirm(
          "Do you want to load the saved draft?"
        );
        if (userConfirmed) {
          setFormData(JSON.parse(savedData));
        } else {
          setFormData(emptyFormData);
        }
      }
      hasPrompted.current = true; // Ensure this runs only once
    }
  }, []);

  console.log(formData);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateStep2Data = (newData, index) => {
    setFormData((prevData) => {
      const step2Data = [...prevData.step2Data];
      step2Data[index] = {
        ...step2Data[index],
        ...newData,
        stopOrder: index + 1,
      };
      return { ...prevData, step2Data };
    });
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
