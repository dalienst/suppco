"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { useQuery } from '@tanstack/react-query'
import { useFetchSubCategoryItemShellEquipment } from './shellCategory';

function useFetchFilteredShellItem(query) {
    const axios = useAxiosAuth()
    return useQuery({
        queryKey: ["shell", query],
        queryFn: () => useFetchSubCategoryItemShellEquipment(axios, query),
    })
}

export default useFetchFilteredShellItem