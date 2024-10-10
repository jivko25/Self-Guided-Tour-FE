import { getCookie } from "@/app/utils/cookieUtils.js";
import { getCookieSSR } from "@/app/utils/cookieUtilsSSR.js";
import { validateToken } from "@/app/actions/authActions";
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
        validateToken(session.accessToken);
        config.headers["Authorization"] = `Bearer ${session.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

/**
 * Interceptor to add server side access token to requests
 * @param {object} axiosInstance
 * @returns {object}
 */
export const setupSessionInterceptorsSSR = (axiosInstance) =>
  axiosInstance.interceptors.request.use(
    async (config) => {
      const session = await getCookieSSR("session");
      if (session && session.accessToken) {
        validateToken(session.accessToken);
        config.headers["Authorization"] = `Bearer ${session.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
