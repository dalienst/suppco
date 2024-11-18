"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getSubCategoryItemDetail } from '@/services/category';
import { useQuery } from '@tanstack/react-query'

function useFetchSubCategoryItemDetail(itemSlug) {
    const axios = useAxiosAuth()
  return useQuery({
    queryKey: ["subCategoryItemDetail", itemSlug],
      queryFn: () => getSubCategoryItemDetail(axios, itemSlug),
    enabled: !!itemSlug,
  })
}

export default useFetchSubCategoryItemDetail