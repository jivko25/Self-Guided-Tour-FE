"use client";
import { axios } from "@/api/axios";
const { createContext, useContext, useReducer } = require("react");
const ProfileContext = createContext();

const initialState = {
  profile: null,
  isLoading: false,
  message: "",
  user: null,
  profilePictureSrc: null,
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
  }
}
export const ProfileProvider = ({ children }) => {
  const [{ profile, isLoading, message, user, profilePictureSrc }, dispatch] =
    useReducer(reducer, initialState);
  async function getProfile() {
    try {
      dispatch({ type: "loading" });
      const response = await axios.get("/profile");
      dispatch({ type: "profile/loading", payload: response.data });
      console.log("response", response.data);
    } catch (error) {
      console.error("Failed to get profile:", error);
    }
  }
  return (
    <ProfileContext.Provider
      value={{
        getProfile,
        profile,
        isLoading,
        message,
        user,
        dispatch,
        profilePictureSrc,
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
