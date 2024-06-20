import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function SignUp() {
  return (
    <section className="relative flex items-center justify-center flex-col h-screen w-full bg-cover ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-custom-image bg-cover bg-center  

smallPhone:max-h-[245px] smallPhone:brightness-50 smallPhone:phone:max-h-none 
phone:max-h-[245px] phone:brightness-50 phone:tablet:max-h-none 
tablet:brightness-50 tablet:max-h-[554px]  
web:w-full web:h-full web:tablet:max-h-none web:brightness-50"
      ></div>
      <div className="relative w-full">
        <RegisterForm />
      </div>
    </section>
  );
}
