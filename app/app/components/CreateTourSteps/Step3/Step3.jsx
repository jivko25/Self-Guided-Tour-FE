"use client";
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import GoogleMapsComponent from "../../GoogleMapsComponent/GoogleMapsComponent.js";
import LocationInput from "./Step3Components/LocationInput.jsx";
import FileUpload from "./Step3Components/FileUpload.jsx";
import DescriptionWeb from "./Step3Components/DescriptionWeb.jsx";
import DescriptionTabletPhone from "./Step3Components/DescriptionTabletPhone.jsx";
import MediaPreviewTablet from "./Step3Components/MediaPreviewTablet.jsx";
import MediaPreviewWebPhone from "./Step3Components/MediaPreviewWebPhone.jsx";
import NavigationButtons from "./Step3Components/NavigationButtons.jsx";
import { usePopup } from "@/app/context/popupContext.jsx";
import { useRouter } from "next/navigation.js";

const Step3 = () => {
  const popup = usePopup();
  const router = useRouter();

  const { formData, updateFormData, updateStep2Data, prevStep, goToStep } =
    useCreateTour();

  const searchParams = useSearchParams();
  const placeId = searchParams.get("placeId");
  const [coordinates, setCoordinates] = useState(null);

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

  const removePlaceIdFromUrl = () => {
    const url = new URL(window.location);
    url.searchParams.delete("placeId");
    window.history.pushState({}, "", url);
  };

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
      // Pre-fill with the first location data if no specific placeId is provided
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
  }, [placeId, formData.step2Data]);

  const handlePrevStep = () => {
    if (placeId) {
      removePlaceIdFromUrl();
      goToStep(1);
    } else {
      alert("Previous location loaded");
    }
  };

  const handleNextStep = () => {
    const { locationName, ...updatedInputs } = inputs;
    if (!locationName || inputs.addFields.length === 0) {
      popup({
        type: "ERROR",
        message: "Please fill out the required fields !",
      });
    } else {
      popup({
        type: "SUCCESS",
        message: "Good job required fields are filled !",
      });
    }
    updateStep2Data({ ...updatedInputs, location: locationName }, placeId);
    removePlaceIdFromUrl();
    goToStep(1);
  };

  const handleRemoveMedia = (index) => {
    const updatedAddFields = inputs.addFields.filter((_, i) => i !== index);

    setInputs((prevInputs) => ({
      ...prevInputs,
      addFields: updatedAddFields,
    }));

    updateStep2Data(
      {
        ...inputs,
        addFields: updatedAddFields,
      },
      placeId
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "addFields" && files) {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter(
        (file) => file.size <= 5 * 1024 * 1024
      ); // 5MB in bytes

      if (validFiles.length !== fileArray.length) {
        popup({
          type: "ERROR",
          message: "Some files exceed the 5MB limit and were not added.",
        });
        // alert("Some files exceed the 5MB limit and were not added.");
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

  // Function to check if a file is an image
  const isImage = (file) => file.type.startsWith("image");

  // Function to check if a file is a video
  const isVideo = (file) => file.type.startsWith("video");

  return (
    <div className="flex flex-col w-full web:h-[100vh] ">
      {/* Main container for inputs and maps, files for web */}
      <div
        className="flex w-full justify-center items-center h-full
       web:flex-row web:max-h-[691px] 
       tablet:flex-col-reverse 
       phone:flex-col-reverse
       smallPhone:flex-col-reverse"
      >
        {/* DescriptionWeb, LocationInput, FileUpload, MediaPreviewWebPhone */}
        <div
          className="flex flex-col items-center w-full web:h-full
        web:justify-start web:max-h-[691px] web:overflow-y-auto web:max-w-[50%]
        tablet:w-full tablet:overflow-y-auto tablet:max-h-[350px]
        phone:w-full
        "
          style={{
            "::WebkitScrollbar": { display: "none" },
            MsOverflowStyle: "none",
            ScrollbarWidth: "none",
          }}
        >
          <DescriptionWeb />

          <section
            className="flex items-center flex-col w-full justify-center 
          tablet:pt-[10px]
          phone:pt-[10px]
          smallPhone:pt-[10px]"
          >
            <LocationInput
              inputs={inputs}
              handleChange={handleChange}
              charactersCount={descriptionCharCount}
            />
            <FileUpload handleChange={handleChange} />
          </section>

          <section
            className="hidden flex-col items-center justify-center w-full web:max-w-[581px] h-full
          web:flex web:ml-[0px]
          phone:flex phone:ml-[30px]
          smallPhone:flex smallPhone:ml-[30px]
          tablet:hidden"
          >
            <MediaPreviewWebPhone
              inputs={inputs}
              isImage={isImage}
              isVideo={isVideo}
              onRemove={handleRemoveMedia}
            />
          </section>
        </div>

        {/* DescriptionTabletPhone, GoogleMapsComponent */}
        <div
          className="flex flex-col rounded-[5px] w-full 
        web:h-full web:max-w-[50%] web:max-h-[691px] 
        tablet:items-center tablet:justify-center tablet:h-screen tablet:max-w-[584px] tablet:max-h-[696px] tablet:mb-[20px]
        phone:items-center phone:justify-center phone:h-screen phone:max-w-[361px] phone:max-h-[420px]
        smallPhone:items-center smallPhone:justify-center smallPhone:h-screen smallPhone:max-w-[290px] smallPhone:max-h-[400px]"
        >
          <DescriptionTabletPhone />

          <GoogleMapsComponent coordinates={coordinates} />
        </div>
      </div>

      {/* NavigationButtons, MediaPreviewTablet */}
      <div
        className="flex flex-col w-full h-full 
          web:justify-start web:items-start
          tablet:justify-center tablet:items-center"
      >
        <NavigationButtons
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />

        <div
          className="hidden flex-col items-center justify-center w-full max-w-[581px] h-full
            web:hidden 
            tablet:flex"
        >
          <MediaPreviewTablet
            inputs={inputs}
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
