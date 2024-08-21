"use client";
import TourCard from "./PaymentPageComponents/TourCard";
import { appearance } from "./PaymentPageComponents/Form/Styles/StripeFormStyles";
import CloseButton from "../Buttons/CloseButton";
import { usePaymentContext } from "@/app/context/paymentContext";
import CheckoutForm from "./PaymentPageComponents/Form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function PaymentPage() {
  const {
    getPaymentIntent,
    handleClose,
    clientSecret,
    getTourId,
    getTourData,
    addFreeTourToUser,
  } = usePaymentContext();
  const router = useRouter();
  const tourId = getTourId();
  const options = {
    clientSecret,
    appearance,
  };

  // Check if the tour is free, if so, redirect to success page
  useEffect(
    () => async () => {
      if (!tourId) return;
      const { price } = await getTourData(tourId);
      if (price && price === 0) {
        await addFreeTourToUser(tourId);
        router.push("/payment/success");
      }
    },
    []
  );
  //Create a payment intent, required for stripe
  useEffect(
    () => async () => {
      await getPaymentIntent(tourId);
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
          <CheckoutForm />
          <TourCard />
        </div>
      </section>
    </Elements>
  );
}

export default PaymentPage;