import { createContext, useContext, useReducer } from "react";
import { axios } from "@/api/axios";
import { useSearchParams } from "next/navigation";

const PaymentContext = createContext();
const initialState = {
  cardHolderName: "",
  email: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  country: "",
  tour: null,
  isLoading: false,
  clientSecret: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cardNumber":
      return { ...state, cardNumber: action.payload };
    case "cardHolderName":
      return { ...state, cardHolderName: action.payload };
    case "expiryDate":
      return { ...state, expiryDate: action.payload };
    case "cvc":
      return { ...state, cvc: action.payload };
    case "tour/loaded":
      return { ...state, tour: action.payload, isLoading: false };
    case "country":
      return { ...state, country: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "clientSecret/loaded":
      return { ...state, clientSecret: action.payload, isLoading: false };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const PaymentProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const [
    {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvc,
      tour,
      isLoading,
      country,
      email,
      clientSecret,
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
      alert("Error getting tour data", error);
    }
  }
  async function getStripeClientSecretAsync(id) {
    if (!id) return;
    try {
      dispatch({ type: "loading" });
      const response = await axios.post(`/payment/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { clientSecret } = response?.data?.result;
      dispatch({ type: "clientSecret/loaded", payload: clientSecret });
      return clientSecret;
    } catch (error) {
      console.log(error);
      alert("Error getting stripe client secret", error);
    }
  }
  function getTourId() {
    return searchParams.get("tourId");
  }
  return (
    <PaymentContext.Provider
      value={{
        dispatch,
        cardNumber,
        cardHolderName,
        expiryDate,
        cvc,
        tour,
        getTourData,
        isLoading,
        country,
        email,
        getStripeClientSecretAsync,
        clientSecret,
        getTourId,
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
