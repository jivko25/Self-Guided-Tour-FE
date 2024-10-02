import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { usePaymentContext } from "@/app/context/paymentContext";
import Btn from "@/app/components/Buttons/Btn";
const paymentElementOptions = {
  layout: "tabs",
};
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { message, handleClose, handleSubmit, isStripeLoading } =
    usePaymentContext();

  return (
    <form
      id="payment-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(stripe, elements);
      }}
      className="flex flex-col
    web:w-[590px]
    tablet:w-[583px]
    phone:w-[361px]"
    >
      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <div
        className="flex flex-col 
                      tablet:flex-row gap-6 mt-16"
      >
        <Btn
          variant="transparent-outlined"
          className="hover:bg-blue-950 hover:text-white hover:border-blue-800 transition-colors duration-500
                     web:w-[279px]
                    tablet:w-[282px]
                    phone:w-[361px]
                    phone:order-2
                    "
          text="Cancel"
          type="button"
          onClick={handleClose}
        />
        <Btn
          variant="filled"
          text="Confirm and Pay"
          className={`
            ${isStripeLoading ? "animate-pulse" : ""}
            web:w-[430px]
            tablet:w-[282px] tablet:order-2
            phone:w-[361px] `}
        />
      </div>

      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className="text-center mt-4">
          {message}
        </div>
      )}
    </form>
  );
}
