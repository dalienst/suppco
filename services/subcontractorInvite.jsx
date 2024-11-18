import { urlActions } from "@/tools/api";

export const sendSubContractorInvite = async (values, axios) => {
  await urlActions?.post("/api/subcontractorinvites/", values, axios);
};
