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
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between h-full min-h-[691px] w-full">
        <div className="flex-1 flex flex-col items-center justify-center w-full h-full min-h-[691px] overflow-y-auto ">
          <div className="flex items-center justify-between w-full max-w-[581px] pt-[50px] pb-[30px]">
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
          </div>

          {/* Inputs */}
          <div className="flex items-center flex-col mb-[30px] w-full max-w-[581px]">
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
              className="bg-neutral-50 rounded border border-stone-300 w-full max-w-[581px] h-[60px]"
              required
            />
          </div>

          <div className="flex items-center flex-col w-full mb-[20px] max-w-[581px]">
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
              className="bg-neutral-50 rounded border border-stone-300 w-full max-w-[582px] h-[200px]"
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

          {/* IMAGES */}
          <div className="flex items-center justify-center w-full max-w-[581px] h-full">
            <div className="flex flex-row flex-wrap justify-around">
              {inputs.addFields.length > 0 &&
                inputs.addFields.map((file, index) => (
                  <div key={index} className="flex flex-row  mb-4">
                    {isImage(file) && (
                      <Image
                        src={URL.createObjectURL(file)}
                        width={150}
                        height={150}
                        alt="Uploaded Media"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* VIDEO  */}
          <div className="flex flex-row items-center justify-center w-full h-full flex-wrap p-[10px]">
            {inputs.addFields.length > 0 &&
              inputs.addFields.map((file, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center mb-4"
                >
                  {isVideo(file) && (
                    <ReactPlayer
                      url={URL.createObjectURL(file)}
                      width={150}
                      height={150}
                      controls={true}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* MAP */}
        <div className="flex flex-2 w-full max-w-[1128px] rounded-[5px] h-[691px]">
          <GoogleMapsComponent handleMapClick={handleMapClick} />
        </div>
      </div>
      <div className="w-full h-[138px] bg-neutral-50 border-t border-gray-200 justify-start items-center flex gap-[324px]">
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
    </div>
  );
};

export default Step3;
