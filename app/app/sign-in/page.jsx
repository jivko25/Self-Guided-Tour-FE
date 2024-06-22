import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export default function SignIn() {
  return (
    <section className="flex relative items-center justify-center flex-col  w-full bg-cover min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-custom-image bg-cover bg-center z-[-5]
      smallPhone:max-h-[245px] smallPhone:brightness-50 smallPhone:phone:max-h-none 
      phone:max-h-[245px] phone:brightness-50 phone:tablet:max-h-none 
      tablet:brightness-50 tablet:max-h-[554px]
      web:w-full web:h-full web:tablet:max-h-none web:brightness-50 "
      ></div>
      <div className="w-full absolute   
                      tablet:top-[150px]
                      smallPhone:top-[60px]
                      phone:top-[60px]
                      web:top-[70px]
                      ">
        <LoginForm />
      </div>
    </section>
  );
}
