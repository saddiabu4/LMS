import api from "./axios";

export const getGroups = () => api.get("/Groups");
export const getGroupById = (groupId) => api.get(`/Groups/${groupId}`);

export const createGroup = (payload) => api.post("/Groups", payload);
export const updateGroup = (groupId, payload) =>
  api.put(`/Groups/${groupId}`, payload);
export const deleteGroup = (groupId) => api.delete(`/Groups/${groupId}`);
