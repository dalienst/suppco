"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getSiteDetail } from '@/services/sites';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useFetchSiteDetail(siteSlug) {
    const axios = useAxiosAuth();
  return useQuery({
    queryKey: ["siteDetail", siteSlug],
    queryFn: () => getSiteDetail(siteSlug, axios),
    enabled: !!siteSlug,
  })
}

export default useFetchSiteDetail