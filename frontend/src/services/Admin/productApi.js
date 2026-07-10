import api from "../../api/axios";

export const getAllProducts = async () => {
  const { data } = await api.get("/admin/products");
  return data;
};

export const getLatestProducts = async () => {
  const { data } = await api.get("/latest-products");
  return data;
};

export const createProduct = async (payload) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("price", payload.price);
  formData.append("category_id", payload.category_id);
  formData.append("stock", payload.stock);
  formData.append("inStock", Number(payload.inStock) === 1 ? "1" : "0");
  formData.append("status", payload.status ?? "active");

  if (payload.image) {
    formData.append("image", payload.image);
  }

  const { data } = await api.post("/admin/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
