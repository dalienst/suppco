"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { getFilteredBuilderPlantList } from '@/services/builderplants';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function FetchFilteredPlant(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["filteredPlant", query],
        queryFn: () => getFilteredBuilderPlantList(axios, query),
        enabled: !!query,
    })
}

export default FetchFilteredPlant