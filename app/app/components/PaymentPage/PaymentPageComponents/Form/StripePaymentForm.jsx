import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { axios } from "@/api/axios";
import PaymentForm from "../PaymentForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");
  useEffect(() => {
    async () => {
      const response = await axios.get(
        "/payment/5b54ef7b-ba2d-4630-a267-e7310c379c3d", // hardocded userId
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            tourId: 3, // hardcoded tourId
          },
        }
      );
      const clientSecret = response?.data?.results?.clientSecret;
      console.log(clientSecret);
      setClientSecret(clientSecret);
    };
  }, []);
  //   React.useEffect(() => {
  //     // Create PaymentIntent as soon as the page loads
  //     fetch("/api/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setClientSecret(data.clientSecret));
  //   }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      }
    </div>
  );
}
