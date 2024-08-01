"use client";
import Btn from "../../Buttons/Btn";
import InputField from "../../InputField/InputField";
import PaymentIcons from "./Form/PaymentIcons";

function PaymentForm() {
  return (
    <form
      className="flex flex-col
            web:w-[733px]
            tablet:w-[583px]"
    >
      <InputField
        classes="mb-[64px]"
        label="Your Name"
        placeholder="Your Name"
      />
      <InputField
        classes="mb-[120px]"
        label="Email Address"
        placeholder="Email"
      />
      <div className="mb-[121px]">
        <InputField label="Card Number" placeholder="Card Number" />
        <PaymentIcons className="mt-4 ml-9" />
      </div>
      <div className="flex gap-6 mb-[64px]">
        <InputField
          label="Expiration Date"
          placeholder="MM/YY"
          classes="w-[354px]"
        />
        <InputField label="CVV" placeholder="CVV" classes="w-[354px]" />
      </div>
      <div className="flex gap-6">
        <Btn
          variant="transparent-outlined"
          className="web:w-[279px]"
          text="Cancel"
        />
        <Btn
          variant="filled"
          text="Confirm and Pay"
          className="web:w-[430px]"
        />
      </div>
    </form>
  );
}

export default PaymentForm;
