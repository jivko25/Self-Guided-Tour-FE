import { decodeToken, generateToken } from "./jwt";
import Cookies from "js-cookie";

export function setCookie(name, token) {
  // const jwt = generateToken(data);
  Cookies.set(name, `Bearer ${token}`, {
    secure: process.env.NODE_ENV === "production",
    expires: 60 * 60 * 24 * 30,
    sameSite: "Strict",
    
  });
}

export function getCookie(name) {
  const cookie = Cookies().get(name);
  return cookie ? decodeToken(cookie.value) : null;
}

export function deleteCookie(name) {
  Cookies.set(name, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: -1,
    sameSite: "strict",
    path: "/",
  });
}
