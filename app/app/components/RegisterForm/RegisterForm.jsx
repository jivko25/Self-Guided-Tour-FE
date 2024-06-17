"use client";
import Button from "../Buttons/Button";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import * as React from "react";
import InputField from "../InputField";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = ({ userId }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const [formData, setFormData] = React.useState({
    creator: userId,
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (data) => {
    if (data.password !== data.repeatPassword) {
      alert("Passwords do not match");
    } else {
      alert("Form submitted successfully");
      // Perform further actions (e.g., send data to the server)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const password = watch("password", "");

  return (
    <div className="flex flex-col items-center justify-evenly h-4/5 ">
      <h2 className="text-center text-white text-[32px] font-medium font-['Inter']">
        Create Account
      </h2>
      <form
        className="flex items-center justify-evenly flex-col w-[582px] h-[826px] bg-neutral-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <span className="text-neutral-700 text-base font-normal font-['Inter Tight']">
            Already have an account?
          </span>
          <span className="text-white text-base font-normal font-['Inter Tight']"></span>
          <span className="text-blue-500 text-base font-normal font-['Inter Tight']">
            <Link href="/signin">Sign In</Link>
          </span>
        </div>

        <ButtonGoogle />

        <div className="flex justify-center items-center w-full gap-2">
          <div className="w-[182px] h-[0px] border border-zinc-400"></div>

          <div className="text-center text-zinc-400 text-sm font-medium font-['Inter Tight']">
            OR
          </div>
          <div className="w-[183px] h-[0px] border border-zinc-400"></div>
        </div>

        <InputField
          id="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
          hint="Please enter a valid email address"
          required
        />

        <InputField
          id="name"
          label="Name"
          placeholder="Enter your name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          {...register("name", { required: "Name is required" })}
          error={errors.name?.message}
          hint="Please enter a valid name"
          required
        />

        <InputField
          id="password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          error={errors.password?.message}
          hint="Your password must be at least 8 characters long"
          required
        />

        <InputField
          id="repeatPassword"
          label="Repeat Password"
          placeholder="Repeat your password"
          name="repeatPassword"
          type="password"
          value={formData.repeatPassword}
          onChange={handleInputChange}
          {...register("repeatPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          error={errors.repeatPassword?.message}
          hint="Your repeat password must be at least 8 characters long"
          required
        />

        <Button variant="primary-long" text="Sign Up" />
      </form>
    </div>
  );
};

export default RegisterForm;
