"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getBrackets } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export function useFetchBrackets() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["brackets"],
    queryFn: () => getBrackets(axios),
  });
}

export function useFetchBracketDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["bracket", slug],
    queryFn: () => getBracketDetail(axios, slug),
    enabled: !!slug,
  });
}
