"use client";
import { createContext, useState, useContext } from "react";
import * as authService from "../services/authService";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { usePersistedState } from "../hooks/usePersistedState";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [auth, setAuth] = usePersistedState("auth", {});
  const [error, setError] = useState(null);
  const [fault, setFault] = useState(null);

  const onLoginSubmit = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      localStorage.setItem("access_token", result.access_token);
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

      const result = await authService.register(
        firstName.values,
        lastName.values,
        values.email,
        values.password
      );
      localStorage.setItem("access_token", result.access_token);
      setAuth(result);
      router.push("/");
    } catch (err) {
      console.error("Registration failed:", err.message);
      setFault("Registration failed. Please try again.");
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("access_token");
    router.push("/");
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
