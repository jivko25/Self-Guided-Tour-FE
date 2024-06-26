import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";
import InputField from "../InputField.jsx";

const Step3 = () => {
  const { formData, updateFormData, prevStep } = useCreateTour();
  const [input, setInput] = useState(formData.step3Data);

  useEffect(() => {
    setInput(formData.step3Data);
  }, [formData.step3Data]);

  const handleFinish = () => {
    alert("Form submitted!");
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    updateFormData({ step3Data: newValue });
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex h-full max-h-[691px]">
        <div className="flex items-center justify-between flex-col w-full max-w-[582px]  mx-[50px] my-[10px]">

          <div className="flex items-center justify-between w-full mb-[20px]">

            <div>
              <h4 className="text-gray-900 text-2xl font-medium leading-9">
                Describe and shoot
              </h4>
              <div className="w-[425px] text-blue-950 text-base font-normal leading-normal">
                Add description, images and audio files for the location so that
                the other travelers know more about it.
              </div>
            </div>
            <div className="text-yellow-500 text-base font-medium leading-normal">
              Step 3 of 4
            </div>
          </div>

        {/* Inputs */}
          <div className="flex flex-col mb-[20px] w-full">
            <label
              className="text-gray-900 text-base font-medium leading-normal"
              htmlFor=""
            >
              Location Name
            </label>
            <input
              id="locationName"
              name="locationName"
              type="text"
              value={input}
              onChange={handleChange}
              className="bg-neutral-50 rounded border border-stone-300 w-full max-w-[581px] h-[60px] "
              required
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label
              className="text-gray-900 text-base font-medium leading-normal"
              htmlFor=""
            >
              Location Description
            </label>
            <textarea
              id="locationDescription"
              name="locationDescription"
              type="text"
              value={input}
              onChange={handleChange}
              className="bg-neutral-50 rounded border border-stone-300 w-full max-w-[582px] h-[200px] "
              required
            />
          </div>
          <div className="flex flex-col mb-[20px] w-full">
            <label
              className="text-gray-900 text-base font-medium leading-normal"
              htmlFor=""
            >
              Add Fields
            </label>
            <div className="flex justify-between w-full max-w-[581px] h-[60px]  bg-neutral-50 rounded-[5px] border border-stone-300 ">
              <input
                id="addFields"
                name="addFields"
                type="textarea"
                placeholder="You can upload images and audio files up to 5MB"
                value={input}
                onChange={handleChange}
                className={`web:w-full web:max-w-[453px] web:h-full pl-[10px]`}
                required
              />

              <button
                className="flex bg-blue-950 text-white border-2 rounded-md border-transparent justify-center items-center text-center font-medium web:h-full web:w-full web:max-w-[128px]"
                type="submit"
              >
                Upload
              </button>
            </div>
          </div>

        </div>
        
        {/* MAP */}
        <div className="w-full max-w-[1128px]  rounded-[5px]">
          <img
            className="w-full h-full rounded-[5px]"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="w-full h-[138px] bg-neutral-50 border-t border-gray-200 justify-start items-center flex gap-[324px]">
        <Btn
          variant="transparent"
          className="text-center text-gray-900 text-base font-semibold px-4 py-3 w-32 h-[43px] justify-center items-center inline-flex  border-b-2 border-neutral-50"
          text="Prev"
          onClick={prevStep}
        />
        <Btn
          variant="fullWidth"
          className="text-center text-gray-900 text-base font-semibold px-4 py-3 w-32 h-[43px] justify-center items-center inline-flex  border-b-2 border-yellow-500"
          text="Next"
          onClick={handleFinish}
        />
      </div>
    </div>
  );
};

export default Step3;
