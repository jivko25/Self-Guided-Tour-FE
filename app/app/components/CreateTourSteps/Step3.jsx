"use client";
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";
import Image from "next/image";
import ReactPlayer from "react-player"; //npm install react-player
import { usePathname } from "next/navigation";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent.js";

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
          <section
            className="hidden items-center justify-between w-full max-w-[581px] pt-[50px] pb-[30px]
          web:flex
          tablet:hidden
          phone:hidden"
          >
            <div>
              <h4 className="text-gray-900 text-2xl font-medium leading-9">
                Describe and shoot
              </h4>
              <p className="w-[425px] text-blue-950 text-base font-normal leading-normal">
                Add description, images and audio files for the location so that
                the other travelers know more about it.
              </p>
            </div>
            <p className="text-yellow-500 text-base font-medium leading-normal">
              Step 3 of 4
            </p>
          </section>

          {/* Inputs */}
          <section
            className="flex items-center flex-col w-full justify-center 
          tablet:pt-[30px]
          phone:pt-[30px]"
          >
            <div
              className="flex items-center justify-start flex-col mb-[30px] w-full 
            web:max-w-[581px] 
            tablet:max-w-[581px] 
            phone:max-w-[361px]"
            >
              <label
                className="flex justify-start w-full text-gray-900 text-base font-medium leading-normal"
                htmlFor="locationName"
              >
                Location Name
              </label>
              <input
                id="locationName"
                name="locationName"
                type="text"
                value={inputs.locationName}
                onChange={handleChange}
                className="bg-neutral-50 rounded border border-stone-300 w-full h-[60px]
                web:max-w-[581px]
                tablet:max-w-[581px] 
                phone:max-w-[361px]"
                required
              />
            </div>

            <div
              className="flex items-center flex-col w-full mb-[20px] 
            web:max-w-[581px] 
            tablet:max-w-[581px] 
            phone:max-w-[361px]"
            >
              <label
                className="flex justify-start w-full text-gray-900 text-base font-medium leading-normal"
                htmlFor="locationDescription"
              >
                Location Description
              </label>
              <textarea
                id="locationDescription"
                name="locationDescription"
                value={inputs.locationDescription}
                onChange={handleChange}
                className="bg-neutral-50 rounded border border-stone-300 w-full 
                web:max-w-[581px] web:h-[200px] 
                tablet:max-w-[581px] tablet:h-[200px] 
                phone:max-w-[361px] phone:h-[178px]"
                required
              />
            </div>

            <div className="flex items-center flex-col mb-[30px] w-full max-w-[581px]">
              <label
                className="flex justify-start w-full text-gray-900 text-base font-medium leading-normal"
                htmlFor="addInput"
              >
                Add Fields
              </label>
              <div className="flex justify-between w-full max-w-[581px] h-[60px] bg-neutral-50 rounded-[5px] border border-stone-300">
                <input
                  id="addInput"
                  name="addFields"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleChange}
                />
                <div className="flex w-full max-w-[453px] h-full pl-[10px] items-center">
                  <span className="text-gray-500">
                    You can upload images and audio files up to 5MB
                  </span>
                </div>
                <label
                  htmlFor="addInput"
                  className="flex bg-blue-950 text-white border-2 rounded-md border-transparent justify-center items-center text-center font-medium h-full w-full max-w-[128px] cursor-pointer"
                >
                  Upload
                </label>
              </div>
            </div>
          </section>

          {/* Images and video on the web */}
          <section
            className="hidden flex-col items-center justify-center w-full max-w-[581px] h-full
          web:flex "
          >
            {/* IMAGES */}

            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-row flex-wrap justify-between">
                {inputs.addFields.length > 0 &&
                  inputs.addFields.map((file, index) => (
                    <div key={index} className="flex flex-row  mb-4">
                      {isImage(file) && (
                        <Image
                          src={URL.createObjectURL(file)}
                          width={150}
                          height={100}
                          background-position="center"
                          object-fit="cover"
                          background-size="contain"
                          alt="Uploaded Media"
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* VIDEO  */}
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex  flex-row flex-wrap justify-between">
                {inputs.addFields.length > 0 &&
                  inputs.addFields.map((file, index) => (
                    <div key={index} className="flex flex-row  mb-4">
                      {isVideo(file) && (
                        <ReactPlayer
                          url={URL.createObjectURL(file)}
                          width={150}
                          height={100}
                          background-position="center"
                          object-fit="cover"
                          background-size="contain"
                          controls={true}
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>

        {/* MAP */}
        <section
          className="flex flex-col rounded-[5px] w-full 
        web:h-full web:max-w-[50%] web:max-h-[691px] 
        tablet:items-center tablet:justify-center tablet:h-screen tablet:max-w-[584px] tablet:max-h-[676px]
        phone:items-center phone:justify-center phone:h-screen phone:max-w-[361px] phone:max-h-[420px]"
        >
          {/* Content that hides in a web type */}
          <section
            className="hidden items-center justify-between w-full 
          web:hidden web:max-w-[581px] web:pt-[10px] web:pb-[20px]
          tablet:flex tablet:max-w-[581px] tablet:pt-[10px] tablet:pb-[20px] tablet:items-start
          phone:flex phone:max-w-[361px] phone:pt-[10px] phone:pb-[20px] phone:text-sm phone:items-start"
          >
            <div>
              <h4
                className="text-gray-900 text-2xl font-medium leading-9 
              tablet:font-medium
              phone:text-xl "
              >
                Describe and shoot
              </h4>
              <p
                className="w-[425px] text-blue-950 text-base font-normal leading-normal 
                tablet:w-[425px] tablet:text-base
                phone:w-[269px] phone:text-sm"
              >
                Add description, images and audio files for the location so that
                the other travelers know more about it.
              </p>
            </div>
            <p
              className="text-yellow-500 text-base font-medium leading-normal 
              tablet:w-[85px] tablet:text-base
              phone:w-[74px] phone:text-sm"
            >
              Step 3 of 4
            </p>
          </section>

          {/* MAP */}
          <GoogleMapsComponent handleMapClick={handleMapClick} />
        </section>
      </div>

      {/* Buttons with files for tablet, phone */}
      <div
        className="flex flex-col w-full h-full 
      web:justify-start web:items-start
      tablet:justify-center tablet:items-center  "
      >
        {/* Buttons */}
        <div
          className="flex items-start gap-[324px] w-full h-[138px]  bg-neutral-50 border-t border-gray-200 
      web:w-[50%] web:justify-start web:ml-[0px]
      tablet:justify-center "
        >
          <Btn
            variant="transparent"
            className="text-center text-gray-900 text-base font-semibold px-4 py-3 w-32 h-[43px] justify-center items-center inline-flex border-b-2 border-neutral-50"
            text="Prev"
            onClick={prevStep}
          />
          <Btn
            variant="fullWidth"
            className="text-center text-gray-900 text-base font-semibold px-4 py-3 w-32 h-[43px] justify-center items-center inline-flex border-b-2 border-yellow-500"
            text="Next"
            onClick={handleFinish}
          />
        </div>

        {/* Files for tablet, phone */}
        <div
          className="hidden flex-col items-center justify-center w-full max-w-[581px] h-full
        web:hidden 
        tablet:flex "
        >
          {/* IMAGES */}
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-row flex-wrap justify-between">
              {inputs.addFields.length > 0 &&
                inputs.addFields.map((file, index) => (
                  <div key={index} className="flex flex-row  mb-4">
                    {isImage(file) && (
                      <Image
                        src={URL.createObjectURL(file)}
                        width={150}
                        height={100}
                        background-position="center"
                        object-fit="cover"
                        background-size="contain"
                        alt="Uploaded Media"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* VIDEO  */}
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex  flex-row flex-wrap justify-between">
              {inputs.addFields.length > 0 &&
                inputs.addFields.map((file, index) => (
                  <div key={index} className="flex flex-row  mb-4">
                    {isVideo(file) && (
                      <ReactPlayer
                        url={URL.createObjectURL(file)}
                        width={150}
                        height={100}
                        background-position="center"
                        object-fit="cover"
                        background-size="contain"
                        controls={true}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
