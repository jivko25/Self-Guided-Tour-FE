import { useCreateTour } from "@/app/context/createTourContext.jsx";
import { useState, useCallback, useRef, useEffect } from "react";
import Btn from "../Buttons/Btn.jsx";
import GoogleMaps from "../GoogleMaps/GoogleMaps.js";
import Location from "../Location/Location.js";
import InputField from "../InputField/InputField.jsx";
import { usePopup } from "@/app/context/popupContext.jsx";

const Step2 = () => {
  const {
    formData,
    updateFormData,
    updateStep2Data,
    prevStep,
    nextStep,
    goToStep,
  } = useCreateTour();
  const popup = usePopup();

  const [data, setData] = useState({
    placeId: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const drag = useRef(0);
  const dragOver = useRef(0);
  const [tourType, setTourType] = useState("");
  const [createCoordinates, setCreateCoordinates] = useState([]);
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    setTourType(formData.step1Data.tourType);
  }, [formData.step1Data.tourType]);

  useEffect(() => {
    if (formData.step2Data.length > 0) {
      setCreateCoordinates([...formData.step2Data]);
    }
  }, [formData.step2Data, setCreateCoordinates]);

  const getLocationInfo = useCallback(
    (newData) => {
      if (!newData?.location) {
        return;
      }
      updateStep2Data(newData, formData.step2Data.length); // pass index as length of step2Data
      setCreateCoordinates([...createCoordinates, newData]);
      setData(newData);
    },
    [updateStep2Data, formData.step2Data.length]
  );

  const handleSort = () => {
    const locations = [...formData.step2Data];
    const temp = locations[drag.current];
    locations[drag.current] = locations[dragOver.current];
    locations[dragOver.current] = temp;
    updateFormData({
      step2Data: locations.map((loc, index) => ({
        ...loc,
        stopOrder: index + 1,
      })),
    });
  };

  const handleAddInfo = () => {
    goToStep(2);
  };

  const handleDeleteLocation = (placeId) => {
    const placeIndex = createCoordinates.findIndex(
      (loc) => loc.placeId === placeId
    );

    if (placeIndex !== -1) {
      setCreateCoordinates([
        ...createCoordinates.filter((c) => c.placeId !== placeId),
      ]);
    }
    updateFormData({
      step2Data: formData.step2Data.filter((loc) => loc.placeId !== placeId),
    });
  };

  const handleNextStep = () => {
    if (formData.step2Data.length === 0) {
      popup({
        type: "ERROR",
        message:
          "Please add at least one location to proceed to the next step!",
      });
      return;
    }
    nextStep();
  };

  const handleWarnings = (warn) => {
    if (warn) {
      setWarnings(warn);
    }
  };

  return (
    <>
      <section
        className="w-[100%] flex flex-col mt-[36px] align-center text-[14px]
                        mb-[30px] web:mb-0 font-medium text-[#081120] text-[14px] web:text-[16px]
                        px-[8px] phone:px-[16px] tablet:px-[125px] web:px-[56px] 
                        web:h-[582px] web:w-1/2"
      >
        <div className="overflow-y-scroll web:pr-[40px] web:w-[100%] web:mr-[24px]">
          <header className="flex flex-row justify-between">
            <h2 className="text-[20px] web:text-[24px]">Plan your route</h2>
            <span className="mt-[7px] tablet:mt-0 text-[#E8B600]">
              Step 2 of 4
            </span>
          </header>
          <p className="max-w-[296px] tablet:max-w-[425px] font-normal mt-[12px]">
            Choose locations on the map, give them titles and add them to your
            tour.
          </p>
          <section
            className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[12px] mt-[24px] web:w-1/2 web:h-[582px] 
                          web:absolute web:right-[60px] web:top-0"
          >
            <GoogleMaps
              getLocationInfo={getLocationInfo}
              directions={{ tourType, locations: createCoordinates }}
              handleWarnings={handleWarnings}
            />
          </section>
          <section className="flex flex-wrap gap-6 mt-[36px] tablet:mt-[24px] web:mt-[36px]">
            <InputField
              classes="w-[100%] shrink-0"
              label="Location"
              name="location"
              value={data?.location}
              readOnly={true}
            />
            <InputField
              classes="w-[100%] tablet:flex-1 shrink mt-[24px] tablet:mt-0"
              label="Latitude"
              name="latitude"
              value={data?.latitude}
              readOnly={true}
            />
            <InputField
              classes="w-[100%] tablet:flex-1 shrink mt-[24px] tablet:mt-0"
              label="Longitude"
              name="longitude"
              value={data?.longitude}
              readOnly={true}
            />
          </section>
          {formData.step2Data.length > 0 && (
            <section
              className="flex flex-col text-center text-[14px] tablet:text-left tablet:text-[16px] 
                          text-[#13294B] justify-center mt-[36px] web:mt-[64px] web:mb-[24px]"
            >
              <h2 className="text-[#081120] text-[20px] web:text-[24px]">
                Your locations
              </h2>
              <p className="px-[10px] tablet:px-0 mt-[12px] mb-[24px] font-normal tablet:max-w-[425px]">
                Once you’ve added locations on the map, they’ll appear in the
                list below.
              </p>
              {/* Display warnings to the user */}
              {warnings.length > 0 && (
                <div className="mb-1 text-[14px] text-[#FFA500]">
                  <h2>Warnings:</h2>
                  <ul>
                    {warnings.map((warning, index) => (
                      <li key={index}>
                        {index + 1}. {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* {formData.step2Data.map(({ placeId, location }, index) => (
                <Location
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
                  handleDeleteLocation={handleDeleteLocation}
                />
              ))} */}
              {formData.step2Data.map((location, index) => (
                <Location
                  key={location.placeId}
                  count={index + 1}
                  location={location} // Pass the entire location object
                  draggable
                  onDragStart={() => (drag.current = index)}
                  onDragEnter={() => (dragOver.current = index)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                  handleAddInfo={handleAddInfo}
                  handleDeleteLocation={handleDeleteLocation}
                />
              ))}
            </section>
          )}
        </div>
      </section>
      <div className="tablet:border-t border-[#E7EAED] mb-[130px] tablet:mb-0">
        <div className="web:w-1/2">
          <div
            className="mt-[64px] tablet:mt-[19px] tablet:mb-[38px] web:mt-[36px] web:mb-[59px] flex flex-row justify-center tablet:justify-between tablet:px-[130px] web:px-0
                    web:w-[100%] web:pr-[125px] font-bold"
          >
            <Btn
              className="text-[16px] w-[177px] tablet:w-[128px] h-[43px] self-center"
              variant="transparent"
              text="Prev"
              onClick={prevStep}
            />
            <Btn
              className="smallPhone:w-[177px] text-[16px] border-b-2 border-b-[#E8B600] tablet:w-[128px] h-[43px] self-center"
              variant="transparent"
              text="Next"
              onClick={handleNextStep}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
