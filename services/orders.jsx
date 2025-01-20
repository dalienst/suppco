import { urlMultipartActions } from "@/tools/api";

export const createOrder = async (formData, axios) => {
  await urlMultipartActions?.post("/api/orders/", formData, axios);
};

export const getOrders = async (axios) => {
  const orders = await urlMultipartActions?.get("/api/orders/", axios);
  return orders?.data?.results
};

export const getOrder = async (slug, axios) => {
  return await urlMultipartActions?.get(`/api/orders/${slug}/`, axios);
};

export const updateOrder = async (slug, values, axios) => {
  await urlMultipartActions?.patch(`/api/orders/${slug}/`, values, axios);
};

export const getSupplierOrders = async (axios) => {
    return await urlMultipartActions?.get("/api/orders/supplier/list/", axios);
}
export const getBranchOrders = async (axios,id) => {
    const orders = await urlMultipartActions?.get(`/api/orders/supplier/list/?shell_equipment_branch=${id}`, axios);
  return orders?.data?.results
}

export const getSupplierOrderDetail = async (slug, axios) => {
    return await urlMultipartActions?.get(`/api/orders/supplier/detail/${slug}/`, axios);
}

export const supplierUpdateOrder = async (slug, values, axios) => {
    await urlMultipartActions?.patch(`/api/orders/supplier/${slug}/`, values, axios);
}