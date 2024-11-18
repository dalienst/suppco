"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getFilteredSiteEquipmentList } from '@/services/siteEquipment'
import { useQuery } from '@tanstack/react-query'

function useFetchFilteredSiteItem(query) {
    const axios = useAxiosAuth()
    return useQuery({
        queryKey: ["site", query],
        queryFn: () => getFilteredSiteEquipmentList(axios, query),
    })
}

export default useFetchFilteredSiteItem