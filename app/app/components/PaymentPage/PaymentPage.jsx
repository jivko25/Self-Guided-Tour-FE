"use client";
import PaymentForm from "./PaymentPageComponents/PaymentForm";
import TourCard from "./PaymentPageComponents/TourCard";
import { useRouter, useSearchParams } from "next/navigation";
import CloseButton from "../Buttons/CloseButton";
import { usePaymentContext } from "@/app/context/paymentContext";
import StripePaymentForm from "./PaymentPageComponents/Form/StripePaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
function PaymentPage() {
  const { getStripeClientSecretAsync, dispatch } = usePaymentContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleClose() {
    router.back();
  }

  useEffect(
    () => async () => {
      const response = await getStripeClientSecretAsync(3);
      console.log(response);
    },
    []
  );
  return (
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
        <TourCard />
      </div>
    </section>
  );
}

export default PaymentPage;
