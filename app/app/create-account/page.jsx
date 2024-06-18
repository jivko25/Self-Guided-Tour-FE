import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function SignUp() {
  return (
    <section className="flex items-center justify-center flex-col h-screen w-full bg-custom-image bg-cover bg-opacity-10 bg-top">
      <RegisterForm />
    </section>
  );
}