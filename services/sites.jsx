const { urlMultipartActions } = require("@/tools/api");

export const createSite = async (formData, axios) => {
  await urlMultipartActions?.post("/api/sites/", formData, axios);
};

export const getSites = async (axios) => {
  const response = await urlMultipartActions?.get("/api/sites/", axios);

  return response?.data?.results;
};

export const getSiteDetail = async (slug, axios) => {
  const response = await urlMultipartActions?.get(`/api/sites/${slug}/`, axios);

  return response?.data;
};

export const updateSite = async (slug, formData, axios) => {
  await urlMultipartActions?.patch(`/api/sites/${slug}/`, formData, axios);
};

export const deleteSite = async (slug, axios) => {
  await urlMultipartActions?.delete(`/api/sites/${slug}/`, axios);
};
