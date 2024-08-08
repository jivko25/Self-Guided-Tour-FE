"use client";
import PaymentPage from "../components/PaymentPage/PaymentPage";
import { PaymentProvider } from "../context/paymentContext";

function Payment() {
  return (
    <PaymentProvider>
      <PaymentPage />;
    </PaymentProvider>
  );
}

export default Payment;
