//tourActions.js
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
    formData.append(`Landmarks[${index}].placeId`, landmark.placeId);

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
    error = err.response?.data;
  }

  return { data, error };
}

/**
 * Updates an existing tour.
 * @param {*} tourId - The ID of the tour to update.
 * @param {*} tourData - The updated tour data.
 * @returns {object} - The response data or error.
 */
export async function updateTour(tourId, tourData) {
  const formData = new FormData();
  formData.append("Title", tourData.title);
  formData.append("Summary", tourData.summary);
  formData.append("Price", tourData.price);
  formData.append("TypeTour", tourData.tourType);
  formData.append("Destination", tourData.destination);
  formData.append("ThumbnailImage", tourData.thumbnailImage);
  formData.append("EstimatedDuration", tourData.estimatedDuration);

  tourData.landmarks.forEach((landmark, index) => {
    formData.append(`Landmarks[${index}].LandmarkId`, landmark.landmarkId);
    formData.append(`Landmarks[${index}].Latitude`, landmark.latitude);
    formData.append(`Landmarks[${index}].Longitude`, landmark.longitude);
    formData.append(`Landmarks[${index}].City`, landmark.city);
    formData.append(`Landmarks[${index}].LocationName`, landmark.locationName);
    formData.append(`Landmarks[${index}].StopOrder`, landmark.stopOrder);
    formData.append(`Landmarks[${index}].Description`, landmark.description);
    formData.append(`Landmarks[${index}].PlaceId`, landmark.placeId);

  // Append resources array within each landmark
  landmark.resources.forEach((resource, resIndex) => {
    // if it's file append it as single File
    if (resource instanceof File) {
      formData.append(
        `Landmarks[${index}].Resources[${resIndex}].ResourceFile`,
        resource
      );
    } else {
      // else it's resource from server with id,type,url , so append them to the formData
      formData.append(
        `Landmarks[${index}].Resources[${resIndex}].ResourceId`,
        resource.id || ""
      );

      formData.append(
        `Landmarks[${index}].Resources[${resIndex}].ResourceType`,
        ""
      ); // Server returns error if i append resourceType

      formData.append(
        `Landmarks[${index}].Resources[${resIndex}].ResourceUrl`,
        resource.url || ""
      );
    }
  });
});

// //For testing purposes - logging formdata entries
// for (let [key, value] of formData.entries()) {
//   console.log(`${key}: ${value}`);
// }

// return { data: null, error: null };

let data = null;
let error = null;

try {
  const response = await axiosTour.put(`/update-tour/${tourId}`, formData);
  data = response.data;
} catch (err) {
  error = err.response?.data;
}

return { data, error };
}

  let data = null;
  let error = null;
  console.log(formData);

  try {
    const response = await axiosTour.put(`/update-tour/${tourId}`, formData);
    data = response.data;
  } catch (err) {
    error = err.response?.data;
  }

  return { data, error };
}

/**
 * @param {string|number} id 
 * @returns {object}
 */
export async function getOne(id) {
  let data = null;
  let error = null;

  try {
    const response = await axiosTour.get(id);
    data = response?.data?.result;
  } catch (err) {
    error = err?.response?.data;
  }

  return {data, error}
}
