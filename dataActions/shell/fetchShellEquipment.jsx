'use client';

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getShellEquipment } from "@/services/shell";
import { useQuery } from "@tanstack/react-query";

export default function useFetchShellEquipmentDetail(slug) {
    const axios = useAxiosAuth();
    return useQuery({
      queryKey: ["shellEquipmentDetails", slug],
      queryFn: () => getShellEquipment(slug, axios),
      enabled: !!slug,
    });
  }