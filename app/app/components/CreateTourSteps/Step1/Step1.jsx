import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import InputField from '../../InputField/InputField.jsx'
import Step1NextBtn from "./Step1Components/Step1NextBtn.jsx";
import SteapHeader from "./Step1Components/SteapHeader.jsx";
import Btn from "../../Buttons/Btn.jsx";


const Step1 = () => {
  const { formData, updateFormData, nextStep } = useCreateTour();
  const [input, setInput] = useState('');
  const [errors, setErrors] = useState({
    Tour: "",
    Destination: "",
    Duration: "",
    Price: "",
  });

  useEffect(() => {
    setInput(() => formData);
  }, [formData.step1Data]);


  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    const state = { ...input };
    state.step1Data[name] = newValue;
    setInput(() => state);
    updateFormData(input);
  };

  return (
    <div className="flex justify-center flex-col gap-5 
     web:w-[582px] web:h-[632px] tablet:h-[657px] ">

      <SteapHeader
        title={"Let's get started!"}
        description={"Subheding, short description, ect."}
        step={1} />

      <InputField
        id="tour"
        label="Tour Title"
        name="tour"
        type="text"
        placeholder='e.g. History town center, Secret Sights, etc.'
        value={formData.step1Data.tour}
        onChange={handleChange}
        error={errors.Tour}
        // hint="Please enter a valid Tour Title"
        content={'Help for Tour Title'}
        required={true}
        createTour={true}
      />

      <InputField
        id="destination"
        label="Destination"
        name="destination"
        type="text"
        placeholder='City or region name'
        value={formData.step1Data.destination}
        onChange={handleChange}
        error={errors.Destination}
        // hint="Please enter a valid Destination"
        content={'Help for Destination'}
        required={true}
        createTour={true}
      />
      <InputField
        id="duration"
        label="Duration"
        name="duration"
        type="text"
        placeholder='Estimate duration of your tour'
        value={formData.step1Data.duration}
        onChange={handleChange}
        error={errors.Duration}
        // hint="Please enter a valid Duration"
        content={'Help for Duration'}
        required={true}
        createTour={true}
      />

      <InputField
        id="price"
        label="Price"
        name="price"
        type="number"
        placeholder='USD'
        value={formData.step1Data.price}
        onChange={handleChange}
        error={errors.Price}
        // hint="Please enter a valid Price"
        content={'Help for Price'}
        required={true}
        createTour={true}
      />

<Btn className="tablet: hidden smallPhone:w-[177px] text-[16px] border-b-2 border-b-[#E8B600]  h-[43px] self-center"
              variant="transparent"
              text="Next"
              onClick={nextStep}
            />
      
    </div>
  );
};


export default Step1;

