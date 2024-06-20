import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function SignUp() {
  return (
    <section className="flex items-center justify-center flex-col h-screen w-full bg-cover ">
      <div
        className="absolute left-0 w-full h-full bg-custom-image bg-cover bg-center  z-[-5]
        smallPhone:max-h-[245px] smallPhone:brightness-50 smallPhone:phone:max-h-none smallPhone:top-0 
        phone:max-h-[245px] phone:brightness-50 phone:tablet:max-h-none phone:top-0 
        tablet:brightness-50 tablet:max-h-[554px] tablet:top-0 
        web:w-full web:h-full web:tablet:max-h-none web:brightness-50 web:top-[116px] "
      ></div>
      <div className="w-full">
        <RegisterForm />
      </div>
    </section>
  );
}
