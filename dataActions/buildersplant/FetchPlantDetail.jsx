"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { getBuilderplantDetails } from '@/services/builderplants';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchPlantDetail(reference) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["plantDetail", reference],
        queryFn: () => getBuilderplantDetails(reference, axios),
        enabled: !!reference,
    })
}

export default useFetchPlantDetail