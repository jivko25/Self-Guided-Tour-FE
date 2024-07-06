import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import InputField from '../../InputField/InputField.jsx'
import Step1NextBtn from "./Step1Components/Step1NextBtn.jsx";


const Step1 = () => {
  const { formData, updateFormData } = useCreateTour();
  const [input, setInput] = useState('');
  const [errors, setErrors] = useState({
    tour: "",
    destination: "",
    duration: "",
    price: "",
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
   
    m-[-3rem]
     web:w-[582px] web:h-[632px]
        tablet:h-[657px] 
       
    flex justify-center flex-col gap-5 ">



        <div>
          <h2 className="
        web:w-[195px] web:h-[36px] web:text-[24px] 
        tablet:w-[195px] tablet:h-[36px] tablet:text-[24px] 
        phone:w-[162px] phone:h-[30px] phone:text-[20px] 
        font-['Inter'] font-semibold
        leading-9 text-[#081120]"
          >Let's get started!</h2>

          <div className="flex relative">
            <p className="
          web:w-[266px] web:h-[24px] web:text-[16px]
          tablet:w-[266px] tablet:h-[24px] tablet:text-[16px]
          phone:w-[232px] phone:h-[21px] phone:text-[14px]
          text-[#13294B] font-['Inter'] leading-6
         ">Subheding, short description, ect.</p>

            <p className="
          web:inline-flex
          web:w-[82px]
          web:h-[24px]
          web:text-[16px]
          font-['Inter'] font-medium text-[#E8B600]
          justify-end absolute right-[0px]


          ">Step 1 of 4</p>
          </div>
        </div>
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
          error={errors.duration}
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

      </div>
  );
};


export default Step1;

