import api from "../../api/axios";


export const getAllCategories = async () => {
  return api.get("/admin/getAllCategories");
};
