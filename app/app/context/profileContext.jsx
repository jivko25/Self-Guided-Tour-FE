"use client";
import { axios } from "@/api/axios";
const { createContext, useContext, useReducer, useCallback } = require("react");
const ProfileContext = createContext();

const initialState = {
  profile: null,
  isLoading: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    about: "",
    currentPassword: "",
    password: "",
    repeatPassword: "",
  },
  profilePictureSrc: null,
  error: null,
  page: 1,
  pageSize: 10,
  totalPages: 1,
  totalResults: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "profile/loaded":
      return {
        ...state,
        isLoading: false,
        user: { ...state.user, ...action.payload },
        profilePictureSrc: action.payload.profilePictureUrl,
      };
    case "priflePictureSrc":
      return {
        ...state,
        profilePictureSrc: action.payload,
        user: { ...state.user, profilePictureUrl: action.payload },
      };
    case "user/onChange":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case "loading":
      return { ...state, isLoading: true };
    case "loaded":
      return { ...state, isLoading: false };
    case "error":
      return { ...state, error: { ...state.error, ...action.payload } };
    case "clearError":
      return { ...state, error: null };
    case "nextPage":
      if (state.page === state.totalPages) {
        return state;
      }
      return { ...state, page: state.page + 1 };
    case "previousPage":
      if (state.page === 1) {
        return state;
      }
      return { ...state, page: state.page - 1 };
    case "totalPages/totalResults":
      return {
        ...state,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults,
      };
    case "reset": {
      return initialState;
    }
    case "resetPage":
      return { ...state, page: 1, totalPages: 1 };
    case "resetPasswords": {
      return {
        ...state,
        user: {
          ...state.user,
          currentPassword: "",
          password: "",
          repeatPassword: "",
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
export const ProfileProvider = ({ children }) => {
  const [
    {
      profile,
      isLoading,
      user,
      profilePictureSrc,
      error,
      totalPages,
      page,
      pageSize,
      totalResults,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  // Fetch the user profile
  const getProfile = useCallback(async function getProfile() {
    try {
      dispatch({ type: "loading" });
      const response = await axios.get("/profile", {
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      });
      dispatch({ type: "profile/loaded", payload: response.data });
    } catch (error) {
      console.error("Failed to get profile:", error);
    }
  }, []);
  // Fetch tours
  const getToursAsync = useCallback(async function getTours(curretPage) {
    const response = await axios.get(
      `/profile/my-tours?page=${curretPage}&pageSize=${pageSize}`
    );
    const tours = response?.data?.result?.data;
    dispatch({
      type: "totalPages/totalResults",
      payload: {
        totalPages: response?.data?.result?.totalPages,
        totalResults: response?.data?.result?.totalResults,
      },
    });
    return tours;
  }, []);
  // Fetch bought tours
  const getBoughtToursAsync = useCallback(async function getBoughtTours(
    curretPage
  ) {
    const response = await axios.get(
      `/profile/bought-tours?page=${curretPage}&pageSize=${pageSize}`
    );
    const tours = response?.data?.result?.data;
    dispatch({
      type: "totalPages/totalResults",
      payload: {
        totalPages: response?.data?.result?.totalPages,
        totalResults: response?.data?.result?.totalResults,
      },
    });
    return tours;
  },
  []);
  // Fetch transactions
  const getTransactionsAsync = useCallback(async function getTransactions(
    curretPage
  ) {
    const response = await axios.get(
      `/profile/transactions?page=${curretPage}&pageSize=${pageSize}`
    );
    const transactions = response?.data?.result?.data;
    dispatch({
      type: "totalPages/totalResults",
      payload: {
        totalPages: response?.data?.result?.totalPages,
        totalResults: response?.data?.result?.totalResults,
      },
    });
    return transactions;
  },
  []);
  return (
    <ProfileContext.Provider
      value={{
        getProfile,
        profile,
        isLoading,
        user,
        dispatch,
        profilePictureSrc,
        error,
        getToursAsync,
        getBoughtToursAsync,
        getTransactionsAsync,
        totalPages,
        page,
        pageSize,
        totalResults,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
