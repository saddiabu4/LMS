import api from "./axios";

export const getPayments = () => api.get("/Payments");
export const getPaymentById = (paymentId) => api.get(`/Payments/${paymentId}`);

export const createPayment = (payload) => api.post("/Payments", payload);
export const updatePayment = (paymentId, payload) =>
  api.put(`/Payments/${paymentId}`, payload);
export const deletePayment = (paymentId) => api.delete(`/Payments/${paymentId}`);
