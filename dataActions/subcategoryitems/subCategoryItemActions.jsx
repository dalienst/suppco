"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import {
  getSubCategoryItem,
  getSubCategoryItemDetail,
} from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export function useFetchSubCategoryItem() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["subCategoryItem"],
    queryFn: () => getSubCategoryItem(axios),
  });
}

export function useFetchSubCategoryItemDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["subCategoryItemDetail", slug],
    queryFn: () => getSubCategoryItemDetail(axios, slug),
    enabled: !!slug,
  });
}
