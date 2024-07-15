export function getCookie(name) {
  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(name + "="))
    ?.split("=")[1];
  return parseJwt(cookieValue);
}

export function parseJwt(token) {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}
