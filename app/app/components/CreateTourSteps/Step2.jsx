import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useCallback, useRef } from "react";
import Btn from "../Buttons/Btn.jsx";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent.js";
import LocationComponent from "../LocationComponent/LocationComponent.js";
import InputField from "../InputField/InputField.jsx";

const Step2 = () => {
  const {
    formData,
    updateFormData,
    updateStep2Data,
    nextStep,
    prevStep,
    goToStep,
  } = useCreateTour();

  const [data, setData] = useState({
    placeId: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const drag = useRef(0);
  const dragOver = useRef(0);

  const getLocationInfo = useCallback(
    (newData) => {
      if (!newData?.location) {
        return;
      }
      updateStep2Data(newData);
      setData(newData);
    },
    [updateStep2Data]
  );

  const handleSort = () => {
    const locations = [...formData.step2Data];
    const temp = locations[drag.current];
    locations[drag.current] = locations[dragOver.current];
    locations[dragOver.current] = temp;
    updateFormData({ step2Data: [...locations] });
  };

  const handleAddInfo = () => {
    goToStep(2);
  };

  return (
    <>
      <section
        className="w-[100%] flex flex-col align-center text-[14px]
                        mb-[30px] web:mb-0 font-medium text-[#081120] text-[14px] web:text-[16px]
                        px-[8px] phone:px-[16px] tablet:mt-[115px] tablet:px-[125px] web:mt-0 web:px-[64px] 
                        web:h-[582px] web:w-1/2"
      >
        <div className="overflow-y-scroll web:pr-[40px] we:w-[100%] web:mr-[24px]">
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
            className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[20px] web:w-1/2 web:h-[582px] 
                          web:absolute web:right-[60px] web:top-0"
          >
            <GoogleMapsComponent getLocationInfo={getLocationInfo} />
          </section>
          <section className="flex flex-wrap gap-6 web:mt-[20px]">
            <InputField
              classes="w-[100%] shrink-0"
              label="Location"
              name="location"
              value={data?.location}
            />
            <InputField
              classes="w-[100%] tablet:flex-1 shrink"
              label="Latitude"
              name="latitude"
              value={data?.latitude}
            />
            <InputField
              classes="w-[100%] tablet:flex-1 shrink"
              label="Longitude"
              name="longitude"
              value={data?.longitude}
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
              {formData.step2Data.map(({ placeId, location }, index) => (
                <LocationComponent
                  key={index}
                  count={index + 1}
                  text={location}
                  draggable
                  onDragStart={() => (drag.current = index)}
                  onDragEnter={() => (dragOver.current = index)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                  placeId={placeId}
                  handleAddInfo={handleAddInfo}
                />
              ))}
            </section>
          )}
        </div>
      </section>
      <div className="border-t border-[#E7EAED]">
        <div className="web:w-1/2">
          <div
            className="my-[30px] flex flex-row justify-center tablet:justify-between tablet:px-[125px] web:px-0
                    web:w-[100%] web:pr-[125px] font-bold"
          >
            <Btn
              className="text-[16px] w-[177px] tablet:w-[128px] h-[43px] self-center hidden tablet:block"
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
      </div>
    </>
  );
};

export default Step2;
