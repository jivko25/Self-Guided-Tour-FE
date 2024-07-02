import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import InputField from '../../InputField/InputField.jsx'
import StepHeader from "./Step1Components/StepHeader.jsx";
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
    const name = e.target.name
    const state = { ...input }
    state.step1Data[name] = newValue
    setInput(() => state);
    updateFormData(input);
  };

  return (
      <div className="
    web:w-[582px] web:h-[632px] tablet:h-[657px] 
    flex justify-center flex-col gap-6 ">
        {<StepHeader
        title={"Let's get started!"}
        description={'Subheding, short description, ect.'}
        step={'1'}
        />}
        
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
          required
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
          required
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
          required
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
          required
          createTour={true}
        />

      <Btn className="tablet:hidden text-[16px] border-b-2 border-b-[#E8B600] w-[100px] h-[43px] self-center " variant="transparent" text="Next" onClick={nextStep} /> 

      </div>
  );
};


export default Step1;

