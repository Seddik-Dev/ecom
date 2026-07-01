import api from "../api/axios";

export const login = async (data) => {
  await api.get("/api/csrf-cookie");

  return api.post("/api/admin/login", {
    email: data.email,
    password: data.password,
    remember: Boolean(data.remember),
  });
};

export const logout = async () => {
  return api.post("/api/admin/logout");
};

export const getAdmin = async () => {
  return api.get("/api/admin/user");
};
