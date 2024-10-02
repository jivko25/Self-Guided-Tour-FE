"use client";
import Btn from "../components/Buttons/Btn.jsx";
import InputField from "../components/InputField/InputField.jsx";
import { useState } from "react";
import { useRouter } from "next/navigation.js";
import { sendPasswordRecoveryLink } from "../actions/authActions.js";
import { usePopup } from "../context/popupContext.jsx";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const popup = usePopup();

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await sendPasswordRecoveryLink({ email: email });
    if (data) {
      console.log(data);
    }
    if (error) {
      popup({
        type: "ERROR",
        message: error.message,
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <h2
        className="mb-[40px] text-center text-white font-medium font-['Inter'] 
    web:text-[32px]
    tablet:text-[32px]
    phone:text-[24px]
    smallPhone:text-[24px]
    text-[24px]"
      >
        Forgotten password
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex h-[610px] items-center justify-between px-[91px] pt-36  flex-col bg-neutral-50 rounded-[5px]
        web:w-[582px] web:min-h-[602px] 
        tablet:w-[582px] tablet:min-h-[602px] 
        phone:w-[361px] phone:min-h-[441px] 
        smallPhone:w-full smallPhone:min-h-[451px]
        w-full min-h-[451px]"
      >
        <h2 className="w-[260px] text-center text-[#081120] text-lg font-medium font-['Inter'] ">
          We will send you an email for new password shortly
        </h2>
        <InputField
          id="email"
          label="Email Address"
          classes="tablet:w-[400px] phone:w-[320px] w-[288px]"
          name="email"
          type="email"
          onChange={handleEmailChange}
          required
        />

        <div className="flex   text-[16px] justify-center  gap-y-6 space-x-10 px-6 tablet:px-0  h-[108px]">
          <div className="w-[130px]  tablet:w-[180px] h-11">
            <Btn
              onClick={() => router.push("/sign-in")} // Return user to login page
              variant="outlined"
              text="Cancel"
              fullWidth
            />
          </div>
          <div className="w-[130px]  tablet:w-[180px] h-11">
            <Btn text="Send" fullWidth />
          </div>
        </div>
      </form>
    </div>
  );
}
