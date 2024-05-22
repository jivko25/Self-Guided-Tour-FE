"use client";
import { createContext, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { usePersistedState } from "../hooks/usePersistedState";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [auth, setAuth] = usePersistedState("auth", {});
  const [error, setError] = useState(null);
  const [fault, setFault] = useState(null);

  const initialToken = localStorage.getItem("accessToken");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${initialToken}`,
    },
  });

  const onLoginSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("auth/login/", values);
      setAuth(response.data);
      localStorage.setItem("accessToken", response.data.token);
      router.push("/");
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("Login failed. Please check your credentials.");
    }
  };

  const registerSubmitHandler = async (values) => {
    const emailRegex =
      /^[a-zA-Z0-9]+@.[a-zA-Z0-9]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z]+)*$/;
    if (values.password !== values["confirm-password"]) {
      setFault("Passwords do not match. Please enter matching passwords.");
      return;
    }
    try {
      if (!emailRegex.test(values.email)) {
        setFault("Invalid email format. Please enter a valid email address.");
        return;
      }

      const response = await axiosInstance.post("auth/register/", values);
      localStorage.setItem("accessToken", result.data.token);
      setAuth(response.data);
      router.push("/");
    } catch (err) {
      console.error("Registration failed:", err.message);
      setFault("Registration failed. Please try again.");
    }
  };

  const logoutHandler = () => {
    try {
      localStorage.removeItem("accessToken");
      setAuth({});
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
      router.push("/");
    }
  };

  const getError = () => error;
  const clearError = () => setError(null);

  const getFault = () => fault;
  const clearFault = () => setFault(null);

  const values = {
    registerSubmitHandler,
    onLoginSubmit,
    logoutHandler,
    email: auth.email,
    userId: auth.id,
    isAuthenticated: !!auth.access_token,
    isAdmin: auth.email === "admin@abv.bg",
    axiosInstance: axiosInstance,
    initialToken: initialToken,
    getError,
    clearError,
    getFault,
    clearFault,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
