"use server";
import { axiosSSR } from "@/api/axios";

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

    return { message: "Password updated successfully", type: "SUCCESS" };
  } catch (error) {
    return { type: "ERROR", message: error?.response?.data?.message };
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

    return { message: "Password created successfully", type: "SUCCESS" };
  } catch (error) {
    return { type: "ERROR", message: error?.response?.data?.message };
  }
}
export async function updateProfileAsync(formData) {
  try {
    // Handle profile update
    await axiosSSR.patch("/profile", formData);

    return { message: "Profile updated successfully", type: "SUCCESS" };
  } catch (error) {
    return { type: "ERROR", message: error?.response?.data?.message };
  }
}
