import api from "./axios";

export const getLevels = () => api.get("/Levels");
export const getLevelById = (levelId) => api.get(`/Levels/${levelId}`);

export const createLevel = (payload) => api.post("/Levels", payload);
export const updateLevel = (levelId, payload) =>
  api.put(`/Levels/${levelId}`, payload);
export const deleteLevel = (levelId) => api.delete(`/Levels/${levelId}`);
