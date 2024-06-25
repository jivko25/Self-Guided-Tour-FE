import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent.js";
import InputField from "../InputField.jsx";

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
    <section className="w-[100%] flex flex-col align-center gap-4 px-[16px] text-[14px] 
                        px-[8px] mb-[120px] font-medium text-[#081120] text-[14px]
                        phone:px-[16px]">
      <header className="flex flex-row justify-between">
        <h2 className="text-[20px]">Plan your route</h2>
        <span className="mt-[7px] text-[#E8B600]">Step 2 of 4</span>
      </header>
      <p className="max-w-[296px]">Choose locations on the map, give them titles and add them to your tour.</p>
      <section className="h-[250px] phone:h-[297px] mb-[20px]">
        <GoogleMapsComponent />
      </section>
      <section>
      <InputField classes="mb-[20px] w-[100%]" label={'Location'}/>
      <InputField classes="mb-[20px] w-[100%]" label={'Latitude'}/>
      <InputField classes="mb-[20px] w-[100%]" label={'Longitude'}/>
      </section>
        <Btn className="text-[16px] border-b-2 border-b-[#E8B600] w-[177px] h-[43px] self-center" variant="transparent" text="Next" onClick={nextStep} />
    </section>
  );
};

export default Step2;
