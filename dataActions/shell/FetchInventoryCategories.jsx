"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { getInventoryCategories } from '@/services/categories'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function useFetchInventoryCategories(inventory) {
  const axios = useAxiosAuth()
  return useQuery({
    queryKey: ["inventoryCategories", inventory],
    queryFn: () => getInventoryCategories(inventory, axios)
  })
}

export default useFetchInventoryCategories