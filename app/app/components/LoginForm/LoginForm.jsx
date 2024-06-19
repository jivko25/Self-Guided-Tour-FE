"use client";
import Btn from "../Buttons/Btn.jsx";
import ButtonGoogle from "../Buttons/ButtonGoogle";

import * as React from "react";
import InputField from "../InputField";

import { loginUser } from "@/app/actions/authActions";
import { useFormState } from "react-dom";
import { useAuth } from "@/app/context/authContext";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [formState, loginAction] = useFormState(loginUser, "");
  const { session, setSession } = useAuth();

  React.useEffect(() => {
    if (formState.data === true) {
      setSession(formState.data);
      redirect("/");
    } else if (formState.error) {
      setError(formState.error);
    }
  }, [formState, setSession, setError]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="flex flex-col items-center  justify-evenly h-4/5 ">
      <h2 className="text-center  text-white text-[32px] font-medium font-['Inter']">
        Sign In
      </h2>
      <form
        className="flex items-center px-4 justify-evenly flex-col  h-[602px] bg-neutral-50"
        action={loginAction}
      >
        <ButtonGoogle />

        <div className="flex justify-center items-center w-full  mb-1 gap-2">
          <div className="w-full h-[0px] border border-zinc-400"></div>

          <div className="text-center text-zinc-400 text-[10px]  font-medium font-['Inter Tight']">
            OR
          </div>
          <div className="w-full h-[0px] border border-zinc-400"></div>
        </div>

        <InputField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={error}
          hint="Please enter a valid email address"
          required
        />

        <InputField
          id="password"
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={error}
          hint="Your password must be at least 6 characters long"
          required
        />

        <Btn type="submit" variant="filled" text="Sign In" fullWidth />
      </form>
      {/* <Button variant="primary-short" text="Button" />
      <Button variant="primary-long" text="Button" />
      <Button variant="secondary" text="Button" />
      <Button variant="secondary-short" text="Button" />
      <Button variant="secondary-outlined" text="Button" />
      <Button variant="secondary-bg-color" text="Button" /> */}
    </div>
  );
};

export default LoginForm;
