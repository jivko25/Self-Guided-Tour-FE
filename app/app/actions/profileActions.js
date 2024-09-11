"use server";
import { axiosSSR } from "@/api/axios";

export async function updateProfileAsync(prevState, formData) {
  const rawFormData = Object.fromEntries(formData);
  console.log("rawFormData", formData);

  try {
    const response = await axiosSSR.patch("/profile", formData);
  } catch (error) {
    console.error("Failed to update profile:", error);
  }
}
