import api from "./axios";

export const getCourses = () => api.get("/Courses");
export const getCourseById = (courseId) => api.get(`/Courses/${courseId}`);

export const createCourse = (payload) => api.post("/Courses", payload);
export const updateCourse = (courseId, payload) =>
  api.put(`/Courses/${courseId}`, payload);
export const deleteCourse = (courseId) => api.delete(`/Courses/${courseId}`);
