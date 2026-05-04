import api from "./axios";

export const loginUser = (credentials) => {
  return api.post("/login", credentials);
};

export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

export const clearAuthToken = () => {
  localStorage.removeItem("token");
};