"use client";
import Btn from "../Buttons/Btn.jsx";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import * as React from "react";
import InputField from "../InputField";
import Link from "next/link";
import { useFormState } from "react-dom";
import { registerUser } from "@/app/actions/authActions";
import { useAuth } from "@/app/context/authContext";
import { redirect } from "next/navigation";

const RegisterForm = ({ userId }) => {
  const [formState, registerAction] = useFormState(registerUser, "");
  const { setSession } = useAuth();
  const [errors, setErrors] = React.useState({
    Email: "",
    Name: "",
    Password: "",
    RepeatPassword: "",
  });

  const [formData, setFormData] = React.useState({
    creator: userId,
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });

  React.useEffect(() => {
    if (formState.data === true) {
      setSession(formState.data);
      redirect("/");
    } else if (formState.error) {
      if (typeof formState.error === "object") {
        setErrors({ ...formState.error.errors });
      } else {
        setErrors((state) => ({ ...state, Email: formState.error }));
      }
    }
  }, [formState, setSession, setErrors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const password = watch("password", "");

  return (
    <div className="flex flex-col items-center justify-evenly h-4/5 ">
      <h2 className="text-center text-white text-[32px] font-medium font-['Inter']">
        Create Account
      </h2>
      <form
        className="flex items-center p-4  justify-evenly flex-col  h-[826px] bg-neutral-50"
        action={registerAction}
      >
        <div className="text-center">
          <span className="text-neutral-700 text-base font-normal font-['Inter Tight']">
            Already have an account?
          </span>
          <span className="text-white text-base font-normal font-['Inter Tight']"></span>
          <span className="text-blue-500 text-base font-normal font-['Inter Tight']">
            <Link href="/sign-in">Sign In</Link>
          </span>
        </div>

        <ButtonGoogle />

        <div className="flex justify-center items-center w-full mb-1 gap-2">
          <div className="w-full h-[0px] border border-zinc-400"></div>

          <div className="text-center text-zinc-400 text-[10px] font-medium font-['Inter Tight']">
            OR
          </div>
          <div className="w-full h-[0px] border border-zinc-400"></div>
        </div>

        <InputField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.Email}
          hint="Please enter a valid email address"
          required
        />

        <InputField
          id="name"
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.Name}
          hint="Please enter a valid name"
          required
        />

        <InputField
          id="password"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.Password}
          hint="Your password must be at least 6 characters long"
          required
        />

        <InputField
          id="repeatPassword"
          label="Repeat Password"
          name="repeatPassword"
          type="password"
          value={formData.repeatPassword}
          onChange={handleInputChange}
          error={errors.RepeatPassword}
          hint="Your repeat password must be at least 6 characters long"
          required
        />

        <Btn type="submit" variant="filled" text="Sign Up" fullWidth />
      </form>
    </div>
  );
};

export default RegisterForm;
