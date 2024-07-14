"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { createTour } from "../actions/tourActions.js";

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


  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };
  const updateStep2Data = (newData, identifier) => {
    setFormData((prevData) => {
      const step2Data = [...prevData.step2Data];
      const index =
        typeof identifier === "number"
          ? identifier
          : step2Data.findIndex((item) => item.placeId === identifier);

      if (index !== -1) {
        step2Data[index] = {
          ...step2Data[index],
          ...newData,
          stopOrder: index + 1,
        };
      }

      return { ...prevData, step2Data };
    });
  };

  const handlePublishTour = async () => {
    const tourData = {
      title: formData.step1Data.tour,
      summary: formData.step4Data.summary,
      price: formData.step1Data.price,
      destination: formData.step1Data.destination,
      thumbnailImage: formData.step4Data.thumbnailImage,
      estimatedDuration: formData.step1Data.duration,
      landmarks: formData.step2Data.map((landmark) => {
        const resources = [];
        landmark.addFields.forEach((data) => {
          resources.push(data);
        });

        return {
          latitude: landmark.latitude,
          longitude: landmark.longitude,
          city: landmark.locationCity,
          locationName: landmark.location,
          stopOrder: landmark.stopOrder,
          description: landmark.locationDescription,
          resources: resources,
        };
      }),
    };

    const { data, error } = await createTour(tourData);

    if (error) {
      // TODO : Handle error (e.g., display a notification)
      console.error(error);
    } else {
      // TODO:  Handle success (e.g., redirect to the tour page)
      console.log(data);
    }
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
        handlePublishTour,
      }}
    >
      {children}
    </CreateTourContext.Provider>
  );
};

export const useCreateTour = () => {
  return useContext(CreateTourContext);
};
