import Axios from "axios";
import https from "https";
//TODO: Get the base url from the env
const BASE_URL = "https://localhost:7038/api";

// to be removed for production
const agent = new https.Agent({
  rejectUnauthorized: false,
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
