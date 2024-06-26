"use server";

import { axiosAuth } from "@/api/axios";
import { deleteCookie, getCookie, setCookie } from "../utils/authHelper";
import { redirect } from "next/navigation";

// Register user
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
    });
    data = true;
  } catch (err) {
    error = err.response?.data?.Message;
  }
  return { data, error };
}

// Login user
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
    });
    data = true;
  } catch (err) {
    error = err.response?.data?.Message;
  }
  console.log(error);
  return { data, error };
}
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
    });
    respData.data = true;
  } catch (err) {
    respData.error = err.response?.data?.Message;
  }
  return respData;
}

// Logout user
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
    error = err.response?.data?.Message;
  }
  return { error };
}

// Returns the session state
export async function getUserSession() {
  const session = getCookie("session");
  return session ? true : false;
}
