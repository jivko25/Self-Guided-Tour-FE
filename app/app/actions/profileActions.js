import { axiosProfile } from "@/api/axios.js";

/**
 * @returns {array}
 */
export async function getBoughtTours() {
    try {
        const response = await axiosProfile.get("bought-tours");
        return response.data.result;
    } catch (error) {
        if (error.response.data) {
            throw error.response.data;
        } else {
            throw error.response;
        }
    }
}