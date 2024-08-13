"use client";
import TourCard from "./PaymentPageComponents/TourCard";
import { appearance } from "./PaymentPageComponents/Form/Styles/StripeFormStyles";
import CloseButton from "../Buttons/CloseButton";
import { usePaymentContext } from "@/app/context/paymentContext";
import CheckoutForm from "./PaymentPageComponents/Form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function PaymentPage() {
  const {
    getStripeClientSecretAsync,
    handleClose,
    dispatch,
    clientSecret,
    getTourId,
  } = usePaymentContext();
  const tourId = getTourId();
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(
    () => async () => {
      const response = await getStripeClientSecretAsync(tourId);
      console.log(response);
    },
    []
  );
  if (!clientSecret) {
    return;
  }
  return (
    <Elements options={options} stripe={stripePromise}>
      <section
        className="m-[215px] text-[#081120]
      web:mt-16  web:mb-[136px]
      tablet:mt-[125px]
      phone:mt-[92px]
      "
      >
        <div className="flex justify-between web:mb-[92px] tablet:mb-16 phone:mb-16">
          <h1 className="web:text-[39px] tablet:text-[31px] phone:text-[25px]">
            Payment Information
          </h1>
          <CloseButton onClick={handleClose} />
        </div>
        <div className="flex  gap-16  justify-center">
          {/* <PaymentForm onClose={handleClose} /> */}
          <CheckoutForm />
          <TourCard />
        </div>
      </section>
    </Elements>
  );
}

export default PaymentPage;
