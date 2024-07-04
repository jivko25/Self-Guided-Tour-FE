import Image from "next/image.js";
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect, useRef } from "react";
import FileTray from "../../public/svg/file-tray.svg";
import Visualize from "../../public/svg/image-outline.svg";
import InputField from "../InputField/InputField.jsx";
import Btn from "../Buttons/Btn.jsx";
import { Input } from "postcss";

const Step4 = () => {
  const { formData, updateFormData, nextStep } = useCreateTour();
  const [input, setInput] = useState(formData.step1Data);

  useEffect(() => {
    setInput(formData.step1Data);
  }, [formData.step1Data]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    updateFormData({ step1Data: newValue });
  };

  const imageInputRef = useRef(null);

  const handleImageUpload = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const sectionsData = [
    {
      title: "Tour Title",
      description:
        "Be sure to grab the first attention with top-notch title. Fit your keywords for the tour, location and major attractions in whole 80 characters.",
      value: formData.step1Data.tour,
    },
    {
      title: "Destination",
      description:
        "You have a favorite place in your hometown or you accidentally came across a hidden jem? Share it with others to make it popular!",
      value: formData.step1Data.destination,
    },
    {
      title: "Tour Duration",
      description:
        "Let others know how much time they will need for your tour, so they can prepare and fully enjoy it.",
      value: formData.step1Data.duration
        ? `${formData.step1Data.duration} min`
        : "",
    },
    {
      title: "Price",
      description:
        "The price is up to you - we will charge a small fee for our services and you can enjoy the financial benefits of your walking experience.",
      value: formData.step1Data.price ? `${formData.step1Data.price} USD` : "",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center mx-auto  gap-14 p-4 bg-neutral-50 tablet:w-5/6 tablet:p-8  ">
      <header className="flex justify-between items-start ">
        <h2 className="w-52 text-gray-900 text-xl font-medium leading-[30px] tablet:text-2xl tablet:w-fit">
          Review and publish your tour
        </h2>
        <span className="text-yellow-500 text-sm font-medium leading-[21px] web:text-base">
          Step 4 of 4
        </span>
      </header>
      <p className="w-[269px] text-blue-950 text-sm font-normal  leading-[21px] tablet:w-fit web:w-[350px] web:text-base">
        Make final touches on your tour and publish it for fellow travelers to
        explore.
      </p>
      <section className="flex   justify-between w-full tablet:flex-col tablet:gap-6 web:flex-row web:gap-8 ">
        <div className="h-10 justify-start items-center gap-2 inline-flex web:w-1/2 ">
          <div className="w-10 h-10 p-2 bg-slate-500 rounded-[5px] justify-center items-center inline-flex">
            <Image src={Visualize} width={24} height={24} />
          </div>
          <h2 className="text-blue-950 text-lg  font-medium  leading-[27px] tablet:text-xl">
            Cover Image
          </h2>
        </div>
        <div className="web:w-[90%]">
          <input
            id="imageInput"
            name="imageInput"
            type="file"
            ref={imageInputRef}
            className="hidden"
          />
          <div className="flex items-center  mx-auto w-[83px]   h-10 bg-neutral-50 rounded-[5px] border border-stone-300 tablet:h-[60px] tablet:w-full  ">
            <span className="hidden p-2 text-zinc-500 text-base font-normal  leading-normal tablet:block">
              You can upload image up to 1MB
            </span>
            <label
              htmlFor="imageInput"
              className="ml-auto w-[83px]  cursor-pointer h-full web:w-32"
            >
              <Btn
                id="fileInput"
                fullWidth
                text="Upload"
                onClick={handleImageUpload}
                className="h-full"
              />
            </label>
          </div>
        </div>
      </section>
      <section>
        <header>
          <div className=" h-10 pr-[15px] justify-start items-center gap-2 inline-flex ">
            <div className="w-10 h-10 p-2 bg-slate-500 rounded-[5px] justify-center items-center inline-flex">
              <Image src={FileTray} width={24} height={24} />
            </div>
            <h2 className="text-blue-950 text-lg font-medium  leading-[27px] tablet:text-xl">
              Key Details
            </h2>
          </div>
        </header>
      </section>
      {sectionsData.map((section, i) => (
        <section
          key={i}
          className=" flex flex-col gap-4 web:flex-row web:justify-between web:gap-20"
        >
          <div className="flex flex-col  gap-4 web:w-1/2">
            <h2 className="w-fit text-blue-950 text-base font-normal leading-normal tablet:text-xl">
              {section.title}
              <br />
            </h2>
            <p className="w-fit text-slate-500 text-sm font-normal leading-[21px] tablet:text-base">
              {section.description}
              <br />
            </p>
          </div>
          <InputField classes="w-full mt-2" disabled value={section.value} />
        </section>
      ))}
      <section className="flex flex-col gap-4 web:flex-row web:justify-between web:gap-20">
        <div className="flex flex-col gap-4 web:w-1/2">
          <h2 className="w-fit  text-blue-950 text-base font-normal  leading-normal tablet:text-xl">
            Tour Summary
            <br />
          </h2>
          <p className="w-fit  text-slate-500 text-sm font-normal  leading-[21px] tablet:text-base ">
            Captivate other travelers with stunning summary of this gorgeous
            place and see how many people will enjoy it.
            <br />
          </p>
        </div>
        <textarea
          className=" text-blue-950 text-sm font-normal w-11/12 mx-auto leading-[21px] web:w-full web:mt-10 web:text-base"
          id="summary"
          name="summary"
          rows="6"
          cols="6"
          disabled
        >
          The Ivan Vazov National Theatre is Bulgaria's national theatre, as
          well as the oldest and most authoritative theatre in the country and
          one of the important landmarks of Sofia, the capital of Bulgaria. It
          is located in the center of the city, with the facade facing the City
          Garden.
        </textarea>
      </section>
      <section className="flex flex-col gap-4 tablet:flex-row">
        <div className="tablet:w-[183px] tablet:order-2 web:w-[278px]">
          <Btn fullWidth variant="filled" text="Publish Tour" />
        </div>
        <div className="tablet:w-[183px]">
          <Btn fullWidth variant="outlined" text="Preview" />
        </div>
      </section>
    </div>
  );
};

export default Step4;
