import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";


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
    <div className="flex flex-col gap-4">
      <h2 className="text-center">Step 3</h2>
      <label htmlFor="name" className="text-left">
        Input 3
      </label>
      <input
        className="border-2 p-1"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <div className="flex gap-4">
        <Btn variant="filled" text="Previous" onClick={prevStep} />
        <Btn variant="filled" text="Finish" onClick={handleFinish} />
      </div>
    </div>
  );
};

export default Step3;
