import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const urlActions = axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const urlMultipartActions = axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
});

export const signUpSupplier = async (values) => {
  await urlActions?.post("/api/accounts/suppliers/", values);
};

export const signUpContractor = async (values) => {
  await urlActions?.post("/api/accounts/contractors/", values);
};

export const signUpEmployee = async (values) => {
  await urlActions?.post("/api/accounts/employees/", values);
};

export const signUpWorker = async (values) => {
  await urlActions?.post("/api/accounts/workers/", values);
};

export const signUpSubContractor = async (values) => {
  await urlActions?.post("/api/accounts/subcontractors/", values);
};