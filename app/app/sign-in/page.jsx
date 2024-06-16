import React from "react";
import LoginForm from "../components/loginForm/LoginForm";

export default function SignIn() {
  return (
    <section className="flex items-center justify-center flex-col h-screen w-screen bg-custom-image bg-cover bg-opacity-10 bg-top ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="h-32 w-32 m-auto"
        src="/images/headerImg.jpeg"
        alt="Your Company"
      />
      </div>
      <LoginForm />
    </section>
  );
}
