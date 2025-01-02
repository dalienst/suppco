'use client';

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { updateShellEquipmentDetail } from "@/services/shell";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateShellEquipmentDetail(slug, formData) {
    const axios = useAxiosAuth();
    return useMutation((slug, formData) => updateShellEquipmentDetail(slug, formData, axios));
  }