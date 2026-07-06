import api from "../api/axios";

export const login = async (data) => {
  await api.get("/csrf-cookie");

  return api.post("/admin/login", {
    email: data.email,
    password: data.password,
    remember: Boolean(data.remember),
  });
};

export const logout = async () => {
  return api.post("/admin/logout");
};

export const getAdmin = async () => {
  return api.get("/admin/user");
};
