"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getBracketPlumbingEquipmentList, getCategoryPlumbingEquipmentList, getSubCategoryItemPlumbingEquipmentList, getSubCategoryPlumbingEquipmentList } from '@/services/plumbing'
import { useQuery } from '@tanstack/react-query'

export function useFetchCategoryPlumbing(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["plumbing", query],
        queryFn: () => getCategoryPlumbingEquipmentList(axios, query),
    })
}

export function useFetchSubCategoryPlumbing(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["plumbing", query],
        queryFn: () => getSubCategoryPlumbingEquipmentList(axios, query),
        enabled: !!query,
    })
}

export function useFetchItemPlumbing(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["plumbing", query],
        queryFn: () => getSubCategoryItemPlumbingEquipmentList(axios, query),
    })
}

export function useFetchBracketPlumbing(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["plumbing", query],
        queryFn: () => getBracketPlumbingEquipmentList(axios, query),
    })
}