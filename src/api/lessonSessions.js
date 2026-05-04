import api from "./axios";

export const getLessonSessions = () => api.get("/LessonSessions");

export const getLessonSessionByLessonId = (lessonId, lessonSessionId) =>
  api.get(`/LessonSessions/${lessonId}`, {
    params: { lessonSessionId },
  });

export const createLessonSession = (payload) =>
  api.post("/LessonSessions", payload);

export const updateLessonSessionByLessonId = (
  lessonId,
  payload,
  lessonSessionId
) =>
  api.put(`/LessonSessions/${lessonId}`, payload, {
    params: { lessonSessionId },
  });

export const deleteLessonSession = (lessonSessionId) =>
  api.delete(`/LessonSessions/${lessonSessionId}`);
