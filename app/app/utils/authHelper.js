"server-only";

import { cookies } from "next/headers";
import { decodeToken, generateToken } from "./jwt";

export function setCookie(name, data) {
  const jwt = generateToken(data);
  cookies().set(name, jwt, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "Strict",
  });
}

export function getCookie(name) {
  const cookie = cookies().get(name);
  return cookie ? decodeToken(cookie.value) : null;
}

export function deleteCookie(name) {
  cookies().set(name, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: -1,
    sameSite: "strict",
    path: "/",
  });
}
