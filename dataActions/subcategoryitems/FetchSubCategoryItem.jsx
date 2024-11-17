import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getSubCategoryItem } from '@/services/category';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchSubCategoryItem() {
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ['subCategoryItem'],
        queryFn: () => getSubCategoryItem(axios),
    })
}

export default useFetchSubCategoryItem