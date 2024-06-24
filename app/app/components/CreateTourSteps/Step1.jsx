import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";

const Step1 = () => {
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

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center">Step 1</h2>
      <label htmlFor="name" className="text-left">Input 1</label>
      <input className="border-2 p-1" type="text" value={input} onChange={handleChange} />
      <div className="flex justify-center">
        <Btn variant="filled" text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default Step1;
