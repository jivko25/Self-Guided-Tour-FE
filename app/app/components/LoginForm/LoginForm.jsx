"use client";
import Btn from "../Buttons/Btn.jsx";
import ButtonGoogle from "../Buttons/ButtonGoogle";

import * as React from "react";
import InputField from "../InputField/InputField.jsx";

import { loginUser } from "@/app/actions/authActions";
import { useFormState } from "react-dom";
import { useAuth } from "@/app/context/authContext";
import { redirect } from "next/navigation";
import Link from "next/link.js";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formState, loginAction] = useFormState(loginUser, "");
  const { session, setSession } = useAuth();

  React.useEffect(() => {
    if (formState.data === true) {
      setSession(formState.data);
      redirect("/");
    } else if (formState.error) {
      setError(formState.error);
      setIsSubmitting(false); 
    } else {
      if (formState !== '') {
        console.log(formState);
      }
    }
  }, [formState, setSession]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a new FormData object
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Call the login action with the created FormData
    await loginAction(formData);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <h2 className="mb-[40px] text-center text-white font-medium 
        web:text-[32px] tablet:text-[32px] phone:text-[24px] smallPhone:text-[24px] text-[24px]">
        Sign In
      </h2>
      <form
        className="flex items-center justify-evenly flex-col bg-neutral-50 rounded-t-[5px]
        web:w-[582px] web:min-h-[602px] tablet:w-[582px] tablet:min-h-[602px] phone:w-[361px] phone:min-h-[441px] smallPhone:w-full smallPhone:min-h-[451px] w-full min-h-[451px]"
        onSubmit={handleSubmit} 
      >
        <div className="web:w-[400px] web:h-[60px] tablet:w-[400px] tablet:h-[60px] phone:w-[320px] phone:h-[43px] smallPhone:w-[288px] smallPhone:h-[48px] w-[288px] h-[48px] sm:w-72 sm:h-[43px] md:w-80 md:h-[43px] lg:w-[400px] lg:h-[60px]">
          <ButtonGoogle disabled={isSubmitting} /> 
        </div>

        <div className="justify-center items-center gap-2 inline-flex web:w-[400px] web:h-[17px] tablet:w-[400px] tablet:h-[17px]">
          <div className="border border-zinc-400 web:w-[183px] web:h-[1px] tablet:w-[183px] tablet:h-[1px] phone:w-[145px] phone:h-[1px] smallPhone:w-[126px] smallPhone:h-[1px] w-[126px] h-[1px]"></div>
          <div className="text-center text-zinc-400 font-medium font-['Inter Tight']
            web:text-sm tablet:text-sm phone:text-[10px] smallPhone:text-[10px] text-[10px]">
            OR
          </div>
          <div className="border border-zinc-400 web:w-[183px] web:h-[1px] tablet:w-[183px] tablet:h-[1px] phone:w-[145px] phone:h-[1px] smallPhone:w-[126px] smallPhone:h-[1px] w-[126px] h-[1px]"></div>
        </div>

        <InputField
          id="email"
          label="Email Address"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={error}
          required
        />

        <div className="relative mb-4 tablet:w-[400px] phone:w-[320px] w-[288px] tablet:mb-0">
          <InputField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={error}
            required
          />

          {/* Forgot Password Link */}

          <Link
            href="/forgot-password"
            className="absolute mt-2  right-0 text-[#4285f4] font-normal text-sm hover:underline"
          >
            Forgotten password?
          </Link>
        </div>

        <div className="web:w-[400px] web:h-[43px] tablet:w-[400px] tablet:h-[43px] phone:w-80 phone:h-[43px] smallPhone:w-72 smallPhone:h-[43px] w-72 h-[43px]">
          <Btn
            type="submit"
            variant="filled"
            text="Sign In"
            fullWidth
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

