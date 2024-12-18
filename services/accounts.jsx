import { urlActions } from "@/tools/api";

export const verifyAccount = async (uidb, token) => {
  await urlActions?.patch(`/api/accounts/verify-email/${uidb}/${token}/`);
};

export const getUser = async (userId, axios) => {
  const response = await urlActions?.get(
    `/api/accounts/profile/${userId}/`,
    axios
  );
  return response.data;
};

export const updateUser = async (userId, formData, axios) => {
  await urlActions?.patch(`/api/accounts/profile/${userId}/`, formData, axios);
};
