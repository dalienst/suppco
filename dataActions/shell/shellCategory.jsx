"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getBracketShellEquipment, getCategoryShellEquipment, getSubCategoryItemShellEquipmentList, getSubCategoryShellEquipment } from "@/services/shell";
import { useQuery } from "@tanstack/react-query";

export function useFetchCategoryShellEquipment(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["categoryShellEquipment", query],
        queryFn: () => getCategoryShellEquipment(axios, query),
    })
}

export function useFetchSubCategoryShellEquipment(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["subCategoryShellEquipment", query],
        queryFn: () => getSubCategoryShellEquipment(axios, query),
    })
}

export function useFetchSubCategoryItemShellEquipment(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["subCategoryItemShellEquipment", query],
        queryFn: () => getSubCategoryItemShellEquipmentList(axios, query),
    })
}

export function useFetchBracketShellEquipment(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["bracketShellEquipment", query],
        queryFn: () => getBracketShellEquipment(axios, query),
    })
}