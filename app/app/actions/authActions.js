"use server";

import { axiosAuth } from "@/api/axios";
import { deleteCookie, getCookie, setCookie } from "../utils/authHelper";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

/**
 * Hanldes user register
 * @param {*} prev
 * @param {*} formData
 * @returns {object}
 */
export async function registerUser(prev, formData) {
  const fData = Object.fromEntries(formData);
  let data = null;
  let error = null;

  try {
    const response = await axiosAuth.post("register", {
      ...fData,
    });
    setCookie("session", {
      accessToken: response.data.accessToken,
      accessTokenExpiration: response.data.accessTokenExpiration,
      refreshToken: response.data.refreshToken,
      userId: response.data.userId,
    });
    data = true;
  } catch (err) {
    error = err.response?.data?.errors;
  }
  return { data, error };
}

/**
 * Handles user log in
 * @param {*} prev
 * @param {*} formData
 * @returns {object}
 */
export async function loginUser(prev, formData) {
  const fData = Object.fromEntries(formData);
  let data = null;
  let error = null;

  try {
    const response = await axiosAuth.post("login", {
      ...fData,
    });

    setCookie("session", {
      accessToken: response.data.accessToken,
      accessTokenExpiration: response.data.accessTokenExpiration,
      refreshToken: response.data.refreshToken,
      userId: response.data.userId,
    });
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
export async function externalLoginUser(resp) {
  const respData = { data: null, error: null };
  try {
    const { access_token } = resp;
    const response = await axiosAuth.post("google-signin", {
      idToken: access_token,
    });

    setCookie("session", {
      accessToken: response.data.accessToken,
      accessTokenExpiration: response.data.accessTokenExpiration,
      refreshToken: response.data.refreshToken,
      userId: response.data.userId,
    });
    respData.data = true;
  } catch (err) {
    respData.error = err.response?.data?.message;
  }
  return respData;
}

/**
 * Logouts user. Returns object with prop 'error' containing null on success or error message on failure
 * @returns {object}
 */
export async function logoutUser() {
  let data = null;
  let error = null;

  try {
    const session = getCookie("session");

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
export async function getUserSession() {
  const session = getCookie("session");
  return session;
}

/**
 * Validates and requests new access token if needed
 * @returns {undefined | string}
 */
export async function validateToken() {
  const session = getCookie("session");

  if (session === null || Date.now() < session?.accessTokenExpiration) {
    return;
  }

  try {
    const response = await axiosAuth.post("refresh", {
      refreshToken: session.refreshToken,
    });

    setCookie("session", {
      accessToken: response.data.accessToken,
      accessTokenExpiration: response.data.accessTokenExpiration,
      refreshToken: response.data.refreshToken,
      userId: response.data.userId,
    });
  } catch (err) {
    deleteCookie("session");
    return { error: err.response?.data?.message };
  }
}

/**
 * Sends an email with password recovery link
 * @returns {object}
 */

export async function sendPasswordRecoveryLink(email) {
  let data = null;
  let error = null;

  try {
    const response = await axiosAuth.post("/forgot-password", email);

    data = response.data;
  } catch (err) {
    error = err.response?.data;
  }

  return { data, error };
}

export async function changeUserPassword(token, password) {
  let data = null;
  let error = null;
  try {
    const response = await axiosAuth.post("/reset-password", {
      token: token,
      password: password,
    });

    data = response.data;
  } catch (err) {
    error = err.response?.data;
  }
  return { data, error };
}
