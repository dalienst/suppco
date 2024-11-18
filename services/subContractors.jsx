import { urlMultipartActions } from "@/tools/api";

export const getSubContractors = async (axios) => {
  const response = await urlMultipartActions?.get(
    "/api/subcontractors/",
    axios
  );

  return response?.data?.results;
};

export const getSubContractorDetail = async (axios, slug) => {
  const response = await urlMultipartActions?.get(
    `/api/subcontractors/${slug}/`,
    axios
  );
  return response?.data;
};
