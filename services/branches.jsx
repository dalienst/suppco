import { urlActions, urlMultipartActions } from "@/tools/api";

export const getBranches = async (axios) => {
  const response = await urlMultipartActions?.get("/api/branches/", axios);
  return response.data?.results;
};

export const getBranchDetail = async (slug, axios) => {
  const response = await urlMultipartActions?.get(
    `/api/branches/${slug}/`,
    axios
  );
  return response.data;
};

export const createBranch = async (values, axios) => {
  await urlMultipartActions?.post("/api/branches/", values, axios);
};

export const updateBranch = async (formData, axios, slug) => {
  await urlMultipartActions?.patch(`/api/branches/${slug}/`, formData, axios);
};


export const deleteBranch = async (slug, axios) => {
  await urlMultipartActions?.delete(`/api/branches/${slug}/`, axios);
};
