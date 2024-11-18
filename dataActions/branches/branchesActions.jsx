"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getBranchDetail, getBranches } from "@/services/branches";
import { useQuery } from "@tanstack/react-query";

export function useFetchBranches() {
  const axios = useAxiosAuth();
  return useQuery({
    queryKey: ["branches"],
    queryFn: () => getBranches(axios),
  });
}

export function useFetchBranchDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["branch", slug],
    queryFn: () => getBranchDetail(slug, axios),
    enabled: !!slug,
  });
}
