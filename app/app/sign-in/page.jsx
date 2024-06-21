import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export default function SignIn() {
  return (
    <section className="flex relative items-center justify-center flex-col  w-full bg-cover min-h-screen">
      <div
        className="absolute left-0 w-full h-full bg-custom-image bg-cover bg-center  z-[-5]
      smallPhone:max-h-[245px] smallPhone:brightness-50 smallPhone:phone:max-h-none smallPhone:top-0 
      phone:max-h-[245px] phone:brightness-50 phone:tablet:max-h-none phone:top-0 
      tablet:brightness-50 tablet:max-h-[554px] tablet:top-0 
      web:w-full web:h-full web:tablet:max-h-none web:brightness-50 web:top-0"
      ></div>
      <div className="w-full absolute   
                      tablet:top-[150px]
                      smallPhone:top-[70px]
                      phone:top-[70px]
                      web:top-[70px]
                      ">
        <LoginForm />
      </div>
    </section>
  );
}
