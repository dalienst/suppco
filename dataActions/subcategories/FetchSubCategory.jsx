import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getSubCategory } from '@/services/category';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchSubCategory() {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ['subCategory'],
        queryFn: () => getSubCategory(axios),
    })
}

export default useFetchSubCategory