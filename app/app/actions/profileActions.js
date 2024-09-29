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
    if (
      rawFormData.currentPassword ||
      rawFormData.password ||
      rawFormData.repeatPassword
    ) {
      // Handle password create/change
      if (rawFormData.hasPassowrd) {
        // Change password
        const passwordChangeRequest = {
          currentPassword: rawFormData.currentPassword,
          password: rawFormData.password,
        };
        await axiosSSR.post("/auth/change-password", passwordChangeRequest);
      } else {
        // Create password
        const passwordCreateRequest = {
          password: rawFormData.password,
        };
        await axiosSSR.post(
          "/auth/create-password",
          rawFormData.repeatPassword
        );
      }
    }
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
