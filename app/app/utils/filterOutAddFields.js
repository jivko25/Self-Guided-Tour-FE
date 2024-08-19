export function filterOutAddFields(data) {
  // Create a deep copy of the data to avoid mutating the original
  const filteredData = JSON.parse(JSON.stringify(data));
  if (filteredData.step2Data.length > 0) {

    // Remove addFields from step2Data
    filteredData.step2Data = filteredData.step2Data.map((item) => {
      const { addFields, ...rest } = item;
      return rest;
    });
  }

  return filteredData;
}
