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
    await emailValidationScheme.validate({
      email: rawFormData.email,
    });
    if (
      rawFormData.currentPassword ||
      rawFormData.password ||
      rawFormData.repeatPassword
    ) {
      console.log(rawFormData.password);
      console.log(rawFormData.repeatPassword);
      await passwordValidationScheme.validate({
        password: rawFormData.password,
        repeatPassword: rawFormData.repeatPassword,
      });
    }

    const response = await axiosSSR.patch("/profile", formData);
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
