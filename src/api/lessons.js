import api from "./axios";

export const getLessons = () => api.get("/Lessons");
export const getLessonById = (lessonId) => api.get(`/Lessons/${lessonId}`);

export const createLesson = (payload) => api.post("/Lessons", payload);
export const createManyLessons = (payload) => api.post("/Lessons/some", payload);
export const updateLesson = (lessonId, payload) =>
  api.put(`/Lessons/${lessonId}`, payload);
export const deleteLesson = (lessonId) => api.delete(`/Lessons/${lessonId}`);
