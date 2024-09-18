"use client";
import Btn from "../Buttons/Btn.jsx";
import ButtonGoogle from "../Buttons/ButtonGoogle";
import * as React from "react";
import InputField from "../InputField/InputField.jsx";
import Link from "next/link";
import { useFormState } from "react-dom";
import { registerUser } from "@/app/actions/authActions";
import { useAuth } from "@/app/context/authContext";
import { redirect } from "next/navigation";
import { registerValidationScheme } from "@/app/utils/validationSchemes.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  const {
    register,
    formState: { errors: validationErrors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(registerValidationScheme),
    mode: "onChange",
  });
  React.useEffect(() => {
    if (formState.data === true) {
      setSession(formState.data);
      redirect("/");
    } else {
      if (typeof formState.error === "object") {
        setErrors({ ...formState.error });
      } else if (formState.error) {
        setErrors((state) => ({ ...state, Email: formState.error }));
      } else {
        if (formState !== "") {
          console.log(formState);
        }
      }
    }
  }, [formState, setSession, setErrors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    trigger(name);
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <h2
        className="mb-[40px] text-center  text-white font-medium font-['Inter'] 
        web:text-[32px]
        tablet:text-[32px]
        phone:text-[24px]
        smallPhone:text-[24px]
        text-[24px]
    "
      >
        Create Account
      </h2>

      <form
        className="flex items-center justify-evenly flex-col bg-neutral-50 rounded-[5px] 
        web:w-[582px] web:h-[826px] 
        tablet:w-[582px] tablet:h-[798px] 
        phone:w-[361px] phone:min-h-[713px] 
        smallPhone:w-full smallPhone:min-h-[673px]
        w-full min-h-[673px]"
        action={registerAction}
      >
        <div
          className=" text-center 
          web:flex tablet:flex phone:flex smallPhone:hidden hidden"
        >
          <span
            className="text-neutral-700 font-normal font-['Inter Tight'] 
            web:text-base tablet:text-base phone:text-sm text-sm"
          >
            Already have an account?
          </span>
          <span
            className="text-white font-normal font-['Inter Tight']
            web:text-base tablet:text-base phone:text-sm text-sm"
          ></span>
          <span
            className="text-blue-500 font-normal font-['Inter Tight']
            web:text-base tablet:text-base phone:text-sm text-sm"
          >
            <Link href="/sign-in">Sign In</Link>
          </span>
        </div>

        <div
          className="
          web:w-[400px] web:h-[60px] 
          tablet:w-[400px] tablet:h-[60px]
          phone:w-[320px] phone:h-[43px] 
          smallPhone:w-[288px] smallPhone:h-[48px]
          sm:w-72 sm:h-[43px]
          md:w-80 md:h-[43px]
          lg:w-[400px] lg:h-[60px]
          w-[400px] h-[60px]
          "
        >
          <ButtonGoogle />
        </div>

        <div
          className="justify-center items-center gap-2 inline-flex 
          web:w-[400px] web:h-[17px]
          tablet:w-[400px] tablet:h-[17px] 
          w-[400px] h-[17px]"
        >
          <div
            className="border  border-zinc-400
            web:w-[183px] web:h-[1px] 
            tablet:w-[183px] tablet:h-[1px]
            phone:w-[145px] phone:h-[1px]
            smallPhone:w-[126px] smallPhone:h-[1px]
            w-[126px] h-[1px]
            "
          ></div>

          <div
            className="text-center text-zinc-400 font-medium font-['Inter Tight']
            web:text-sm tablet:text-sm phone:text-[10px] smallPhone:text-[10px] text-[10px]
            "
          >
            OR
          </div>

          <div
            className="border  border-zinc-400
            web:w-[183px] web:h-[1px] 
            tablet:w-[183px] tablet:h-[1px]
            phone:w-[145px] phone:h-[1px]
            smallPhone:w-[126px] smallPhone:h-[1px]
            w-[126px] h-[1px]
            "
          ></div>
        </div>

        <InputField
          id="email"
          label="Email Address"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={validationErrors.email?.message || errors.Email}
          {...register("email")}
          // hint="Please enter a valid email address"
          required
        />

        <InputField
          id="name"
          label="Name"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          error={validationErrors.name?.message || errors.Name}
          // hint="Please enter a valid name"
          {...register("name", {})}
          required
        />

        <InputField
          id="password"
          label="Password"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          error={validationErrors.password?.message || errors.Password}
          {...register("password")}
          // hint="Your password must be at least 6 characters long"
          required
        />

        <InputField
          id="repeatPassword"
          label="Repeat Password"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="repeatPassword"
          type="password"
          value={formData.repeatPassword}
          onChange={handleInputChange}
          error={
            validationErrors.repeatPassword?.message || errors.RepeatPassword
          }
          {...register("repeatPassword")}
          // hint="Your repeat password must be at least 6 characters long"
          required
        />

        <div
          className="
          web:w-[400px] web:h-[43px] 
          tablet:w-[400px] tablet:h-[43px]
          phone:w-80 phone:h-[43px] 
          smallPhone:w-72 smallPhone:h-[43px]
          w-72 h-[43px]
          "
        >
          <Btn type="submit" variant="filled" text="Create account" fullWidth />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
