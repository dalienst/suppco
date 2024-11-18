"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getSubCategorySiteEquipmentList } from '@/services/siteEquipment';
import { useQuery } from '@tanstack/react-query'


function useFetchSubCategorySiteEquipment(query) {
    const axios = useAxiosAuth()
    return useQuery({
        queryKey: ["subCategorySiteEquipment", query],
        queryFn: () => getSubCategorySiteEquipmentList(axios, query),
    })
}

export default useFetchSubCategorySiteEquipment