import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function SignUp() {
  return (
    <section className="flex relative items-center justify-center flex-col w-full bg-cover min-h-screen">
      <div
        className="absolute top-0 left-0 w-full brightness-75 bg-custom-image bg-cover bg-center z-[-5]
                    h-[245px]
                    phone:h-[245px]
                    tablet:h-[554px] 
                    web:h-[940px]"
      ></div>
      <div
        className="w-full min-h-screen pb-16 absolute   
                      tablet:top-[150px]
                      smallPhone:top-[60px]
                      phone:top-[60px]
                      web:top-[70px]
                      "
      >
        <RegisterForm />
      </div>
    </section>
  );
}
