'use client';

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getShellEquipmentDetail } from "@/services/shell";
import { useQuery } from "@tanstack/react-query";

export default function useFetchShellEquipmentDetail(slug) {
    const axios = useAxiosAuth();
    return useQuery({
      queryKey: ["shellEquipmentDetails", slug],
      queryFn: () => getShellEquipmentDetail(slug, axios),
      enabled: !!slug,
    });
  }