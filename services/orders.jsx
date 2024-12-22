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
    return await urlMultipartActions?.get("/api/orders/supplier/", axios);
}

export const getSupplierOrderDetail = async (slug, axios) => {
    return await urlMultipartActions?.get(`/api/orders/supplier/${slug}/`, axios);
}

export const supplierUpdateOrder = async (slug, values, axios) => {
    await urlMultipartActions?.patch(`/api/orders/supplier/${slug}/`, values, axios);
}