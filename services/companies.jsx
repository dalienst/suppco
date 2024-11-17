import { urlActions, urlMultipartActions } from "@/tools/api";

export const getCompanies = async (axios) => {
  // returns a list of all the companies owned by the authenticated user
  const response = await urlMultipartActions?.get(
    "/api/company/companies/",
    axios
  );

  return response.data?.results;
};

export const getCompanyDetail = async (slug, axios) => {
  // fetches details about the specific company related to the slug
  const response = await urlMultipartActions?.get(
    `/api/company/companies/${slug}/`,
    axios
  );

  return response.data;
};

export const createCompany = async (values, axios) => {
  // creates a new company
  await urlMultipartActions?.post("/api/company/companies/", values, axios);
};

export const updateCompany = async (formData, axios, slug) => {
  await urlMultipartActions?.patch(
    `/api/company/companies/${slug}/`,
    formData,
    axios
  );
};

export const deleteCompany = async (slug, axios) => {
  await urlMultipartActions?.delete(`/api/company/companies/${slug}/`, axios);
};

export const publicCompanyList = async () => {
  // returns a list of all companies
  const response = await urlMultipartActions?.get("/api/company/");
  return response.data;
};

export const publicCompanyDetail = async (slug) => {
  // fetches details about the specific company related to the slug
  const response = await urlMultipartActions?.get(
    `/api/company/${slug}/public/`
  );
  return response.data;
};
