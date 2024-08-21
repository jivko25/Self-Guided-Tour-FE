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
              // locationCity: loc.locationCity,
              // locationDescription: loc.locationDescription,
              // addFields: loc.addFields,
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
