"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getCompanyEmployees, getEmployeeDetail, getEmployees } from "@/services/employees";
import { useQuery } from "@tanstack/react-query";


export function useFetchEmployees() {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ["employees"],
        queryFn: () => getEmployees(axios),
    })
}

export function useFetchCompanyEmployees(query) {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ["employees", query],
        queryFn: () => getCompanyEmployees(axios, query),
        enabled: !!query
    })
}

export function useFetchEmployeeDetail(slug) {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ["employee", slug],
        queryFn: () => getEmployeeDetail(axios, slug),
        enabled: !!slug
    })
}