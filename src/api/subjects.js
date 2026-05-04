import api from "./axios";

export const getSubjects = (withLevels) =>
  api.get("/Subjects", {
    params: { withLevels },
  });

export const getSubjectById = (subjectId) => api.get(`/Subjects/${subjectId}`);

export const createSubject = (payload) => api.post("/Subjects", payload);
export const updateSubject = (subjectId, payload) =>
  api.put(`/Subjects/${subjectId}`, payload);
export const deleteSubject = (subjectId) => api.delete(`/Subjects/${subjectId}`);
