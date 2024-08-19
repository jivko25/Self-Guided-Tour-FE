"use client";
import { Suspense } from "react";
import PaymentPage from "../components/PaymentPage/PaymentPage";
import { PaymentProvider } from "../context/paymentContext";

function Payment() {
  return (
    <Suspense>
      <PaymentProvider>
        <PaymentPage />
      </PaymentProvider>
    </Suspense>
  );
}

export default Payment;
