"use server";
import { cookies } from "next/headers";

export async function getCookieSSR(name) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get(name)?.value;
  return await parseJwt(cookieValue);
}

export async function parseJwt(token) {
  if (!token) {
    return null;
  }

  try {
    // Split the token into its three parts (header, payload, signature)
    const base64Url = token.split(".")[1];

    // Replace base64url characters with base64 characters
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    // Decode the Base64 string and convert it to a JSON object
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to parse JWT:", error);
    return null;
  }
}
