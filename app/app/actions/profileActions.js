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

function structureError(error) {
  const type = error.path;
  const message = error.errors[0];
  return { error: { [type]: message }, type: "Validation Error" };
}
export async function updatePasswordAsync(currentPassword, newPassword) {
  try {
    // Handle password update
    await axiosSSR.post(
      "/auth/change-password",
      {
        currentPassword,
        newPassword,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    return "Password updated successfully";
  } catch (error) {
    if (error.path) {
      return structureError(error);
    }
    console.error("Failed to update password:", error);
  }
}
export async function createPasswordAsync(password, repeatPassword) {
  try {
    // Handle password creation
    await axiosSSR.post(
      "/auth/create-password",
      {
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    return "Password created successfully";
  } catch (error) {
    if (error.path) {
      return structureError(error);
    }
    console.error("Failed to create password:", error);
  }
}
