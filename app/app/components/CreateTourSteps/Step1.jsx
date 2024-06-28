// import { useCreateTour } from "@/app/context/createTourContext.jsx";
// import { useState, useEffect } from "react";
// import Btn from "../Buttons/Btn.jsx";

// const Step1 = () => {
//   const { formData, updateFormData, nextStep } = useCreateTour();
//   const [input, setInput] = useState(formData.step1Data);

//   useEffect(() => {
//     setInput(formData.step1Data);
//   }, [formData.step1Data]);

//   const handleChange = (e) => {
//     const newValue = e.target.value;
//     setInput(newValue);
//     updateFormData({ step1Data: newValue });
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <h2 className="text-center">Step 1</h2>
//       <label htmlFor="name" className="text-left">Input 1</label>
//       <input className="border-2 p-1" type="text" value={input} onChange={handleChange} />
//       <div className="flex justify-center">
//         <Btn variant="filled" text="Next" onClick={nextStep} />
//       </div>
//     </div>
//   );
// };

// export default Step1;
import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect } from "react";
import InputField from "../InputField.jsx";
import Btn from "../Buttons/Btn.jsx";

const Step1 = () => {
  const { formData, updateFormData, nextStep} = useCreateTour();
  const [input, setInput] = useState('');
  const [errors, setErrors] = useState({
    Tour: "",
    Destination: "",
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

    <div className="flex justify-center flex-col gap-5 ">
      {/* <hr /> */}


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
      <hr />
      <div className="flex justify-end ">
      <Btn className="text-[16px] border-b-2 border-b-[#E8B600] w-[100px] h-[43px] self-center web:mr-[900px]" variant="transparent" text="Next" onClick={nextStep} /> 
      </div>
    </div>
  );
};


export default Step1;

