import { urlMultipartActions } from "@/tools/api";

export const getSupplierProducts = async(axios)=>{
    const response = await urlMultipartActions?.get("/api/shellequipment/list/", axios);
      return response?.data?.results;
}