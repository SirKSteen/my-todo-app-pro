import axios from "axios";
import { API_URL } from "../components/API/Constants";

export const USERNAME_SESSION_NAME_ATTRIBUTE = "authenticatedUser";

export function executeJWTAuthenticationService(username, password) {
  return axios.post(`${API_URL}/authenticate`, {
    username,
    password,
  });
}

export function RegisterSuccessfulLoginJWT(username, token) {
  console.log("successful login");
  sessionStorage.setItem(USERNAME_SESSION_NAME_ATTRIBUTE, username);
  setUpAxiosInterceptors(createJWTToken(token));
}

const createJWTToken = (token) => {
  return "Bearer " + token;
};

export function setUpAxiosInterceptors(token) {
  axios.interceptors.request.use((config) => {
    if (isUserLoggedIn()) {
      config.headers.authorization = token;
    }
    return config;
  });
}

export function isUserLoggedIn() {
  let user = sessionStorage.getItem(USERNAME_SESSION_NAME_ATTRIBUTE);
  if (user === null) {
    return false;
  }
  return true;
}

export function getLoggedInUsername() {
  let user = sessionStorage.getItem(USERNAME_SESSION_NAME_ATTRIBUTE);
  if (user === null) {
    return "";
  } else {
    return user;
  }
}

export function LogoutUser() {
  console.log("successful log-out");
  sessionStorage.removeItem(USERNAME_SESSION_NAME_ATTRIBUTE);
}
