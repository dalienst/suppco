"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getSites } from '@/services/sites'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function useFetchSites() {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ['sites'],
        queryFn: () => getSites(axios),
        enabled: true,
    })
}

export default useFetchSites