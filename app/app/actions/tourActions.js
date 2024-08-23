import { axiosTour } from "@/api/axios.js";

/**
 * Creates a new tour.
 * @param {*} tourData
 * @returns {object}
 */
export async function createTour(tourData) {
  //TODO: Could create a util function for converting the object to formData

  const formData = new FormData();
  formData.append("Title", tourData.title);
  formData.append("Summary", tourData.summary);
  formData.append("Price", tourData.price);
  formData.append("TypeTour", tourData.tourType);
  formData.append("Destination", tourData.destination);
  formData.append("ThumbnailImage", tourData.thumbnailImage);
  formData.append("EstimatedDuration", tourData.estimatedDuration);

  tourData.landmarks.forEach((landmark, index) => {
    formData.append(`Landmarks[${index}].Latitude`, landmark.latitude);
    formData.append(`Landmarks[${index}].Longitude`, landmark.longitude);
    formData.append(`Landmarks[${index}].City`, landmark.city);
    formData.append(`Landmarks[${index}].LocationName`, landmark.locationName);
    formData.append(`Landmarks[${index}].StopOrder`, landmark.stopOrder);
    formData.append(`Landmarks[${index}].Description`, landmark.description);

    // Append resources array within each landmark
    landmark.resources.forEach((file) => {
      formData.append(`Landmarks[${index}].Resources`, file);
    });
  });

  let data = null;
  let error = null;

  try {
    const response = await axiosTour.post("/create-tour", formData);

    data = response.data;
  } catch (err) {
    error = err.response?.data?.Message;
  }

  return { data, error };
}
