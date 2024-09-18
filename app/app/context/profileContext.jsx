"use client";
import { axios } from "@/api/axios";
const { createContext, useContext, useReducer, useCallback } = require("react");
const ProfileContext = createContext();

const initialState = {
  profile: null,
  isLoading: false,
  user: null,
  profilePictureSrc: null,
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "profile/loading":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        profilePictureSrc: action.payload.profilePictureUrl,
      };
    case "priflePictureSrc":
      return {
        ...state,
        profilePictureSrc: action.payload,
      };
    case "loading":
      return { ...state, isLoading: true };
    case "loaded":
      return { ...state, isLoading: false };
    case "error":
      return { ...state, error: action.payload };
    case "clearError":
      return { ...state, error: null };
  }
}
export const ProfileProvider = ({ children }) => {
  const [{ profile, isLoading, user, profilePictureSrc, error }, dispatch] =
    useReducer(reducer, initialState);
  // Fetch the user profile
  const getProfile = useCallback(async function getProfile() {
    try {
      dispatch({ type: "loading" });
      const response = await axios.get("/profile");
      dispatch({ type: "profile/loading", payload: response.data });
    } catch (error) {
      console.error("Failed to get profile:", error);
    }
  }, []);
  // Fetch tours
  const getToursAsync = useCallback(async function getTours() {
    const response = await axios.get("/tour");
    const tours = response.data?.result?.tours;
    console.log(tours);
    return tours;
  }, []);
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
