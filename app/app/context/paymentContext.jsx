import { createContext, useContext, useReducer } from "react";
import { axios } from "@/api/axios";

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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const PaymentProvider = ({ children }) => {
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
