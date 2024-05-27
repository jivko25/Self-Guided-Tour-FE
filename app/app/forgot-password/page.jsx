"use client";

import ForgotPasswordForm from "../components/forgot-password-form/ForgotPasswordForm.jsx";
import EmailSentSuccess from "../components/email-sent-success/EmailSentSuccess.jsx";

import { emailSchema } from "@/utils/authValidationSchemas.js";
import { axios } from "@/api/axios.js";
import { useFormik } from "formik";
import { useState } from "react";

export default function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: emailSchema,
    onSubmit: async (values) => {
      try {
        const email = values.email;
      
        await axios.post("/auth/forgotpassword", { email });
        setUserEmail(email);
        setEmailSent(true);
      } catch (error) {
        // TODO : Add proper error handling
        console.error("Failed to send reset link:", error);
      }
    },
  });

  return (
    <main>
        {emailSent ? (
          <EmailSentSuccess email={userEmail} />
        ) : (
          <ForgotPasswordForm formik={formik} />
        )}
    </main>
  );
}
