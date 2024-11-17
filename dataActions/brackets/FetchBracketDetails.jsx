"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getBracketDetail } from '@/services/category'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function useFetchBracketDetails(slug) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ['bracket', slug],
        queryFn: () => getBracketDetail(axios, slug),
    })
}

export default useFetchBracketDetails