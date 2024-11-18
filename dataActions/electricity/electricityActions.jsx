"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getBracketElectricityEquipment, getCategoryElectricityEquipment, getItemElectricityEquipment, getSubCategoryElectricityEquipment } from "@/services/electricity";
import { useQuery } from "@tanstack/react-query";

export function useFetchCategoryElectricity(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["electricity", query],
        queryFn: () => getCategoryElectricityEquipment(axios, query),
        enabled: !!query,
    })
}

export function useFetchSubCategoryElectricity(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["electricity", query],
        queryFn: () => getSubCategoryElectricityEquipment(axios, query),
        enabled: !!query,
    })
}

export function useFetchSubCategoryItemElectricity(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["electricity", query],
        queryFn: () => getItemElectricityEquipment(axios, query),
        enabled: !!query,
    })
}

export function useFetchBracketElectricity(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["electricity", query],
        queryFn: () => getBracketElectricityEquipment(axios, query),
        enabled: !!query,
    })
}