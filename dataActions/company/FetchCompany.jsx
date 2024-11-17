"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getCompanyDetail } from "@/services/companies";
import { useQuery } from "@tanstack/react-query";

function useFetchCompany(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["company", slug],
    queryFn: () => getCompanyDetail(slug, axios),
    enabled: !!slug, // Only run query if slug is present
  });
}

export default useFetchCompany;
