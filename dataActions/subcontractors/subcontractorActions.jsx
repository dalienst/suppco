"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import {
  getSubContractors,
  getSubContractorDetail,
} from "@/services/subContractors";
import { useQuery } from "@tanstack/react-query";

export function useFetchSubContractors() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["subcontractors"],
    queryFn: () => getSubContractors(axios),
  });
}

export function useFetchSubContractorDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["subcontractor", slug],
    queryFn: () => getSubContractorDetail(axios, slug),
    enabled: !!slug,
  });
}
