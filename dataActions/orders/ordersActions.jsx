"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import {
  getOrder,
  getOrders,
  getSupplierOrderDetail,
  getSupplierOrders,
} from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

export function useFetchOrders() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(axios),
  });
}

export function useFetchOrderDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["order", slug],
    queryFn: () => getOrder(axios, slug),
    enabled: !!slug,
  });
}

export function useFetchSupplierOrders() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["supplierOrders"],
    queryFn: () => getSupplierOrders(axios),
  });
}

export function useFetchSupplierOrderDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["supplierOrder", slug],
    queryFn: () => getSupplierOrderDetail(axios, slug),
    enabled: !!slug,
  });
}
