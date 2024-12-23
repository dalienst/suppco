import { urlMultipartActions } from "@/tools/api";

export const createSiteEquipment = async (formData, axios) => {
  await urlMultipartActions?.post(
    "/api/sitesequipment/create/",
    formData,
    axios
  );
};

export const getAllShellEquipment = async () => {
  const response = await urlMultipartActions?.get("/api/sitesequipment/");
  return response.data?.results;
};

export const getCategorySiteEquipmentList = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/sitesequipment/?layer=${query}`,
    axios
  );
  return response.data?.results;
};

export const getSubCategorySiteEquipmentList = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/sitesequipment/?sublayer=${query}`,
    axios
  );
  return response.data?.results;
};

export const getFilteredSiteEquipmentList = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/sitesequipment/?sublayeritem=${query}`,
    axios
  );
  return response.data?.results;
};

export const getBracketSiteEquipmentList = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/sitesequipment/?bracket=${query}`,
    axios
  );
  return response.data?.results;
};
