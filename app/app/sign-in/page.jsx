import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export default function SignIn() {
  return (
    <section className="flex items-center justify-center flex-col h-screen w-full 
    bg-custom-image bg-cover bg-opacity-10  
    web:bg-center ">
      <LoginForm />
    </section>
  );
}
