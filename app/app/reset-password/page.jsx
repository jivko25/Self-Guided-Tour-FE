"use client";
import ResetPasswordForm from "../components/reset-password-form/ResetPasswordForm.jsx";
import ResetPasswordSuccess from "../components/reset-password-success/ResetPasswordSuccess.jsx";

import { useFormik } from "formik";
import { passwordSchema } from "@/utils/authValidationSchemas.js";
import { axios } from "@/api/axios.js";
import { extractAuthCodeFromUrl } from "@/utils/extractAuthCodeFromUrl.js";
import { useState } from "react";

export default function ForgotPassword() {
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: passwordSchema,
    onSubmit: async (values) => {
      try {
        const newPassword = values.password;
        const authCode = extractAuthCodeFromUrl();

        await axios.post("/auth/resetpassword", {
          authCode,
          newPassword,
        });
        setPasswordResetSuccess(true);
      } catch (error) {
        // TODO : Add proper error handling
        console.error("Failed to reset password:", error);
      }
    },
  });

  return (
    <main>
      {passwordResetSuccess ? (
        <ResetPasswordSuccess />
      ) : (
        <ResetPasswordForm formik={formik} />
      )}
    </main>
  );
}
