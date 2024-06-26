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
    <section className="w-[100%] flex flex-col align-center gap-4 text-[14px]
                        mb-[120px] font-medium text-[#081120] text-[14px] 
                        px-[8px] phone:px-[16px] tablet:mt-[115px] tablet:px-[125px] web:mt-0 web:px-[36px]">
      <header className="flex flex-row justify-between web:mr-[900px]">
        <h2 className="text-[20px]">Plan your route</h2>
        <span className="mt-[7px] tablet:mt-0 text-[#E8B600]">Step 2 of 4</span>
      </header>
      <p className="max-w-[296px] tablet:max-w-[425px] font-normal web:mr-[900px]">Choose locations on the map, give them titles and add them to your tour.</p>
      <section className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[20px] web:w-[834px] web:h-[582px] web:absolute web:right-[40px]">
        <GoogleMapsComponent />
      </section>
      <section className="flex flex-wrap gap-6 web:max-w-[582px] web:mr-[900px]">
        <InputField classes="w-[100%] shrink-0" label='Location' name='location'/>
        <InputField classes="w-[100%] tablet:flex-1 shrink" label='Latitude' name='latitude'/>
        <InputField classes="w-[100%] tablet:flex-1 shrink" label='Longitude'name='longitude'/>
      </section>
        <Btn className="text-[16px] border-b-2 border-b-[#E8B600] w-[177px] h-[43px] self-center web:mr-[900px]" variant="transparent" text="Next" onClick={nextStep} />
    </section>
  );
};

export default Step2;
