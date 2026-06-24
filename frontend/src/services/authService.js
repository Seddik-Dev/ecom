import api from "../api/axios";

export const login = async (data) => {
  await api.get("/api/csrf-cookie");

  return api.post("/api/login", data);
};

export const logout = async () => {
  return api.post("/api/logout");
};

export const getUser = async () => {
  return api.get("/api/user");
};
