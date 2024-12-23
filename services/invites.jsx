import { urlActions } from "@/tools/api";

export const sendInvite = async (values, axios) => {
  await urlActions?.post("/api/invites/", values, axios);
};
