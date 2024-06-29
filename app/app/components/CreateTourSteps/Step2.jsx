import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useEffect, useCallback } from "react";
import Btn from "../Buttons/Btn.jsx";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent.js";
import LocationComponent from "../LocationComponent/LocationComponent.js";
import InputField from "../InputField/InputField.jsx";

const Step2 = () => {
  const { formData, updateStep2Data, nextStep, prevStep } = useCreateTour();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...formData?.step2Data]);
  }, [formData]);

  const getLocationInfo = useCallback(
    (newData) => {
      updateStep2Data(newData);
    },
    [updateStep2Data]
  );

  return (
    <>
      <section
        className="w-[100%] flex flex-col align-center gap-4 text-[14px]
                        mb-[30px] font-medium text-[#081120] text-[14px] web:text-[16px]
                        px-[8px] phone:px-[16px] tablet:mt-[115px] tablet:px-[125px] web:mt-0 web:px-[60px] 
                        web:h-[582px]"
      >
        <div className=" web:mr-[870px] overflow-y-scroll web:pr-[30px]">
          <header className="flex flex-row justify-between">
            <h2 className="text-[20px] web:text-[24px]">Plan your route</h2>
            <span className="mt-[7px] tablet:mt-0 text-[#E8B600]">
              Step 2 of 4
            </span>
          </header>
          <p className="max-w-[296px] tablet:max-w-[425px] font-normal">
            Choose locations on the map, give them titles and add them to your
            tour.
          </p>
          <section
            className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[20px] web:w-[834px] web:h-[582px] 
                          web:absolute web:right-[60px] web:top-0"
          >
            <GoogleMapsComponent getLocationInfo={getLocationInfo} />
          </section>
          <section className="flex flex-wrap gap-6 web:mt-[20px]">
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
          {formData.step2Data.length > 0 && (
            <section
              className="flex flex-col text-center text-[14px] tablet:text-left tablet:text-[16px] 
                          text-[#13294B] justify-center mt-[20px]"
            >
              <h2 className="text-[#081120] text-[20px] web:text-[24px]">
                Your locations
              </h2>
              <p className="px-[20px] tablet:px-0 mt-[14px] mb-[18px] font-normal tablet:max-w-[425px] tablet:mb-[10px]">
                Once you’ve added locations on the map, they’ll appear in the
                list below.
              </p>
              {formData.step2Data.map(({ location }, index) => (
                <LocationComponent
                  key={index}
                  count={++index}
                  text={location}
                />
              ))}
            </section>
          )}
        </div>
      </section>
      <div className="border-t border-[#E7EAED]">
        <div
          className="my-[50px] flex flex-row justify-center tablet:justify-between tablet:px-[125px] web:px-0
                    web:mr-[960px] font-bold"
        >
          <Btn
            className="text-[16px] w-[128px] h-[43px] self-center hidden tablet:block"
            variant="transparent"
            text="Prev"
            onClick={prevStep}
          />
          <Btn
            className="text-[16px] border-b-2 border-b-[#E8B600] w-[177px] tablet:w-[128px] h-[43px] self-center"
            variant="transparent"
            text="Next"
            onClick={nextStep}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
