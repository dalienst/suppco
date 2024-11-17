"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getCategories } from '@/services/category';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchCategory() {
    const axios = useAxiosAuth()
    return useQuery({
        queryKey: ['category'],
        queryFn: () => getCategories(axios),
    })
}

export default useFetchCategory