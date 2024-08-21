import { createContext, useContext, useReducer } from "react";
import { axios } from "@/api/axios";
import { useSearchParams, useRouter } from "next/navigation";

const PaymentContext = createContext();
const initialState = {
  tour: null,
  isLoading: false,
  clientSecret: "",
  paymentIntentId: "",
  isStripeLoading: false,
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "stripe/loading":
      return { ...state, isStripeLoading: true };
    case "tour/loaded":
      return { ...state, tour: action.payload, isLoading: false };
    case "paymentIntent/loaded":
      return {
        ...state,
        clientSecret: action.payload?.clientSecret,
        paymentIntentId: action.payload?.paymentIntentId,
        isLoading: false,
      };
    case "loaded":
      return { ...state, isLoading: false };
    case "stripe/loaded":
      return { ...state, isStripeLoading: false };
    case "message":
      return { ...state, message: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const PaymentProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [
    {
      tour,
      isLoading,
      clientSecret,
      isStripeLoading,
      message,
      paymentIntentId,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  async function getTourData(id) {
    try {
      dispatch({ type: "loading" });
      const response = await axios.get("/tour/" + id);
      const tourResponse = response?.data?.result;
      dispatch({ type: "tour/loaded", payload: tourResponse });
      return tourResponse;
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error("Unauthorized, please login");
      }
      alert("Error getting tour data", error);
    }
  }
  // Creates Payment Intent
  async function getPaymentIntent(id) {
    if (!id) return;
    try {
      dispatch({ type: "loading" });
      const response = await axios.post(`/payment/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { clientSecret, paymentIntentId } = response?.data?.result;
      dispatch({
        type: "paymentIntent/loaded",
        payload: { clientSecret, paymentIntentId },
      });
      return clientSecret;
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error("Unauthorized, please login");
      }
      console.log(error);
      alert("Error getting stripe client secret", error);
    }
  }
  function getTourId() {
    return searchParams.get("tourId");
  }
  async function addFreeTourToUser(tourId) {
    try {
      dispatch({ type: "loading" });
      const response = await axios.post(
        `/payment/free/${tourId}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "loaded" });
      return response;
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error("Unauthorized, please login");
      }
      console.log(error);
      alert("Error adding free tour to user", error);
    }
  }
  function handleClose() {
    router.back();
  }
  const handleSubmit = async (stripe, elements) => {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    dispatch({ type: "stripe/loading" });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Return URL where the customer should be redirected after the payment is processed.
        return_url:
          process.env.NEXT_PUBLIC_NODE_ENV === "production"
            ? `${
                process.env.NEXT_VERCEL_URL
              }/payment/success?tourId=${getTourId()}`
            : "http://localhost:3000/payment/success?tourId=" + getTourId(),
      },
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        dispatch({ type: "message", payload: error.message });
      } else {
        dispatch({ type: "message", payload: "An unexpected error occurred." });
      }
    }
    dispatch({ type: "stripe/loaded" });
  };

  return (
    <PaymentContext.Provider
      value={{
        dispatch,
        tour,
        getTourData,
        isLoading,
        getPaymentIntent,
        clientSecret,
        getTourId,
        handleClose,
        handleSubmit,
        isStripeLoading,
        message,
        paymentIntentId,
        addFreeTourToUser,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = function () {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
