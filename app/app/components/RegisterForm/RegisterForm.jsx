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
    } else {
      if (typeof formState.error === "object") {
        setErrors({ ...formState.error.errors });
      } else if (formState.error){
        setErrors((state) => ({ ...state, Email: formState.error }));
      } else {
        if (formState !== '') {
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
  };

  // const password = watch("password", "");

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full
    tablet:mt-[300px]
    smallPhone:mt-[100px]
    phone:mt-[130px]
    web:mt-[30px]">
      <h2 className="mb-[30px] text-center text-white font-medium font-['Inter']
      web:text-[32px]
      tablet:text-[32px]
      phone:text-[24px]
      smallPhone:text-[24px]
      ">
        Create Account
      </h2>
      <form
        className="flex items-center justify-evenly flex-col bg-neutral-50 rounded-[5px] 
        web:w-[582px] web:h-[826px] 
        tablet:w-[582px] tablet:h-[798px] 
        phone:w-[361px] phone:min-h-[713px] 
        smallPhone:w-full smallPhone:min-h-[673px]"
        action={registerAction}
      >
        <div className=" text-center 
        web:flex tablet:flex phone:flex smallPhone:hidden">
          <span className="text-neutral-700 font-normal font-['Inter Tight'] 
          web:text-base tablet:text-base phone:text-sm ">
            Already have an account?
          </span>
          <span className="text-white font-normal font-['Inter Tight']
          web:text-base tablet:text-base phone:text-sm "></span>
          <span className="text-blue-500 font-normal font-['Inter Tight']
          web:text-base tablet:text-base phone:text-sm ">
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
          "
        >
          <ButtonGoogle />
        </div>

        <div
          className="justify-center items-center gap-2 inline-flex 
          web:w-[400px] web:h-[17px]
          tablet:w-[400px] tablet:h-[17px] "
        >
          <div
            className="border  border-zinc-400
            web:w-[183px] web:h-[1px] 
            tablet:w-[183px] tablet:h-[1px]
            phone:w-[145px] phone:h-[1px]
            smallPhone:w-[126px] smallPhone:h-[1px]
          "
          ></div>

          <div
            className="text-center text-zinc-400 font-medium font-['Inter Tight']
          web:text-sm tablet:text-sm phone:text-[10px] smallPhone:text-[10px]
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
          "
          ></div>
        </div>

        <InputField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.Email}
          // hint="Please enter a valid email address"
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
          // hint="Please enter a valid name"
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
          // hint="Your password must be at least 6 characters long"
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
          // hint="Your repeat password must be at least 6 characters long"
          required
        />

        <div
          className="
        web:w-[400px] web:h-[43px] 
        tablet:w-[400px] tablet:h-[43px]
        phone:w-80 phone:h-[43px] 
        smallPhone:w-72 smallPhone:h-[43px]
        "
        >
          <Btn type="submit" variant="filled" text="Sign In" fullWidth />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
