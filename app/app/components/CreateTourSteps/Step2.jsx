import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";

const Step2 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useCreateTour();
  const [input, setInput] = useState(formData.step2Data);

  useEffect(() => {
    setInput(formData.step2Data);
  }, [formData.step2Data]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    updateFormData({ step2Data: newValue });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center">Step 2</h2>
      <label htmlFor="name" className="text-left">
        Input 2
      </label>
      <input
        className="border-2 p-1" 
        type="text"
        value={input}
        onChange={handleChange}
      />
      <div className="flex gap-4">
        <Btn variant="filled" text="Previous" onClick={prevStep} />
        <Btn variant="filled" text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default Step2;
