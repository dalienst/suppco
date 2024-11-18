"use client"
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getWorkerDetail } from "@/services/workers";
import { useQuery } from "@tanstack/react-query";

export function useFetchWorkerDetail(slug) {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ["worker", slug],
        queryFn: () => getWorkerDetail(axios, slug),
        enabled: !!slug,
    })
}