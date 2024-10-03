import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";


export default function SignIn() {
  return (
    <section className="flex relative items-center justify-center flex-col  w-full bg-cover min-h-screen">
      <div
        className="absolute top-0 left-0 brightness-75 w-full bg-custom-image bg-cover bg-center z-[-5]
                    h-[245px]
                    phone:h-[245px]
                    tablet:h-[554px]
                    web:h-[760px]"
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
