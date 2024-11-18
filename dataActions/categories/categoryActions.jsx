"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getCategories, getCategoryDetail } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

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
