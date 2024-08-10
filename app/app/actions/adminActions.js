import { axiosAdmin } from "@/api/axios.js";

/**
 * Fetches all tours with the given status.
 * @param {number} status - The status to filter the tours by.
 * @returns {object} - An object containing the data or error.
 */
export async function getAllToursByStatus(status) {
  let data = null;
  let error = null;

  try {
    const response = await axiosAdmin.get("/all-tours", {
      params: { status },
    });
    data = response.data;
  } catch (err) {
    error = err.response?.data?.message || "An error occurred";
  }

  return { data, error };
}

/**
 * Approves a tour by ID.
 * @param {string} tourId - The ID of the tour to approve.
 * @returns {object} - The response data or error message.
 */
export async function approveTourById(tourId) {
  let data = null;
  let error = null;

  try {
    const response = await axiosAdmin.patch(`/approve-tour/${tourId}`);
    data = response.data;
  } catch (err) {
    error = err.response?.data?.message || "An error occurred";
  }

  return { data, error };
}

/**
 * Declines a tour by ID.
 * @param {string} tourId - The ID of the tour to decline.
 * @returns {object} - The response data or error message.
 */
export async function declineTourById(tourId) {
  let data = null;
  let error = null;

  try {
    const response = await axiosAdmin.patch(`/reject-tour/${tourId}`);
    data = response.data;
  } catch (err) {
    error = err.response?.data?.message || "An error occurred";
  }

  return { data, error };
}
