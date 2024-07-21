import Cookies from "js-cookie";

export function setCookie(name, token) {
  Cookies.set(name, token, {
    secure: process.env.NODE_ENV === "production",
    expires: 60 * 60 * 24 * 30,
    sameSite: (process.env.NODE_ENV === "production") ? 'None' : 'Strict',
    
  });
}

export function getCookie(name) {
  const cookie = Cookies.get(name);
  return cookie ? cookie : null;
}

export function deleteCookie(name) {
  Cookies.remove(name, {
    secure: process.env.NODE_ENV === "production",
    expires: -1,
    sameSite: (process.env.NODE_ENV === "production") ? 'None' : 'Strict',
  })
}
