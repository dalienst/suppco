"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getBracketSiteEquipmentList } from '@/services/siteEquipment';
import { useQuery } from '@tanstack/react-query';

function useFetchBracketSiteEquipment(query) {
    const axios = useAxiosAuth();
    return useQuery({
        queryKey: ["bracketSiteEquipment", query],
        queryFn: () => getBracketSiteEquipmentList(axios, query),
        enabled: !!query,
    })
}

export default useFetchBracketSiteEquipment