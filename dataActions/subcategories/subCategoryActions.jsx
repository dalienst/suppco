"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";
import { getSubCategory, getSubCategoryDetail } from "@/services/category";

export function useFetchSubCategory() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["subcategories"],
    queryFn: () => getSubCategory(axios),
  });
}

export function useFetchSubCategoryDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["subCategory", slug],
    queryFn: () => getSubCategoryDetail(axios, slug),
    enabled: !!slug,
  });
}
