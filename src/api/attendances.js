import api from "./axios";

export const getAttendances = () => api.get("/Attendances");
export const getAttendanceById = (attendanceId) =>
  api.get(`/Attendances/${attendanceId}`);

export const createAttendance = (payload) => api.post("/Attendances", payload);
export const updateAttendance = (attendanceId, payload) =>
  api.put(`/Attendances/${attendanceId}`, payload);
export const deleteAttendance = (attendanceId) =>
  api.delete(`/Attendances/${attendanceId}`);
