"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth';
import useUserId from '@/hooks/useUserId'
import { getUser } from '@/services/accounts';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchProfile() {
    const userId = useUserId();
    const axios = useAxiosAuth();

    return useQuery({
        queryKey: ["profile"],
        queryFn: () => getUser(userId, axios),
    })
}

export default useFetchProfile