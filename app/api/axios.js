import Axios from "axios";
//TODO: Get the base url from the env
const BASE_URL = "http://localhost:3000";

export const axios = Axios.create({
  baseURL: BASE_URL,
});

//TODO: Add axios private instance for the auth
