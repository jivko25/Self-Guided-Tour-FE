"use server";
import { axiosSSR } from "@/api/axios";
import * as Yup from "yup";
import {
  emailValidationScheme,
  passwordValidationScheme,
} from "../utils/validationSchemes";
export async function updateProfileAsync(prevState, formData) {
  const rawFormData = Object.fromEntries(formData);

  try {
    // Validate email
    await emailValidationScheme.validate({
      email: rawFormData.email,
    });
    // Handle password change

    // Handle profile update
    await axiosSSR.patch("/profile", formData);

    return "Profile updated successfully";
  } catch (error) {
    if (error.path) {
      console.log("error", error);
      return structureError(error);
    }
    console.error("Failed to update profile:", error);
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
