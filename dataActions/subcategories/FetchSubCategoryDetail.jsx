import useAxiosAuth from '@/hooks/useAxiosAuth';
import { getSubCategoryDetail } from '@/services/category';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function FetchSubCategoryDetail(subSlug) {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ['subCategory'],
        queryFn: () => getSubCategoryDetail(axios, subSlug),
    })
}

export default FetchSubCategoryDetail