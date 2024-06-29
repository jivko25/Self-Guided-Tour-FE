"use client";
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GoogleMapsComponent from "../../GoogleMapsComponent/GoogleMapsComponent.js";
import LocationInput from "./LocationInput.jsx";
import FileUpload from "./FileUpload.jsx";
import DescriptionWeb from "./DescriptionWeb.jsx";
import DescriptionTabletPhone from "./DescriptionTabletPhone.jsx";
import MediaPreviewTablet from "./MediaPreviewTablet.jsx";
import MediaPreviewWebPhone from "./MediaPreviewWebPhone.jsx";
import NavigationButtons from "./NavigationButtons.jsx";

const Step3 = () => {
  const pathname = usePathname();

  const { formData, updateFormData, prevStep } = useCreateTour();
  const [inputs, setInputs] = useState({
    locationName: formData.step3Data.locationName || "",
    locationDescription: formData.step3Data.locationDescription || "",
    addFields: formData.step3Data.addFields || [],
  });

  useEffect(() => {
    setInputs({
      locationName: formData.step3Data.locationName || "",
      locationDescription: formData.step3Data.locationDescription || "",
      addFields: formData.step3Data.addFields || [],
    });
  }, [formData.step3Data]);

  const handleFinish = () => {
    alert("Form submitted!");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "addFields" && files) {
      const fileArray = Array.from(files);
      setInputs((prevInputs) => ({
        ...prevInputs,
        addFields: [...prevInputs.addFields, ...fileArray],
      }));
      updateFormData({
        step3Data: {
          ...inputs,
          addFields: [...inputs.addFields, ...fileArray],
        },
      });
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
      updateFormData({ step3Data: { ...inputs, [name]: value } });
    }
  };

  // Function to check if a file is an image
  const isImage = (file) => file.type.startsWith("image");

  // Function to check if a file is a video
  const isVideo = (file) => file.type.startsWith("video");

  const handleMapClick = (newData) => {
    updateFormData({
      ...formData,
      step3Data: { ...formData.step3Data, ...newData },
    });
    console.log(formData);
  };

  return (
    <div
      className="flex flex-col w-full
    web:h-screen 
    tablet:min-h-screen "
    >
      {/* Main container for inputs and maps, files for web */}
      <div
        className="flex w-full justify-center items-center
       web:h-full web:flex-row web:max-h-[691px] 
       tablet:h-full tablet:flex-col-reverse 
       phone:h-full phone:flex-col-reverse"
      >
        <div
          className="flex flex-col items-center w-full
        web:justify-start web:max-h-[691px] web:overflow-y-auto web:max-w-[50%]
        tablet:w-full tablet:overflow-y-auto tablet:max-h-[350px]"
        >
          {/* Content that appears in a web type */}

          <DescriptionWeb />

          {/* Inputs */}
          <section
            className="flex items-center flex-col w-full justify-center 
          tablet:pt-[30px]
          phone:pt-[30px]"
          >
            <LocationInput inputs={inputs} handleChange={handleChange} />

            <FileUpload handleChange={handleChange} />
          </section>

          {/* Images and videos for web and phone */}
          <section
            className="hidden flex-col items-center justify-center w-full max-w-[581px] h-full
          web:flex 
          phone:flex
          tablet:hidden"
          >
            <MediaPreviewWebPhone
              inputs={inputs}
              isImage={isImage}
              isVideo={isVideo}
            />
          </section>
        </div>

        {/* MAP and Description for tablet, phone*/}
        <section
          className="flex flex-col rounded-[5px] w-full 
        web:h-full web:max-w-[50%] web:max-h-[691px] 
        tablet:items-center tablet:justify-center tablet:h-screen tablet:max-w-[584px] tablet:max-h-[676px]
        phone:items-center phone:justify-center phone:h-screen phone:max-w-[361px] phone:max-h-[420px]"
        >
          {/* Content that hides in a web type */}
          <DescriptionTabletPhone />

          {/* MAP */}
          <GoogleMapsComponent handleMapClick={handleMapClick} />

        </section>
      </div>

      {/* Buttons and files for tablet*/}
      <div
        className="flex flex-col w-full h-full 
      web:justify-start web:items-start
      tablet:justify-center tablet:items-center  "
      >
        {/* Buttons */}
        <div
          className="flex items-start  w-full h-[138px]  bg-neutral-50 border-t border-gray-200 
      web:w-[50%] web:justify-start web:ml-[0px] web:gap-[324px]
      tablet:justify-center tablet:gap-[324px]
      phone:justify-center"
        >
        
          <NavigationButtons prevStep={prevStep} handleFinish={handleFinish}/>
        </div>

        {/* Media files for tablet*/}
        <div
          className="hidden flex-col items-center justify-center w-full max-w-[581px] h-full
        web:hidden 
        tablet:flex 
        "
        >
          <MediaPreviewTablet
            inputs={inputs}
            isImage={isImage}
            isVideo={isVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
