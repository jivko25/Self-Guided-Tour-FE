import { getCookie } from "@/app/utils/cookieUtils.js";

/**
 * Interceptor to add access token to requests
 * @param {object} axiosInstance
 * @returns {object}
 */
//TODO: Maybe add logic to handle refresh token here
export const setupSessionInterceptors = (axiosInstance) =>
  axiosInstance.interceptors.request.use(
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
