"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
// import { createTour } from "../actions/tourActions.js";
import { filterOutAddFields } from "../utils/filterOutAddFields.js";
import {
  validateStep,
  canProceedToStep,
} from "../utils/wizardStepValidations.js";
import { usePopup } from "./popupContext.jsx";
import { axiosTour } from "@/api/axios.js";
import { getCookie } from "../utils/authHelper.js";

const LOCAL_STORAGE_KEY = "savedTourFormData";

const CreateTourContext = createContext();

export const CreateTourProvider = ({ children }) => {
  const emptyFormData = {
    step1Data: {
      tour: "",
      destination: "",
      duration: "",
      tourType: "",
      price: "",
    },
    step2Data: [],
    step3Data: "",
    step4Data: {
      summary: "",
      thumbnailImage: null,
    },
  };

  // const loadInitialState = () => {
  //   if (typeof window !== "undefined") {
  //     // Check if the code is running in the browser
  //     const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  //     return savedData ? JSON.parse(savedData) : emptyFormData;
  //   }
  //   return emptyFormData; // Return empty form data during SSR
  // };

  const popup = usePopup();

  const [openModal, setOpenModal] = useState(false);

  const [step, setStep] = useState(0);
  // const [formData, setFormData] = useState(loadInitialState());
  const [formData, setFormData] = useState(emptyFormData);
  const [localStorageData, setLocalStorageData] = useState(false);
  const hasPrompted = useRef(false); // Use a ref to ensure the prompt only happens once

  // Currently it saves every time formData changes, but it's a better idea to save it with a Save Draft Button
  useEffect(() => {
    if (hasPrompted.current) {
      const filteredData = filterOutAddFields(formData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredData));
    }
  }, [formData]);

  useEffect(() => {
    if (localStorageData) {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      const newData = JSON.parse(savedData);

      setFormData((prevData) => ({ ...prevData, ...newData }));
    }
  }, [localStorageData]);

  useEffect(() => {
    if (!hasPrompted.current) {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      const data = JSON.parse(savedData);

      if (
        data?.step1Data?.tour !== "" ||
        data?.step1Data?.destination !== "" ||
        data?.step1Data?.duration !== "" ||
        data?.step1Data?.price !== "" ||
        data?.step1Data?.tourType !== ""
      ) {
        setOpenModal(true);
      }
    }
  }, []);

  const onCloseModal = () => {
    setFormData(() => emptyFormData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(emptyFormData));
    setOpenModal(false);
  };

  const nextStep = () => {
    if (validateStep(step, formData)) {
      setStep((prevStep) => prevStep + 1);
    } else {
      popup({
        type: "ERROR",
        message: "Please fill in all required fields before proceeding !",
      });
    }
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const goToStep = (stepIndex) => {
    if (canProceedToStep(stepIndex, formData)) {
      setStep(stepIndex);
    } else {
      popup({
        type: "ERROR",
        message:
          "Please fill all required fields and add at least one location to continue !",
      });
    }
  };
  const updateSavedFormData = () => {
    setLocalStorageData(true);
    setOpenModal(false);
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    hasPrompted.current = true;
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
    hasPrompted.current = true;
  };

  const updateStep1Data = (newData) => {
    setFormData((prevData) => {
      const step1Data = { ...newData };
      return { ...prevData, step1Data };
    });
    hasPrompted.current = true;
  };
  const handlePublishTour = async () => {
    const tourTypeOptions = [
      { id: 0, label: "Walking Tour" },
      { id: 1, label: "Cycling Tour" },
      { id: 2, label: "Driving Tour" },
    ];

    // Find the corresponding ID for the selected tour type
    const selectedTourType = tourTypeOptions.find(
      (option) => option.label === formData.step1Data.tourType
    );

    const tourData = {
      title: formData.step1Data.tour,
      summary: formData.step4Data.summary,
      price: formData.step1Data.price,
      tourType: selectedTourType ? selectedTourType.id : null, // Use the id if found
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

    if (!tourData.summary || !tourData.thumbnailImage) {
      popup({
        type: "ERROR",
        message: "Missing thumbnail image or summary",
      });

      return;
    }

    const { data, error } = await createTour(tourData);

    if (error) {
      // Iterate over the errors and create a popup for each one
      Object.entries(error.errors).forEach(([field, messages]) => {
        popup({
          type: "ERROR",
          message: `${field}: ${messages}`,
        });
      });
    } else {
      popup({
        type: "SUCCESS",
        message: "Your tour has been successfully created",
      });
    }
  };

  /**
   * Creates a new tour.
   * @param {*} tourData
   * @returns {object}
   */
  async function createTour(tourData) {
    //TODO: Could create a util function for converting the object to formData
    
    const formData = new FormData();
    formData.append("Title", tourData.title);
    formData.append("Summary", tourData.summary);
    formData.append("Price", tourData.price);
    formData.append("Destination", tourData.destination);
    formData.append("ThumbnailImage", tourData.thumbnailImage);
    formData.append("EstimatedDuration", tourData.estimatedDuration);

    tourData.landmarks.forEach((landmark, index) => {
      formData.append(`Landmarks[${index}].Latitude`, landmark.latitude);
      formData.append(`Landmarks[${index}].Longitude`, landmark.longitude);
      formData.append(`Landmarks[${index}].City`, landmark.city);
      formData.append(
        `Landmarks[${index}].LocationName`,
        landmark.locationName
      );
      formData.append(`Landmarks[${index}].StopOrder`, landmark.stopOrder);
      formData.append(`Landmarks[${index}].Description`, landmark.description);

      // Append resources array within each landmark
      landmark.resources.forEach((file) => {
        formData.append(`Landmarks[${index}].Resources`, file);
      });
    });

    let data = null;
    let error = null;

    try {
      const response = await axiosTour.post("/create-tour", formData);
      
      data = response.data;
    } catch (err) {
      error = err.response?.data?.Message;
    }

    return { data, error };
  }

  return (
    <CreateTourContext.Provider
      value={{
        step,
        formData,
        openModal,
        onCloseModal,
        nextStep,
        prevStep,
        goToStep,
        updateFormData,
        updateStep2Data,
        updateSavedFormData,
        updateStep1Data,
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
