"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getCategoryDetail } from '@/services/category';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchCategoryDetails(slug) {
    const axios = useAxiosAuth()
    return useQuery({
        queryKey: ["category", slug],
        queryFn: () => getCategoryDetail(axios, slug),
        enabled: !!slug,
    })
}

export default useFetchCategoryDetails