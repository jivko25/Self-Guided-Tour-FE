import Axios from "axios";
import https from "https";
import { parseJwt, getCookie } from "@/app/utils/cookieUtils.js";

//TODO: Get the base url from the env
const BASE_URL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/api`
    : "https://localhost:7038/api";

// to be removed for production
const agent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false,
});

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

//TODO: Add axios private instance for the auth
export const axiosAuth = Axios.create({
  baseURL: `${BASE_URL}/Auth/`,
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: agent, // to be removed for production
});

export const axiosTour = Axios.create({
  baseURL: `${BASE_URL}/Tour/`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
  httpsAgent: agent, // to be removed for production
});

// Interceptor to add access token to requests
axiosTour.interceptors.request.use(
  (config) => {
    const session = getCookie("session");

    if (session && session.accessToken) {
      config.headers["Authorization"] = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
