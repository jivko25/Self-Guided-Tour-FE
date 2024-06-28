import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect, useCallback } from "react";
import Btn from "../Buttons/Btn.jsx";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent.js";
import InputField from "../InputField.jsx";
import pencil from "../../public/svg/pencil.svg";
import Image from "next/image.js";

const Step2 = () => {
  const { formData, updateStep2Data, nextStep, prevStep } = useCreateTour();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...formData?.step2Data]);
  }, [formData]);

  const handleMapClick = useCallback(
    (newData) => {
      updateStep2Data(newData);
    },
    [updateStep2Data]
  );

  return (
    <section
      className="w-[100%] flex flex-col align-center gap-4 text-[14px]
                        mb-[120px] font-medium text-[#081120] text-[14px] 
                        px-[8px] phone:px-[16px] tablet:mt-[115px] tablet:px-[125px] web:mt-0 web:px-[36px] 
                        web:h-[582px] overflow-y-scroll"
    >
      <header className="flex flex-row justify-between web:mr-[900px]">
        <h2 className="text-[20px]">Plan your route</h2>
        <span className="mt-[7px] tablet:mt-0 text-[#E8B600]">Step 2 of 4</span>
      </header>
      <p className="max-w-[296px] tablet:max-w-[425px] font-normal web:mr-[900px]">
        Choose locations on the map, give them titles and add them to your tour.
      </p>
      <section
        className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[20px] web:w-[834px] web:h-[582px] 
                          web:absolute web:right-[40px]"
      >
        <GoogleMapsComponent handleMapClick={handleMapClick} />
      </section>
      <section className="flex flex-wrap gap-6 web:max-w-[582px] web:mr-[900px] web:mt-[20px]">
        <InputField
          classes="w-[100%] shrink-0"
          label="Location"
          name="location"
          value={data[0]?.location}
        />
        <InputField
          classes="w-[100%] tablet:flex-1 shrink"
          label="Latitude"
          name="latitude"
          value={data[0]?.latitude}
        />
        <InputField
          classes="w-[100%] tablet:flex-1 shrink"
          label="Longitude"
          name="longitude"
          value={data[0]?.longitude}
        />
      </section>
      <section className="flex flex-col text-center text-[#13294B] justify-center web:max-w-[582px] web:mr-[900px]">
        <h2 className="text-[#081120] text-[20px]">Your locations</h2>
        <p className="px-[20px]">Once you’ve added locations on the map, they’ll appear in the list below.</p>
        <div className="mt-[20px] border border-[0.5px] borcer-color-[#CECECE] rounded-md">
          <div className="flex flex-row items-center">
            <div className="bg-[#617086] text-[#FFFFFF] w-[36px] h-[60px] content-center 
                            border border-[0.5px] borcer-color-[#CECECE] rounded-md"><span>1</span></div>
            <p className="text-left pl-[10px] pr-[30px] w-[100%]">Sofia, Bulgaria, National Theater Ivan Vazov</p>
            <Image className="pr-[10px]" src={pencil} width={36} height={36} alt="pencil"/>
          </div>
        </div>
      </section>
      <Btn
        className="text-[16px] border-b-2 border-b-[#E8B600] w-[177px] h-[43px] self-center web:mr-[900px]"
        variant="transparent"
        text="Next"
        onClick={nextStep}
      />
    </section>
  );
};

export default Step2;
