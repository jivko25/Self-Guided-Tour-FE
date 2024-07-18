export const validateStep = (step, formData) => {
  switch (step) {
    case 0:
      return (
        formData.step1Data.tour &&
        formData.step1Data.destination &&
        formData.step1Data.duration &&
        formData.step1Data.price
      );
    case 1:
      return formData.step2Data.length > 0;
    case 2:
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
    if (!validateStep(i, formData)) {
      return false;
    }
  }
  return true;
};
