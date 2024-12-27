import { urlMultipartActions } from "@/tools/api";

export const createShellEquipment = async (formData, axios) => {
  await urlMultipartActions?.post(
    "/api/shellequipment/create/",
    formData,
    axios
  );
};
export const getShellEquipment = async (axios) => {
  // this endpoint fetches all shell belonging to a supplier
  const response = await urlMultipartActions?.get(
    `/api/shellequipment/create/`,
    axios
  );
  return response.data?.results;
};

export const getShellEquipmentDetail = async (slug, axios) => {
  // this fetches a specific shell belonging to a supplier
  // requires auth
  const response = await urlMultipartActions?.get(
    `/api/shellequipment/detail/${slug}/`,
    axios
  );
  return response.data || {};
};

export const getAllShellEquipment = async () => {
  // fetches all shell for the public
  const response = await urlMultipartActions?.get("/api/shellequipment/");
  return response.data?.results;
};

export const getCategoryShellEquipment = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/shellequipment/?layer=${query}`,
    axios
  );
  return response.data?.results;
};

export const getSubCategoryShellEquipment = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/shellequipment/?sublayer=${query}`,
    axios
  );
  return response.data?.results;
};

export const getBracketShellEquipment = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/shellequipment/?bracket=${query}`,
    axios
  );
  return response.data?.results;
};

export const getSubCategoryItemShellEquipmentList = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/shellequipment/?sublayeritem=${query}`,
    axios
  );
  return response.data?.results;
};
