// createTourContext.jsx
"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { createTour, updateTour } from "../actions/tourActions.js";
import { filterOutAddFields } from "../utils/filterOutAddFields.js";
import { removePlaceIdFromUrl } from "../utils/wizardStepValidations.js";
import {
  validateStep,
  canProceedToStep,
} from "../utils/wizardStepValidations.js";
import { usePopup } from "./popupContext.jsx";
import { useRouter, useSearchParams } from "next/navigation.js";
const LOCAL_STORAGE_KEY = "savedTourFormData";
const EDIT_TOUR_KEY = "tourToEdit";

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

  const popup = usePopup();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if it's edit mode
  const editModeTourId = searchParams.get("edit");

  const [openModal, setOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

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

  // Check for the tourToEdit object in sessionStorage
  useEffect(() => {
    const storedTour = sessionStorage.getItem(EDIT_TOUR_KEY);
    if (storedTour) {
      const tourToEdit = JSON.parse(storedTour);
      // Set form data to the tourToEdit object if found
      console.log(tourToEdit);
      setFormData({
        step1Data: {
          tour: tourToEdit.title || "",
          destination: tourToEdit.destination || "",
          duration: tourToEdit.estimatedDuration || "",
          tourType: tourToEdit.tourType || "",
          price: tourToEdit.price || "",
        },
        step2Data:
          tourToEdit.landmarks.map((landmark) => ({
            landmarkId: landmark.landmarkId || null,
            latitude: landmark.latitude || null,
            longitude: landmark.longitude || null,
            location: landmark.locationName || "",
            locationCity: landmark.city || "",
            locationDescription: landmark.description || "",
            stopOrder: landmark.stopOrder || 0,
            placeId: landmark.placeId || "",
            addFields:
              landmark.resources.map((resource) => ({
                id: resource.resourceId || "",
                resourceFile: null,
                resourceUrl: resource.resourceUrl || "",
                resourceType: resource.resourceType || "",
              })) || [],
          })) || [],
        step3Data: "",
        step4Data: {
          summary: tourToEdit.summary || "",
          thumbnailImage: tourToEdit.thumbnailImageUrl || null,
        },
      });
      setIsEditMode(true);
      sessionStorage.removeItem(EDIT_TOUR_KEY);
    }
  }, []);

  console.log(formData);
  // Show load draft modal only if it's not edit mode
  useEffect(() => {
    if (!hasPrompted.current && !editModeTourId) {
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
  }, [isEditMode]);

  const onCloseModal = () => {
    setFormData(() => emptyFormData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(emptyFormData));
    setOpenModal(false);
  };

  console.log(formData);

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
      removePlaceIdFromUrl(stepIndex);
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
    const tourData = {
      title: formData.step1Data.tour,
      summary: formData.step4Data.summary,
      price: formData.step1Data.price,
      tourType: formData.step1Data.tourType,
      destination: formData.step1Data.destination,
      thumbnailImage: formData.step4Data.thumbnailImage,
      estimatedDuration: formData.step1Data.duration,
      landmarks: formData.step2Data.map((landmark) => {
        const resources = landmark.addFields.map((data) => ({
          resourceId: data.id || "",
          resourceFile:
            data.resourceFile instanceof File ? data.resourceFile : null,
          resourceUrl: data.resourceUrl || "",
          resourceType: data.resourceType || "",
        }));

        return {
          landmarkId: landmark.landmarkId,
          latitude: landmark.latitude,
          longitude: landmark.longitude,
          city: landmark.locationCity,
          locationName: landmark.location,
          stopOrder: landmark.stopOrder,
          description: landmark.locationDescription,
          placeId: landmark.placeId,
          resources: resources,
        };
      }),
    };

    // Проверка за липсващи задължителни полета
    if (
      !tourData.title ||
      !tourData.price ||
      !tourData.summary ||
      !tourData.thumbnailImage
    ) {
      popup({
        type: "ERROR",
        message:
          "Title, Price, Summary and Thumbnail image are required fields.",
      });
      return;
    }

    // Проверка дали има ресурси за всяка забележителност
    const hasValidResources = tourData.landmarks.every(
      (landmark) => landmark.resources.length > 0
    );
    if (!hasValidResources) {
      popup({
        type: "ERROR",
        message: "Each landmark must have at least one resource (file or URL).",
      });
      return;
    }

    let response;
    if (isEditMode) {
      const tourId = editModeQuery;
      response = await updateTour(tourId, tourData);
    } else {
      response = await createTour(tourData);
    }

    const { error } = response;
    console.log(response.data);

    if (error) {
      Object.entries(error.errors).forEach(([field, messages]) => {
        popup({
          type: "ERROR",
          message: `${field}: ${messages}`,
        });
      });
    } else {
      router.push("/");
      popup({
        type: "SUCCESS",
        message: "Your tour has been successfully created",
      });
    }
  };

  return (
    <CreateTourContext.Provider
      value={{
        step,
        formData,
        openModal,
        isEditMode,
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
