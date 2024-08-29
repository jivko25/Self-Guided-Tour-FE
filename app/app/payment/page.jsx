"use client";
import { Suspense } from "react";
import PaymentPage from "../components/PaymentPage/PaymentPage";
import { PaymentProvider } from "../context/paymentContext";
import PaymentPageSkeleton from "../components/PaymentPage/PaymentPageComponents/Skeletons/PaymentPageSkeleton";

function Payment() {
  return (
    <Suspense fallback={<PaymentPageSkeleton />}>
      <PaymentProvider>
        <PaymentPage />
      </PaymentProvider>
    </Suspense>
  );
}

export default Payment;
