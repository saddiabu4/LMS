import api from "./axios";

export const getUsers = (role) =>
  api.get("/Users", {
    params: { role },
  });

export const createUser = (payload) => api.post("/Users", payload);
export const getUserById = (userId) => api.get(`/Users/${userId}`);
