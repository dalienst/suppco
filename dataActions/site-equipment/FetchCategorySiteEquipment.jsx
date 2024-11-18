"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { getCategorySiteEquipmentList } from '@/services/siteEquipment';
import { useQuery } from '@tanstack/react-query';

function useFetchCategorySiteEquipment(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["categorySiteEquipment", query],
        queryFn: () => getCategorySiteEquipmentList(axios, query),
    })
}

export default useFetchCategorySiteEquipment