import Image from "next/image";
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import InputField from "../../InputField/InputField.jsx";
import Btn from "../../Buttons/Btn.jsx";
import Modal from "../../Notification/Modal.jsx";
import StepHeader from "./Step1Components/StepHeader.jsx";

import Walk from "../../../public/svg/walk.svg";
import Bicycle from "../../../public/svg/bicycle.svg";
import Car from "../../../public/svg/car-sport.svg";
import Up from "../../../public/svg/chevron-up.svg";
import Down from "../../../public/svg/icon-eye.svg";
import { usePopup } from "@/app/context/popupContext.jsx";

const Step1 = () => {
  const popup = usePopup();
  const liClassName =
    "flex flex-row justify-center items-center grip-2 w-[278px] h-[56px] border-[0.5px] border-[#CECECE] cursor-pointer";
  const {
    formData,
    updateStep1Data,
    nextStep,
    openModal,
    onCloseModal,
    updateSavedFormData,
  } = useCreateTour();
  const [input, setInput] = useState("");
  const [onType, setOntype] = useState(false);
  const [errors, setErrors] = useState({
    Tour: "",
    Destination: "",
    Duration: "",
    TourType: "",
    Price: "",
  });

  useEffect(() => {
    setInput(formData.step1Data);
  }, [formData]);

  const updateTourType = (value) => {
    const state = { ...input };
    state.tourType = value;
    setInput(() => state);
    setOntype(false);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    const state = { ...input };
    state[name] = newValue;
    setInput(() => state);
  };

  const onNextStep = () => {
    if (
      input.tour === "" ||
      input.destination === "" ||
      input.duration === "" ||
      input.price === "" ||
      input.tourType === ""
    ) {
      popup({
        type: "ERROR",
        message: "Please fill in all required fields before proceeding.",
      });
    } else {
      updateStep1Data(input);
      nextStep();
    }
  };

  return (
    <>
      <div
        className={`flex justify-center flex-col gap-5  ${
          onType ? "h-[1050px] mt-40 mb-6" : "h-[756px]"
        } h-[753px]`}
      >
        <StepHeader
          title={"Let's get started!"}
          description={"Subheading, short description, ect."}
          step={1}
        />

        <InputField
          id="tour"
          label="Tour Title"
          name="tour"
          type="text"
          placeholder="e.g. History town center, Secret Sights, etc."
          value={input.tour}
          onChange={handleChange}
          error={errors.Tour}
          // hint="Please enter a valid Tour Title"
          content={"Help for Tour Title"}
          required={true}
          createTour={true}
        />

        <InputField
          id="destination"
          label="Destination"
          name="destination"
          type="text"
          placeholder="City or region name"
          value={input.destination}
          onChange={handleChange}
          error={errors.Destination}
          // hint="Please enter a valid Destination"
          content={"Help for Destination"}
          required={true}
          createTour={true}
        />
        <InputField
          id="duration"
          label="Duration"
          name="duration"
          type="number"
          placeholder="Estimate duration of your tour"
          value={input.duration}
          onChange={handleChange}
          error={errors.Duration}
          // hint="Please enter a valid Duration"
          content={"Help for Duration"}
          required={true}
          createTour={true}
        />
        <div className={`relative w-fit`}>
          <InputField
            id="tourType"
            label="Tour Type"
            name="tourType"
            type="text"
            placeholder="Tell us if this is a walking tour or with transports"
            value={input.tourType}
            // onChange={handleChange}
            error={errors.TourType}
            // hint="Please enter a valid Duration"
            content={"Help for Tour Type"}
            required={true}
            createTour={true}
            readOnly={true}
            onClick={() => setOntype(true)}
          />
          <p
            className="absolute top-10 right-0 cursor-pointer"
            onClick={() => setOntype(true)}
          >
            <Image src={Down} alt="Down icon" />
          </p>
        </div>

        {onType && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col w-full   justify-center items-center border-[0.5px] border-[#CECECE] mt-[-1rem] gap-5 relative"
          >
            <p
              className="absolute top-[14px] right-1 cursor-pointer"
              onClick={() => setOntype(false)}
            >
              <Image src={Up} width={24} height={24} alt="Up icon" />
            </p>
            <h2 className="pt-[20px]">Tour Type</h2>
            <ul className="flex flex-col justify-center gap-4  pb-[20px]">
              <li
                className={liClassName}
                onClick={() => updateTourType("Walking")}
              >
                <p className="mr-[0.5rem]">
                  <Image src={Walk} alt="Walk icon" />
                </p>
                Walking
              </li>
              <li
                className={liClassName}
                onClick={() => updateTourType("Bicycling")}
              >
                <p className="mr-[0.5rem]">
                  <Image src={Bicycle} alt="Bicycle icon" />
                </p>
                Bicycling
              </li>
              <li
                className={liClassName}
                onClick={() => updateTourType("Driving")}
              >
                <p className="mr-[0.5rem]">
                  <Image src={Car} alt="Car icon" />
                </p>
                Driving
              </li>
            </ul>
          </motion.div>
        )}

        <InputField
          id="price"
          label="Price"
          name="price"
          type="number"
          placeholder="USD"
          value={input.price}
          onChange={handleChange}
          error={errors.Price}
          // hint="Please enter a valid Price"
          content={"Help for price"}
          required={true}
          createTour={true}
        />

        <Btn
          className=" w-[177] h-[43px] text-[16px]  border-b-2 border-b-[#E8B600]   self-center  tablet:self-end web:w-[100px]   "
          variant="transparent"
          text="Next"
          onClick={onNextStep}
        />

        <AnimatePresence>
          {openModal && (
            <Modal
              title={"You have saved draft"}
              description={
                "Do you want to load the previously saved draft? Note that you will need to add the files again."
              }
              open={openModal}
              onConfirm={updateSavedFormData}
              onClose={onCloseModal}
            ></Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Step1;
