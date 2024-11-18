import { urlActions, urlMultipartActions } from "@/tools/api";


export const getBuilderplants = async (axios) => {
  const response = await urlMultipartActions?.get(
    "/api/builders-plant/list/",
    axios
  );
  return response.data?.results;
};

export const getFilteredBuilderPlantList = async (axios, query) => {
  const response = await urlMultipartActions?.get(
    `/api/builders-plant/list/?type=${query}`,
    axios
  );
  return response.data?.results;
}


export const getBuilderplantDetails = async (reference, axios) => {
  const response = await urlMultipartActions?.get(
    `/api/builders-plant/detail/${reference}/`,
    axios
  );
  return response.data;
};


export const registerBuilderPlants = async (values, axios) => {
  await urlMultipartActions?.post("/api/builders-plant/list/", values, axios);
};

export const createBuilderPlant = async (formData, axios) => {
  await urlMultipartActions?.post("/api/builders-plant/list/", formData, axios);
}


export const updateBuilderPlants = async (formData, reference, axios) => {
  await urlActions?.patch(
    `/api/builders-plant/detail/${reference}/`,
    formData,
    axios
  );
};


export const deleteBuilderPlants = async (reference, axios) => {
  await urlMultipartActions?.delete(`/api/builders-plant/detail/${reference}/`, axios);
};


export const publicBuilderPlants = async () => {
  const response = await urlMultipartActions?.get("/api/builders-plant/");
  return response.data;
};


export const publicBuilderPlantsDetail = async (reference) => {
  const response = await urlMultipartActions?.get(`/api/builders-plant/${reference}/public`);
  return response.data;
};
