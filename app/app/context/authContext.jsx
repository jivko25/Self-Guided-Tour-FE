"use client";
import { createContext, useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    const initialToken = localStorage.getItem("accessToken");
    if (initialToken) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${initialToken}`;
    }
  }, []);

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3000/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const onLoginSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("auth/login/", values);
      setAuth(response.data);
      localStorage.setItem("accessToken", response.data.token);
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("Login failed. Please check your credentials.");
    }
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
    try {
      const response = await axiosInstance.post("auth/register", values);
      localStorage.setItem("accessToken", response.data.token);
      setAuth(response.data);
    } catch (err) {
      console.error("Registration failed:", err.message);
      setFault("Registration failed. Please try again.");
    }
  };

  const logoutHandler = () => {
    try {
      localStorage.removeItem("accessToken");
      setAuth({});
    } catch (error) {
      console.error("Logout failed:", error.message);
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
    isAuthenticated: !!auth.token,
    isAdmin: auth.email === "admin@abv.bg",
    axiosInstance: axiosInstance,
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