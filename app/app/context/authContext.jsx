"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { getCookie, setCookie, deleteCookie } from "../utils/authHelper";
import { axiosAuth } from "@/api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(false);

  /**
   * Hanldes user register
   * @param {*} prev
   * @param {*} formData
   * @returns {object}
   */
  async function registerUser(formData) {
    let data = null;
    let error = null;

    try {
      const response = await axiosAuth.post("register", {
        ...formData,
      });
      setCookie("session", JSON.stringify(response.data));
      data = true;
    } catch (err) {
      error = err.response?.data?.errors;
    }
    return { data, error };
  }

  /**
   * Hanles user log in
   * @param {*} prev
   * @param {*} formData
   * @returns {object}
   */
  async function loginUser(formData) {
    let data = null;
    let error = null;

    try {
      const response = await axiosAuth.post("login", {
        ...formData,
      });
      setCookie("session", JSON.stringify(response.data));
      data = true;
    } catch (err) {
      error = err.response?.data?.message;
    }

    return { data, error };
  }

  /**
 * Handles googles log in.
 * @param {*} resp
 * @returns {object}
 */
async function externalLoginUser(resp) {
  const respData = { data: null, error: null };
  try {
    const { access_token } = resp;
    const response = await axiosAuth.post("google-signin", {
      idToken: access_token,
    });

    setCookie("session", JSON.stringify(response.data));
    respData.data = true;
  } catch (err) {
    respData.error = err.response?.data?.message;
  }
  return respData;
}

  /**
   * TODO
   * Logouts user. Returns object with prop 'error' containing null on success or error message on failure
   * @returns {object}
   */
  async function logoutUser() {
    let data = null;
    let error = null;

    try {
      const session = JSON.parse(getCookie("session"));
      const response = await axiosAuth.delete("logout", {
        headers: {
          authorization: `Bearer ${session.accessToken}`,
        },
      });

      if (response.status !== 204) {
        throw response.statusText;
      }

      deleteCookie("session");

      redirect("/");
    } catch (err) {
      error = err.response?.data?.message;
    }
    return { error };
  }

  /**
   * Returns information if the user is logged in or not
   * @returns {boolean}
   */
  async function getUserSession() {
    const session = getCookie("session");
    return session ? true : false;
  }

  /**
   * Validates and requests new access token if needed
   * @returns {undefined | string}
   */
  async function validateToken() {
    const session = JSON.parse(getCookie("session"));
    
    if (session === null || Date.now() < session?.accessTokenExpiration) {
      return;
    }

    try {
      const response = await axiosAuth.post("refresh", {
        refreshToken: session.refreshToken,
      });

      setCookie("session", JSON.stringify(response.data));
    } catch (err) {
      return { error: err.response?.data?.message };
    }
  }

  const values = {
    session,
    setSession,
    registerUser,
    loginUser,
    logoutUser,
    getUserSession,
    validateToken,
    externalLoginUser
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
