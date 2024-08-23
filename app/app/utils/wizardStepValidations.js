export const isArrayOfObjFilled = (input) => {
  // Function to check if a single object is fully filled
  const checkObjectFilled = (obj) => {
    // Check for required fields and non-empty values
    if (
      !obj.hasOwnProperty("locationCity") || // Check if locationCity key is missing
      !obj.locationCity || // Check if locationCity is empty or undefined
      !obj.hasOwnProperty("addFields") || // Check if addFields key is missing
      !Array.isArray(obj.addFields) || // Check if addFields is not an array
      obj.addFields.length === 0 // Check if addFields is an empty array
    ) {
      return false;
    }

    // Check that no field is null, undefined, or an empty string
    for (let key in obj) {
      if (
        obj[key] === null ||
        obj[key] === undefined ||
        obj[key] === "" ||
        (Array.isArray(obj[key]) && obj[key].length === 0)
      ) {
        // Skip the locationDescription field from being checked
        if (key === "locationDescription") {
          continue;
        }
        return false;
      }
    }

    return true;
  };

  // If the input is an array, check each object in the array
  if (Array.isArray(input)) {
    return input.length > 0 && input.every(checkObjectFilled);
  }
  // If the input is not an array, handle it as a single object
  return checkObjectFilled(input);
};

export const validateStep = (step, formData, targetStep) => {
  const isObjectFilled = (obj) => {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        return false;
      }
      if (Array.isArray(obj[key]) && obj[key].length === 0) {
        return false;
      }
    }
    return true;
  };

  switch (step) {
    // case 1:
    //   return (
    //     formData.step1Data.tour &&
    //     formData.step1Data.destination &&
    //     formData.step1Data.duration &&
    //     formData.step1Data.tourType &&
    //     formData.step1Data.price
    //   );
    case 2:
      // Only validate the full details if the target step is 4
      if (targetStep === 3) {
        return (
          formData.step2Data.length > 0 &&
          formData.step2Data.every((loc) =>
            isObjectFilled({
              location: loc.location,
              placeId: loc.placeId,
              latitude: loc.latitude,
              longitude: loc.longitude,
              locationCity: loc.locationCity,
              addFields: loc.addFields,
              // locationDescription: loc.locationDescription,
            })
          )
        );
      }
    case 3:
      return formData.step2Data.length > 0;
    case 4:
      return (
        formData.step3Data.locationName &&
        formData.step3Data.locationCity &&
        formData.step3Data.locationDescription &&
        formData.step3Data.addFields.length > 0
      );

    default:
      return true;
  }
};

export const canProceedToStep = (targetStep, formData) => {
  for (let i = 0; i < targetStep; i++) {
    if (!validateStep(i, formData, targetStep) && i !== 3) {
      return false;
    }
  }
  return true;
};
