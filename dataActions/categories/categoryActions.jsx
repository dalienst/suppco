"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getInventoryCategories } from "@/services/categories";
import { getCategories, getCategoryDetail } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export function useFetchCategoryByInventory(inventory) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["categoryByInventory", inventory],
    queryFn: () => getInventoryCategories(inventory, axios),
  });
}

export function useFetchCategory() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories(axios),
  });
}

export function useFetchCategoryDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["category", slug],
    queryFn: () => getCategoryDetail(axios, slug),
    enabled: !!slug,
  });
}
