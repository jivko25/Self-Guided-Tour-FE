"use client";
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import GoogleMaps from "../../GoogleMaps/GoogleMaps.js";
import LocationInput from "./Step3Components/LocationInput.jsx";
import FileUpload from "./Step3Components/FileUpload.jsx";
import DescriptionWeb from "./Step3Components/DescriptionWeb.jsx";
import DescriptionTabletPhone from "./Step3Components/DescriptionTabletPhone.jsx";
import MediaPreviewTablet from "./Step3Components/MediaPreviewTablet.jsx";
import MediaPreviewWebPhone from "./Step3Components/MediaPreviewWebPhone.jsx";
import NavigationButtons from "./Step3Components/NavigationButtons.jsx";
import { usePopup } from "@/app/context/popupContext.jsx";

const Step3 = () => {
  const popup = usePopup();

  const { formData, updateFormData, updateStep2Data, nextStep, goToStep } =
    useCreateTour();

  const searchParams = useSearchParams();
  const placeId = searchParams.get("placeId");
  const [coordinates, setCoordinates] = useState(null);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const [resourcesToDelete, setResourcesToDelete] = useState([]); // Добавено състояние за ресурсите за изтриване

  const [inputs, setInputs] = useState({
    locationName: "",
    placeId: "",
    locationCity: "",
    locationDescription: "",
    addFields: [],
  });
  const [descriptionCharCount, setDescriptionCharCount] = useState(
    inputs.locationDescription.length || 0
  );

  useEffect(() => {
    if (placeId) {
      const result = formData.step2Data.find((loc) => loc.placeId === placeId);
      if (result) {
        setCoordinates({ lat: result.latitude, lng: result.longitude });
        setInputs({
          placeId: result.placeId || "",
          locationName: result.location || "",
          locationCity: result.locationCity || "",
          locationDescription: result.locationDescription || "",
          addFields: result.addFields || [],
        });
        setDescriptionCharCount(result.locationDescription?.length || 0);
      }
    } else if (formData.step2Data.length > 0) {
      const firstLocation = formData.step2Data[0];
      setCoordinates({
        lat: firstLocation.latitude,
        lng: firstLocation.longitude,
      });
      setInputs({
        placeId: firstLocation.placeId || "",
        locationName: firstLocation.location || "",
        locationCity: firstLocation.locationCity || "",
        locationDescription: firstLocation.locationDescription || "",
        addFields: firstLocation.addFields || [],
      });
      setDescriptionCharCount(firstLocation.locationDescription?.length || 0);
    }
  }, [placeId]);

  const handlePrevStep = () => {
    if (placeId) {
      goToStep(1);
    } else {
      if (currentLocationIndex > 0) {
        const prevIndex = currentLocationIndex - 1;
        const prevData = formData.step2Data[prevIndex];

        setCoordinates({
          lat: prevData.latitude,
          lng: prevData.longitude,
        });
        setInputs({
          placeId: prevData.placeId || "",
          locationName: prevData.location || "",
          locationCity: prevData.locationCity || "",
          locationDescription: prevData.locationDescription || "",
          addFields: prevData.addFields || [],
        });
        setDescriptionCharCount(prevData.locationDescription?.length || 0);
        setCurrentLocationIndex(prevIndex);
      } else {
        goToStep(1);
      }
    }
  };

  const handleNextStep = () => {
    const { locationName, ...updatedInputs } = inputs;

    if (!locationName || locationName.length < 3 || locationName.length > 50) {
      popup({
        type: "ERROR",
        message: "Location name must be between 3 and 50 characters long",
      });
      return;
    }

    if (inputs.addFields.length === 0) {
      popup({
        type: "ERROR",
        message: "Please upload at least one file",
      });
      return;
    }

    if (placeId) {
      popup({
        type: "SUCCESS",
        message: "Good job, required fields are filled!",
      });
      updateStep2Data({ ...updatedInputs, location: locationName }, placeId);
      goToStep(1);
    } else {
      updateStep2Data(
        { ...updatedInputs, location: locationName },
        formData.step2Data[currentLocationIndex].placeId
      );

      if (currentLocationIndex < formData.step2Data.length - 1) {
        const nextIndex = currentLocationIndex + 1;

        setTimeout(() => {
          const nextData = formData.step2Data[nextIndex];
          setCoordinates({
            lat: nextData.latitude,
            lng: nextData.longitude,
          });
          setInputs({
            placeId: nextData.placeId || "",
            locationName: nextData.location || "",
            locationCity: nextData.locationCity || "",
            locationDescription: nextData.locationDescription || "",
            addFields: nextData.addFields || [],
          });
          setDescriptionCharCount(nextData.locationDescription?.length || 0);
          setCurrentLocationIndex(nextIndex);
        }, 0);
      } else {
        popup({
          type: "SUCCESS",
          message: "Good job, all locations are completed",
        });
        nextStep();
      }
    }
  };

  const handleRemoveMedia = (index) => {
    const updatedAddFields = inputs.addFields.filter((_, i) => i !== index);
    setInputs((prevInputs) => ({
      ...prevInputs,
      addFields: updatedAddFields,
    }));

    const resourceToRemove = inputs.addFields[index];
    if (!(resourceToRemove instanceof File)) {
      setResourcesToDelete((prev) => [...prev, resourceToRemove.id]);
    }

    const updatedStep2Data = formData.step2Data.map((location) => {
      if (location.placeId === inputs.placeId) {
        return {
          ...location,
          addFields: updatedAddFields,
        };
      }
      return location;
    });

    updateFormData({
      ...formData,
      step2Data: updatedStep2Data,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "addFields" && files) {
      const fileArray = Array.from(files);
      const validFiles = [];
      const invalidFiles = [];
      const oversizedFiles = [];

      fileArray.forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          oversizedFiles.push(file);
        } else if (
          ["image", "video", "audio"].some((type) =>
            file.type.toLowerCase().startsWith(type)
          )
        ) {
          validFiles.push(file);
        } else {
          invalidFiles.push(file);
        }
      });

      if (oversizedFiles.length > 0) {
        popup({
          type: "ERROR",
          message: `The file exceeds the 5MB limit and is not added`,
        });
      }

      if (invalidFiles.length > 0) {
        popup({
          type: "ERROR",
          message: `The file is not in a valid format and is not added`,
        });
      }

      setInputs((prevInputs) => ({
        ...prevInputs,
        addFields: [...prevInputs.addFields, ...validFiles],
      }));
      updateFormData({
        step3Data: {
          ...inputs,
          addFields: [...inputs.addFields, ...validFiles],
        },
      });
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
    if (name === "locationDescription") {
      setDescriptionCharCount(value.length);
    }
  };

  const isImage = (file) => file.type.toLowerCase().startsWith("image");
  const isVideo = (file) => file.type.toLowerCase().startsWith("video");
  const isFile = (file) => file instanceof File;

  return (
    <div className="flex flex-col w-full web:h-[100vh] ">
      <div className="flex w-full justify-center items-center h-full web:flex-row web:max-h-[691px] tablet:flex-col-reverse phone:flex-col-reverse smallPhone:flex-col-reverse">
        <div className="flex flex-col items-center w-full web:h-full web:justify-start web:max-h-[691px] web:overflow-y-auto web:max-w-[50%] tablet:w-full tablet:overflow-y-auto tablet:max-h-[350px] phone:w-full">
          <DescriptionWeb />
          <section className="flex items-center flex-col w-full justify-center tablet:pt-[10px] phone:pt-[10px] smallPhone:pt-[10px]">
            <LocationInput
              inputs={inputs}
              handleChange={handleChange}
              charactersCount={descriptionCharCount}
            />
            <FileUpload handleChange={handleChange} />
          </section>

          <section className="hidden flex-col items-center justify-center w-full web:max-w-[581px] h-full web:flex web:ml-[0px] phone:flex phone:ml-[30px] smallPhone:flex smallPhone:ml-[30px] tablet:hidden">
            <MediaPreviewWebPhone
              inputs={inputs}
              isFile={isFile}
              isImage={isImage}
              isVideo={isVideo}
              onRemove={handleRemoveMedia}
            />
          </section>
        </div>

        <div className="flex flex-col rounded-[5px] w-full web:h-full web:max-w-[50%] web:max-h-[691px] tablet:items-center tablet:justify-center tablet:h-screen tablet:max-w-[584px] tablet:max-h-[696px] tablet:mb-[20px] phone:items-center phone:justify-center phone:h-screen phone:max-w-[361px] phone:max-h-[420px] smallPhone:items-center smallPhone:justify-center smallPhone:h-screen smallPhone:max-w-[290px] smallPhone:max-h-[400px]">
          <DescriptionTabletPhone />
          <GoogleMaps coordinates={coordinates} />
        </div>
      </div>

      <div className="flex flex-col w-full h-full web:justify-start web:items-start tablet:justify-center tablet:items-center">
        <NavigationButtons
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />

        <div className="hidden flex-col items-center justify-center w-full max-w-[581px] h-full web:hidden tablet:flex">
          <MediaPreviewTablet
            inputs={inputs}
            isFile={isFile}
            isImage={isImage}
            isVideo={isVideo}
            onRemove={handleRemoveMedia}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
