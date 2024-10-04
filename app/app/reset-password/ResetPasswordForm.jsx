"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation.js";

import { useFormik } from "formik";
import { passwordValidationScheme } from "../utils/validationSchemes.js";
import { changeUserPassword } from "../actions/authActions.js";

import InputField from "../components/InputField/InputField.jsx";
import Btn from "../components/Buttons/Btn.jsx";
import { usePopup } from "../context/popupContext.jsx";

export default function ResetPasswordForm() {
  const router = useRouter();
  const popup = usePopup();
  const searchParams = useSearchParams();
  const [resetToken, setResetToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: passwordValidationScheme,
    onSubmit: async (values) => {
      if (isSubmitting) return; // Prevent further submissions if already submitting
      setIsSubmitting(true); // Set submitting state to true
      const { data, error } = await changeUserPassword(
        resetToken,
        values.password
      );
      if (error) {
        popup({
          type: "ERROR",
          message: error,
        });
        return;
      }
      if (data) {
        popup({
          type: "SUCCESS",
          message: data,
          timeout: null,
        });
        setIsSubmitting(false);
        router.push("/sign-in");
      }
    },
  });

  useEffect(() => {
    const token = searchParams.get("token");

    // if there is no token found redirect the user to 404
    if (!token) {
      router.push("/404");
    }

    // if token is found set it to state
    setResetToken(token);
  }, []);

  // if there is no token don't render the page
  if (!resetToken) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <h2
        className="mb-[40px] text-center text-white font-medium font-['Inter'] 
  web:text-[32px]
  tablet:text-[32px]
  phone:text-[24px]
  smallPhone:text-[24px]
  text-[24px]"
      >
        Forgotten password
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="flex h-[610px] items-center justify-between px-[91px] pt-20  flex-col bg-neutral-50 rounded-[5px]
      web:w-[582px] web:min-h-[602px] 
      tablet:w-[582px] tablet:min-h-[602px] 
      phone:w-[361px] phone:min-h-[441px] 
      smallPhone:w-full smallPhone:min-h-[451px]
      w-full min-h-[451px]"
      >
        <h2 className="w-[260px] text-center text-[#081120] text-xl font-medium font-['Inter'] ">
          Create New Password
        </h2>

        <InputField
          id="password"
          label="New Password"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null
          }
          required
        />

        <InputField
          id="repeatPassword"
          label="Repeat Password"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="repeatPassword"
          type="password"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.repeatPassword && formik.touched.repeatPassword
              ? formik.errors.repeatPassword
              : null
          }
          required
        />

        <div className="flex   text-[16px] justify-center  gap-y-6 space-x-10 px-6 tablet:px-0  h-[108px]">
          <div className="w-[130px]  tablet:w-[180px] h-11">
            <Btn
              onClick={() => router.push("/sign-in")} // Return user to login page
              variant="outlined"
              text="Cancel"
              fullWidth
            />
          </div>
          <div className="w-[130px]  tablet:w-[180px] h-11">
            <Btn type="submit" text="Send" fullWidth />
          </div>
        </div>
      </form>
    </div>
  );
}
