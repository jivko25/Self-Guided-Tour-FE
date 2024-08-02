"use client";
import Btn from "../../Buttons/Btn";
import InputField from "../../InputField/InputField";
import PaymentIcons from "./Form/PaymentIcons";

function PaymentForm() {
  return (
    <form
      className="flex flex-col
            web:w-[733px]
            tablet:w-[583px]
            phone:w-[361px]"
    >
      <InputField
        classes="mb-[64px] phone:mb-[61px]"
        label="Your Name"
        placeholder="Your Name"
      />
      <InputField
        classes="web:mb-[120px]
                tablet:mb-[92px]
                phone:mb-[89px]"
        label="Email Address"
        placeholder="Email"
      />
      <div className="mb-[121px] tablet:mb-28 phone:mb-[89px]">
        <InputField label="Card Number" placeholder="Card Number" />
        <PaymentIcons className="mt-4 ml-9" />
      </div>
      <div className="flex gap-6 mb-[64px] phone:mb-[61px]">
        <InputField
          label="Expiration Date"
          placeholder="MM/YY"
          classes="w-[354px]"
        />
        <InputField label="CVC" placeholder="CVc" classes="w-[354px]" />
      </div>
      <InputField label="Country" placeholder="Country" classes="mb-[64px]" />
      <div className="flex flex-col tablet:flex-row gap-6">
        <Btn
          variant="transparent-outlined"
          className=" web:w-[279px]
                    tablet:w-[282px]
                    phone:w-[361px]
                    phone:order-2
                    "
          text="Cancel"
        />
        <Btn
          variant="filled"
          text="Confirm and Pay"
          className="web:w-[430px]
                    tablet:w-[282px] tablet:order-2
                    phone:w-[361px]"
        />
      </div>
    </form>
  );
}

export default PaymentForm;
