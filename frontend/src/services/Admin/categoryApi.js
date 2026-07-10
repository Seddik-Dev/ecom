import api from "../../api/axios";

export const getPopularCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

export const getAllCategories = async () => {
  const { data } = await api.get("/getAllCategories");
  return data;
};

export const createCategory = async (payload) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("description", payload.description ?? "");
  formData.append("status", payload.status ?? "active");

  if (payload.image) {
    formData.append("image", payload.image);
  }

  const { data } = await api.post("/admin/categories", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
