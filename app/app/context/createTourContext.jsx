// createTourContext.jsx
"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { createTour, getOne, updateTour } from "../actions/tourActions.js";
import { filterOutAddFields } from "../utils/filterOutAddFields.js";
import { removePlaceIdFromUrl } from "../utils/wizardStepValidations.js";
import { clearIndexedDB, checkIndexedDB } from "../utils/indexedDBUtils.js";
import {
  validateStep,
  canProceedToStep,
} from "../utils/wizardStepValidations.js";
import { usePopup } from "./popupContext.jsx";
import { useRouter, useSearchParams, usePathname } from "next/navigation.js";
import { useAuth } from "./authContext.jsx";
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

  const popup = usePopup();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPath = usePathname();

  const { session } = useAuth();

  const userId = session?.userId;

  // Check if it's edit mode
  const editModeTourId = searchParams.get("edit");

  const [openModal, setOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [step, setStep] = useState(0);
  // const [formData, setFormData] = useState(loadInitialState());
  const [formData, setFormData] = useState(emptyFormData);
  const [localStorageData, setLocalStorageData] = useState(false);
  const hasPrompted = useRef(false); // Use a ref to ensure the prompt only happens once

  // Currently it saves every time formData changes in create, but it's a better idea to save it with a Save Draft Button
  useEffect(() => {
    if (hasPrompted.current && !editModeTourId) {
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

  // Delete indexedDB if user leaves preview or create
  useEffect(() => {
    // Function to check URL search params and clear IndexedDB if required
    const handleSearchParamsChange = () => {
      const editTour = searchParams.get("editTour");
      const edit = searchParams.get("edit");

      // Clear IndexedDB if not in preview or create mode
      if (!editTour && !edit) {
        clearIndexedDB();
      }
    };

    // Run the function when the component mounts or when searchParams change
    handleSearchParamsChange();

    // Cleanup or re-check on unmount if needed (depending on specific route navigation behavior)
  }, [searchParams]);

  useEffect(() => {
    if (editModeTourId) {
      const getTour = async () => {
        let db;
        const dbRequest = indexedDB.open("tourToEdit", 1);

        // Handle database upgrades or creation
        dbRequest.onupgradeneeded = function (event) {
          db = event.target.result;
          db.createObjectStore("data", { keyPath: "id" });
        };

        dbRequest.onsuccess = async function (event) {
          db = event.target.result;
          const transaction = db.transaction(["data"], "readonly");
          const objectStore = transaction.objectStore("data");

          const getRequest = objectStore.getAll();
          getRequest.onsuccess = async function (event) {
            const indexedDBData = event.target.result;

            if (indexedDBData.length > 0) {
              // Prefill the form with data from IndexedDB
              const data = indexedDBData[0].data;
              setFormData({
                step1Data: {
                  tour: data?.step1Data.tour || "",
                  destination: data?.step1Data.destination || "",
                  duration: data?.step1Data.duration || "",
                  tourType: data?.step1Data.tourType || "",
                  price: data?.step1Data.price || "",
                },
                step2Data:
                  data?.step2Data.map((landmark) => ({
                    landmarkId: landmark.landmarkId || null,
                    latitude: landmark.latitude || null,
                    longitude: landmark.longitude || null,
                    location: landmark.location || "",
                    locationCity: landmark.city || "",
                    locationDescription: landmark.description || "",
                    stopOrder: landmark.stopOrder || 0,
                    placeId: landmark.placeId || "",
                    addFields:
                      landmark.addFields?.map((resource) => ({
                        type: resource.type || "",
                        url: resource.url || "",
                        id: resource.id || "",
                      })) || [],
                  })) || [],
                step3Data: "",
                step4Data: {
                  summary: data?.step4Data.summary || "",
                  thumbnailImage: data?.step4Data.thumbnailImage || null,
                },
              });
            } else {
              // No data in IndexedDB, fetch from server
              fetchFromServer();
            }
          };

          getRequest.onerror = function (event) {
            console.error(
              "Error fetching data from IndexedDB:",
              event.target.error
            );
            // Fallback to fetching from server if IndexedDB error
            fetchFromServer();
          };
        };

        dbRequest.onerror = function (event) {
          console.error("Error opening IndexedDB:", event.target.error);
          // Fallback to fetching from server
          fetchFromServer();
        };
      };

      const fetchFromServer = async () => {
        console.log("Getting data from SERVER");
        const { data, error } = await getOne(editModeTourId);
        if (error) {
          router.push("/404");
          return;
        }

        if (data) {
          // Prefill inputs with backend data
          if (data.creatorId === userId) {
            setFormData({
              step1Data: {
                tour: data?.title || "",
                destination: data?.destination || "",
                duration: data?.estimatedDuration || "",
                tourType: data?.tourType || "",
                price: data?.price || "",
              },
              step2Data:
                data?.landmarks?.map((landmark) => ({
                  landmarkId: landmark.landmarkId || null,
                  latitude: landmark.latitude || null,
                  longitude: landmark.longitude || null,
                  location: landmark.locationName || "",
                  locationCity: landmark.city || "",
                  locationDescription: landmark.description || "",
                  stopOrder: landmark.stopOrder || 0,
                  placeId: landmark.placeId || "",
                  addFields:
                    landmark.resources?.map((resource) => ({
                      type: resource.resourceType || "",
                      url: resource.resourceUrl || "",
                      id: resource.resourceId || "",
                    })) || [],
                })) || [],
              step3Data: "",
              step4Data: {
                summary: data?.summary || "",
                thumbnailImage: data?.thumbnailImageUrl || null,
              },
            });
          } else {
            router.push("/404");
          }
        }
      };

      getTour();
      setIsEditMode(true);
    }
  }, [editModeTourId, userId]);

  // Show load draft modal only if it's not edit mode
  useEffect(() => {
    if (currentPath === "/create") {
      const checkData = async () => {
        try {
          const dbExists = await checkIndexedDB();

          // Now check localStorage or IndexedDB
          if (!hasPrompted.current && !editModeTourId && !dbExists) {
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
        } catch (error) {
          console.error("Error checking IndexedDB:", error);
        }
      };

      checkData();
    }
  }, [isEditMode, currentPath]);

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
        const resources = [];
        landmark.addFields.forEach((data) => {
          resources.push(data);
        });

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

    if (!tourData.summary || !tourData.thumbnailImage) {
      popup({
        type: "ERROR",
        message: "Missing thumbnail image or summary",
      });

      return;
    }

    // If it's edit mode update the tour else create a new tour
    let response;
    if (isEditMode) {
      const tourId = editModeTourId;
      response = await updateTour(tourId, tourData);
    } else {
      response = await createTour(tourData);
    }

    const { error } = response;

    if (error) {
      Object.entries(error.errors).forEach(([field, messages]) => {
        popup({
          type: "ERROR",
          message: `${field}: ${messages}`,
        });
      });
    } else {
      // If user is editing already existing tour redirect him to tour details
      if (isEditMode) {
        router.push(`/tour/${editModeTourId}`);
        popup({
          type: "SUCCESS",
          message: "Your tour has been successfully updated",
        });
      } else {
        router.push(`/success`);
      }
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
