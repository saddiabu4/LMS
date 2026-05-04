import api from "@/api/axios";

export async function loginUser({ email, password }) {
  return await api.post("/auth/login", { email, password });
}

export default { loginUser };
